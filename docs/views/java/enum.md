---
title: 枚举
---

Java SE5提供了一种新的类型-[Java的枚举类型](http://www.hollischuang.com/archives/195)，关键字enum可以将一组具名的值的有限集合创建为一种新的类型，而这些具名的值可以作为常规的程序组件使用，这是一种非常有用的功能。本文将深入分析枚举的源码，看一看枚举是怎么实现的，他是如何保证线程安全的，以及为什么用枚举实现的单例是最好的方式。

## 枚举是如何保证线程安全的

```java
public enum t {
    SPRING,SUMMER,AUTUMN,WINTER;
}
```

反编译（[Java的反编译](http://www.hollischuang.com/archives/58)）后代码内容如下：

jdk1.8

```java
public final class t extends Enum<t> {
    public static final /* enum */ t SPRING = new t("SPRING", 0);
    public static final /* enum */ t SUMMER = new t("SUMMER", 1);
    public static final /* enum */ t AUTUMN = new t("AUTUMN", 2);
    public static final /* enum */ t WINTER = new t("WINTER", 3);
    private static final /* synthetic */ t[] $VALUES;

    public static t[] values() {
        return (t[])$VALUES.clone();
    }

    public static t valueOf(String string) {
        return Enum.valueOf(t.class, string);
    }

    private t(String string, int n) {
        super(string, n);
    }

    static {
        $VALUES = new t[]{SPRING, SUMMER, AUTUMN, WINTER};
    }
}
```

```java
public final class T extends Enum
{
    private T(String s, int i)
    {
        super(s, i);
    }
    public static T[] values()
    {
        T at[];
        int i;
        T at1[];
        System.arraycopy(at = ENUM$VALUES, 0, at1 = new T[i = at.length], 0, i);
        return at1;
    }

    public static T valueOf(String s)
    {
        return (T)Enum.valueOf(demo/T, s);
    }

    public static final T SPRING;
    public static final T SUMMER;
    public static final T AUTUMN;
    public static final T WINTER;
    private static final T ENUM$VALUES[];
    //静态代码块对属性进行初始化,所以对象无法延迟加载
    static
    {
        
        //默认以参数名为name,ordinal默认从0开始递增
        SPRING = new T("SPRING", 0);
        SUMMER = new T("SUMMER", 1);
        AUTUMN = new T("AUTUMN", 2);
        WINTER = new T("WINTER", 3);
        ENUM$VALUES = (new T[] {
            SPRING, SUMMER, AUTUMN, WINTER
        });
    }
}
```

```java
public abstract class Enum<E extends Enum<E>> implements Comparable<E>, Serializable {
    private final String name;

    public final String name() {
        return name;
    }

    private final int ordinal;

    public final int ordinal() {
        return ordinal;
    }

    protected Enum(String name, int ordinal) {
        this.name = name;
        this.ordinal = ordinal;
    }

    //toString默认输出name
    public String toString() {
        return name;
    }

    public static <T extends Enum<T>> T valueOf(Class<T> enumType,
                                                String name) {
        T result = enumType.enumConstantDirectory().get(name);
        if (result != null)
            return result;
        if (name == null)
            throw new NullPointerException("Name is null");
        throw new IllegalArgumentException(
                "No enum constant " + enumType.getCanonicalName() + "." + name);
    }

    /**
     * enum classes cannot have finalize methods.
     */
    protected final void finalize() {
    }

    /**
     * prevent default deserialization
     */
    private void readObject(ObjectInputStream in) throws IOException,
            ClassNotFoundException {
        throw new InvalidObjectException("can't deserialize enum");
    }

    private void readObjectNoData() throws ObjectStreamException {
        throw new InvalidObjectException("can't deserialize enum");
    }
```

通过反编译后代码我们可以看到，`public final class T extends Enum`，说明，该类是继承了Enum类的，同时final关键字告诉我们，这个类也是不能被继承的。当我们使用`enmu`来定义一个枚举类型的时候，编译器会自动帮我们创建一个final类型的类继承Enum类,所以枚举类型不能被继承，我们看到这个类中有几个属性和方法。

```java
public static final T SPRING;
public static final T SUMMER;
public static final T AUTUMN;
public static final T WINTER;
private static final T ENUM$VALUES[];
static
{
    SPRING = new T("SPRING", 0);
    SUMMER = new T("SUMMER", 1);
    AUTUMN = new T("AUTUMN", 2);
    WINTER = new T("WINTER", 3);
    ENUM$VALUES = (new T[] {
        SPRING, SUMMER, AUTUMN, WINTER
    });
}
```

这些属性都是static类型的，因为static类型的属性会在类被加载之后被初始化,当一个Java类第一次被真正使用到的时候,其静态资源才会被初始化、而Java类的加载和初始化过程都是线程安全的(因为虚拟机在加载类的时候，会使用ClassLoader的loadClass方法，而这个方法使用同步代码块保证了线程安全）。所以，**创建一个enum类型是线程安全的**。

>那么，什么情况下虚拟机需要开始初始化一个类呢？这在虚拟机规范中是有严格规定的，虚拟机规范指明 有且只有 五种情况必须立即对类进行初始化（而这一过程自然发生在加载、验证、准备之后）：
>
>　　1) 遇到new、getstatic、putstatic或invokestatic这四条字节码指令（注意，newarray指令触发的只是数组类型本身的初始化，而不会导致其相关类型的初始化，比如，new String[]只会直接触发String[]类的初始化，也就是触发对类[Ljava.lang.String的初始化，而直接不会触发String类的初始化）时，如果类没有进行过初始化，则需要先对其进行初始化。生成这四条指令的最常见的Java代码场景是：
>
>​			1.使用new关键字实例化对象的时候；
>
>​			2.读取或设置一个类的静态字段（被final修饰，已在编译器把结果放入常量池的静态字段除外）的时候；
>
>​			3.调用一个类的静态方法的时候。
>
>　　2) 使用java.lang.reflect包的方法对类进行反射调用的时候，如果类没有进行过初始化，则需要先触发其初始化。
>
>　　3) 当初始化一个类的时候，如果发现其父类还没有进行过初始化，则需要先触发其父类的初始化。
>
>　　4) 当虚拟机启动时，用户需要指定一个要执行的主类（包含main()方法的那个类），虚拟机会先初始化这个主类。
>
>　　5) 当使用jdk1.7动态语言支持时，如果一个java.lang.invoke.MethodHandle实例最后的解析结果REF_getstatic,REF_putstatic,REF_invokeStatic的方法句柄，并且这个方法句柄所对应的类没有进行初始化，则需要先出触发其初始化。
>
>　　注意，对于这五种会触发类进行初始化的场景，虚拟机规范中使用了一个很强烈的限定语：“有且只有”，这五种场景中的行为称为对一个类进行 主动引用。除此之外，所有引用类的方式，都不会触发初始化，称为 被动引用。
>
>　　特别需要指出的是，类的实例化与类的初始化是两个完全不同的概念：
>
>类的实例化是指创建一个类的实例(对象)的过程；
>类的初始化是指为类中各个类成员(被static修饰的成员变量)赋初始值的过程，是类生命周期中的一个阶段。

## 为什么用枚举实现的单例是最好的方式

在[[转+注\]单例模式的七种写法](http://www.hollischuang.com/archives/205)中，我们看到一共有七种实现单例的方式，其中，**Effective Java**作者`Josh Bloch` 提倡使用枚举的方式，既然大神说这种方式好，那我们就要知道它为什么好？

### 1. 枚举写法简单

```java
public class EnumSingleton {

    /**
     * 私有构造
     */
    private EnumSingleton() {
    }

    /**
     * 私有内部类
     * 枚举类型是线程安全的，并且只会装载一次
     */
    private enum Singleton {
        INSTANCE;

        /**
         * 静态属性,持有外部类对象
         */
        private final EnumSingleton instance;

        Singleton() {
            instance = new EnumSingleton();
        }

        private EnumSingleton getInstance() {
            return instance;
        }
    }

    public static EnumSingleton getInstance() {

        return Singleton.INSTANCE.getInstance();
    }
}

```

你可以通过`EnumSingleton.getInstance()`来访问。

### 2.枚举自己处理序列化

我们知道，以前的所有的单例模式都有一个比较大的问题，就是一旦实现了Serializable接口之后，就不再是单例得了，因为，每次调用 readObject()方法返回的都是一个新创建出来的对象，有一种解决办法就是使用readResolve()方法来避免此事发生。但是，**为了保证枚举类型像Java规范中所说的那样，每一个枚举类型极其定义的枚举变量在JVM中都是唯一的，在枚举类型的序列化和反序列化上，Java做了特殊的规定。**原文如下：

> Enum constants are serialized differently than ordinary serializable or externalizable objects. The serialized form of an enum constant consists solely of its name; field values of the constant are not present in the form. To serialize an enum constant, ObjectOutputStream writes the value returned by the enum constant’s name method. To deserialize an enum constant, ObjectInputStream reads the constant name from the stream; the deserialized constant is then obtained by calling the java.lang.Enum.valueOf method, passing the constant’s enum type along with the received constant name as arguments. Like other serializable or externalizable objects, enum constants can function as the targets of back references appearing subsequently in the serialization stream. The process by which enum constants are serialized cannot be customized: any class-specific writeObject, readObject, readObjectNoData, writeReplace, and readResolve methods defined by enum types are ignored during serialization and deserialization. Similarly, any serialPersistentFields or serialVersionUID field declarations are also ignored–all enum types have a fixedserialVersionUID of 0L. Documenting serializable fields and data for enum types is unnecessary, since there is no variation in the type of data sent.

大概意思就是说，在序列化的时候Java仅仅是将枚举对象的name属性输出到结果中，反序列化的时候则是通过java.lang.Enum的valueOf方法来根据名字查找枚举对象。同时，编译器是不允许任何对这种序列化机制的定制的，因此禁用了writeObject、readObject、readObjectNoData、writeReplace和readResolve等方法。因此也不存在实现序列化接口后调用readObject会破坏单例的问题。 我们看一下这个`valueOf`方法：

```java
public static <T extends Enum<T>> T valueOf(Class<T> enumType,String name) {
    //获取当前枚举的map key就是枚举属性名,value就是枚举属性对象(从源码可知每个枚举属性都是当前枚举的类型),根据枚举名获取枚举对象
    T result = enumType.enumConstantDirectory().get(name);  
    if (result != null)  
        return result;  
    if (name == null)  
        throw new NullPointerException("Name is null");  
    throw new IllegalArgumentException(  
        "No enum const " + enumType +"." + name);  
}  
```

```java
Map<String, T> enumConstantDirectory() {
    if (enumConstantDirectory == null) {
        //获取当前枚举的valuses()方法
        T[] universe = getEnumConstantsShared();
        if (universe == null)
            throw new IllegalArgumentException(
                getName() + " is not an enum type");
        Map<String, T> m = new HashMap<>(2 * universe.length);
        //遍历所有枚举属性
        for (T constant : universe)
            //将所有枚举以 枚举名 + 枚举 key-value的形式放入map
            m.put(((Enum<?>)constant).name(), constant);
        enumConstantDirectory = m;
    }
    return enumConstantDirectory;
}
```

```java
T[] getEnumConstantsShared() {
        if (enumConstants == null) {
            if (!isEnum()) return null;
            try {
                //获取当前枚举的values方法
                final Method values = getMethod("values");
                java.security.AccessController.doPrivileged(
                    new java.security.PrivilegedAction<Void>() {
                        public Void run() {
                                values.setAccessible(true);
                                return null;
                            }
                        });
                @SuppressWarnings("unchecked")
                T[] temporaryConstants = (T[])values.invoke(null);
                enumConstants = temporaryConstants;
            }
            // These can happen when users concoct enum-like classes
            // that don't comply with the enum spec.
            catch (InvocationTargetException | NoSuchMethodException |
                   IllegalAccessException ex) { return null; }
        }
        return enumConstants;
    }
```

从代码中可以看到，代码会尝试从调用`enumType`这个`Class`对象的`enumConstantDirectory()`方法返回的`map`中获取名字为`name`的枚举对象，如果不存在就会抛出异常。再进一步跟到`enumConstantDirectory()`方法，就会发现到最后会以反射的方式调用`enumType`这个类型的`values()`静态方法，也就是上面我们看到的编译器为我们创建的那个方法，然后用返回结果填充`enumType`这个`Class`对象中的`enumConstantDirectory`属性。

所以，**JVM对序列化有保证。**

### 3.枚举实例创建是thread-safe(线程安全的)

当一个Java类第一次被真正使用到的时候静态资源被初始化、Java类的加载和初始化过程都是线程安全的。所以，**创建一个enum类型是线程安全的**。

## 反编译

```java
import java.io.Serializable;

/**
 * 枚举就是最好的单例
 *
 * @author: zhangruiming
 * @create: 2020-04-18 01:07
 **/
public enum Singleton implements Serializable {
    INSTANCE,
    NAME{
        String name;
        public  void say(){
            System.out.println(name);
        }
    };

    private static final long serialVersionUID = 1L;

    private Singleton() {
        System.out.println("123123");
    }
}
```

会生成两个class文件

### Singleton.class

```java
import java.io.Serializable;

public class Singleton extends Enum<Singleton> implements Serializable {
    public static final /* enum */ Singleton INSTANCE = new Singleton("INSTANCE", 0);
    public static final /* enum */ Singleton NAME = new Singleton("NAME", 1){
        String name;

        public void say() {
            System.out.println(this.name);
        }
    };
    private static final long serialVersionUID = 1L;
    private static final /* synthetic */ Singleton[] $VALUES;

    public static Singleton[] values() {
        return (Singleton[])$VALUES.clone();
    }

    public static Singleton valueOf(String string) {
        return Enum.valueOf(Singleton.class, string);
    }

    private Singleton(String string, int n) {
        super(string, n);
        System.out.println("123123");
    }

    static {
        $VALUES = new Singleton[]{INSTANCE, NAME};
    }
}
```

### Singleton$1.class

```java
import com.my.test.main.singleton.bean.Singleton;

static final class Singleton.1 extends Singleton {
    String name;

    Singleton.1(String string, int n) {
        super(string, n, null);
    }

    public void say() {
        System.out.println(this.name);
    }
}
```

可以看出,NAME就是Singleton的一个静态内部子类

## TimeUnit

```java
public enum TimeUnit {
	/**
     * Time unit representing one thousandth of a second
     */
    MILLISECONDS {
        public long toNanos(long d)   { return x(d, C2/C0, MAX/(C2/C0)); }
        public long toMicros(long d)  { return x(d, C2/C1, MAX/(C2/C1)); }
        public long toMillis(long d)  { return d; }
        public long toSeconds(long d) { return d/(C3/C2); }
        public long toMinutes(long d) { return d/(C4/C2); }
        public long toHours(long d)   { return d/(C5/C2); }
        public long toDays(long d)    { return d/(C6/C2); }
        public long convert(long d, TimeUnit u) { return u.toMillis(d); }
        int excessNanos(long d, long m) { return 0; }
    },

    /**
     * Time unit representing one second
     */
    SECONDS {
        public long toNanos(long d)   { return x(d, C3/C0, MAX/(C3/C0)); }
        public long toMicros(long d)  { return x(d, C3/C1, MAX/(C3/C1)); }
        public long toMillis(long d)  { return x(d, C3/C2, MAX/(C3/C2)); }
        public long toSeconds(long d) { return d; }
        public long toMinutes(long d) { return d/(C4/C3); }
        public long toHours(long d)   { return d/(C5/C3); }
        public long toDays(long d)    { return d/(C6/C3); }
        public long convert(long d, TimeUnit u) { return u.toSeconds(d); }
        int excessNanos(long d, long m) { return 0; }
    },
    //省略
    // Handy constants for conversion methods
    static final long C0 = 1L;
    static final long C1 = C0 * 1000L;
    static final long C2 = C1 * 1000L;
    static final long C3 = C2 * 1000L;
    static final long C4 = C3 * 60L;
    static final long C5 = C4 * 60L;
    static final long C6 = C5 * 24L;

    static final long MAX = Long.MAX_VALUE;
    
    /**
     * Scale d by m, checking for overflow.
     * This has a short name to make above code more readable.
     */
    static long x(long d, long m, long over) {
        if (d >  over) return Long.MAX_VALUE;
        if (d < -over) return Long.MIN_VALUE;
        return d * m;
    }
    
    /**
     * Performs a timed {@link Object##wait(long, int) Object.wait}
     * using this time unit.
     * This is a convenience method that converts timeout arguments
     * into the form required by the {@code Object.wait} method.
     *
     * <p>For example, you could implement a blocking {@code poll}
     * method (see {@link BlockingQueue##poll BlockingQueue.poll})
     * using:
     *
     *  <pre> {@code
     * public synchronized Object poll(long timeout, TimeUnit unit)
     *     throws InterruptedException {
     *   while (empty) {
     *     unit.timedWait(this, timeout);
     *     ...
     *   }
     * }}</pre>
     *
     * @param obj the object to wait on
     * @param timeout the maximum time to wait. If less than
     * or equal to zero, do not wait at all.
     * @throws InterruptedException if interrupted while waiting
     */
    public void timedWait(Object obj, long timeout)
            throws InterruptedException {
        if (timeout > 0) {
            long ms = toMillis(timeout);
            int ns = excessNanos(timeout, ms);
            obj.wait(ms, ns);
        }
    }

    /**
     * Performs a timed {@link Thread##join(long, int) Thread.join}
     * using this time unit.
     * This is a convenience method that converts time arguments into the
     * form required by the {@code Thread.join} method.
     *
     * @param thread the thread to wait for
     * @param timeout the maximum time to wait. If less than
     * or equal to zero, do not wait at all.
     * @throws InterruptedException if interrupted while waiting
     */
    public void timedJoin(Thread thread, long timeout)
            throws InterruptedException {
        if (timeout > 0) {
            long ms = toMillis(timeout);
            int ns = excessNanos(timeout, ms);
            thread.join(ms, ns);
        }
    }
    /**
     * Performs a {@link Thread##sleep(long, int) Thread.sleep} using
     * this time unit.
     * This is a convenience method that converts time arguments into the
     * form required by the {@code Thread.sleep} method.
     *
     * @param timeout the minimum time to sleep. If less than
     * or equal to zero, do not sleep at all.
     * @throws InterruptedException if interrupted while sleeping
     */
    public void sleep(long timeout) throws InterruptedException {
        if (timeout > 0) {
            long ms = toMillis(timeout);
            int ns = excessNanos(timeout, ms);
            Thread.sleep(ms, ns);
        }
    }
}
```

经过之前的反编译,这里的 **MILLISECONDS** 和 **SECONDS** 等就很好理解了,他们就是当前类的一个由 **final** 修饰的静态内部子类,每个子类都重写了相应的方法,我觉得这就是通过枚举实现多个静态内部类的简便写法

### 为什么

为什么这样写就能成为内部子类呢,这是因为编译器在加载枚举类的时候做了特殊的处理