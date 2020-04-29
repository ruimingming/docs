---
title: 自动装箱和拆箱
---

自动装箱和拆箱从Java 1.5开始引入，目的是将原始类型值转自动地转换成对应的对象。自动装箱与拆箱的机制可以让我们在Java的变量赋值或者是方法调用等情况下使用原始类型或者对象类型更加简单直接。

如果你在Java1.5下进行过编程的话，你一定不会陌生这一点，你不能直接地向集合(Collections)中放入原始类型值，因为集合只接收对象。通常这种情况下你的做法是，将这些原始类型的值转换成对象，然后将这些转换的对象放入集合中。使用Integer,Double,Boolean等这些类我们可以将原始类型值转换成对应的对象，但是从某些程度可能使得代码不是那么简洁精炼。为了让代码简练，Java 1.5引入了具有在原始类型和对象类型自动转换的装箱和拆箱机制。但是自动装箱和拆箱并非完美，在使用时需要有一些注意事项，如果没有搞明白自动装箱和拆箱，可能会引起难以察觉的bug。

本文将介绍，什么是自动装箱和拆箱，自动装箱和拆箱发生在什么时候，以及要注意的事项。

## 什么是自动装箱和拆箱

自动装箱就是Java自动将原始类型值转换成对应的对象，比如将int的变量转换成Integer对象，这个过程叫做装箱，反之将Integer对象转换成int类型值，这个过程叫做拆箱。因为这里的装箱和拆箱是自动进行的非人为转换，所以就称作为自动装箱和拆箱。原始类型byte,short,char,int,long,float,double和boolean对应的封装类为Byte,Short,Character,Integer,Long,Float,Double,Boolean。

## 自动装箱拆箱原理

我们有以下自动拆装箱的代码：

```java
public static  void main(String[]args){
        Integer integer=1; //装箱
        int i=integer; //拆箱
}
```

对以上代码进行反编译后可以得到以下代码：

```java
public static  void main(String[]args){
    Integer integer=Integer.valueOf(1); 
    int i=integer.intValue(); 
}
```

从上面反编译后的代码可以看出，int的自动装箱都是通过`Integer.valueOf()`方法来实现的，Integer的自动拆箱都是通过`integer.intValue`来实现的。如果读者感兴趣，可以试着将八种类型都反编译一遍 ，你会发现以下规律：

- 自动装箱时编译器调用 **valueOf** 将原始类型值转换成对象，同时自动拆箱时，编译器通过调用类似 **intValue(),doubleValue()** 这类的方法将对象转换成原始类型值。
- 自动装箱是将 boolean 值转换成 Boolean 对象，byte 值转换成 Byte 对象，char 转换成 Character 对象，float 值转换成 Float 对象，int 转换成 Integer，long 转换成 Long，short 转换成 Short ，自动拆箱则是相反的操作。

## 何时发生自动装箱和拆箱

1. 赋值
2. 将基本数据类型放入集合类
3. 方法调用入参和方法返回值
4. 被操作符操作

### 将基本数据类型放入集合类

我们知道，Java中的集合类只能接收对象类型，那么以下代码为什么会不报错呢？

```java
List<Integer> li = new ArrayList<>();
for (int i = 1; i < 50; i ++){
    li.add(i);
}
```

将上面代码进行反编译，可以得到以下代码：

```java
List<Integer> li = new ArrayList<>();
for (int i = 1; i < 50; i += 2){
    li.add(Integer.valueOf(i));
}
```

以上，我们可以得出结论，当我们把基本数据类型放入集合类中的时候，会进行自动装箱。

### 包装类型和基本类型的大小比较

有没有人想过，当我们对Integer对象与基本类型进行大小比较的时候，实际上比较的是什么内容呢？看以下代码：

```java
Integer a=1;
System.out.println(a==1?"等于":"不等于");
Boolean bool=false;
System.out.println(bool?"真":"假");
```

对以上代码进行反编译，得到以下代码：

```java
Integer a=1;
System.out.println(a.intValue()==1?"等于":"不等于");
Boolean bool=false;
System.out.println(bool.booleanValue?"真":"假");
```

可以看到，包装类与基本数据类型进行比较运算，是先将包装类进行拆箱成基本数据类型，然后进行比较的。

### 包装类型的运算

有没有人想过，当我们对Integer对象进行四则运算的时候，是如何进行的呢？看以下代码：

```java
Integer i = 10;
Integer j = 20;

System.out.println(i+j);
```

反编译后代码如下：

```java
Integer i = Integer.valueOf(10);
Integer j = Integer.valueOf(20);
System.out.println(i.intValue() + j.intValue());
```

我们发现，两个包装类型之间的运算，会被自动拆箱成基本类型进行。

### 三目运算符的使用

这是很多人不知道的一个场景，作者也是一次线上的血淋淋的Bug发生后才了解到的一种案例。看一个简单的三目运算符的代码：

```java
boolean flag = true;
Integer i = 0;
int j = 1;
int k = flag ? i : j;
```

很多人不知道，其实在`int k = flag ? i : j;`这一行，会发生自动拆箱。反编译后代码如下：

```java
boolean flag = true;
Integer i = Integer.valueOf(0);
int j = 1;
int k = flag ? i.intValue() : j;
System.out.println(k);
```

这其实是三目运算符的语法规范。当第二，第三位操作数分别为基本类型和对象时，其中的对象就会拆箱为基本类型进行操作。

因为例子中，`flag ? i : j;`片段中，第二段的i是一个包装类型的对象，而第三段的j是一个基本类型，所以会对包装类进行自动拆箱。如果这个时候i的值为`null`，那么就会发生NPE。（[自动拆箱导致空指针异常](http://www.hollischuang.com/archives/435)）

### 函数参数与返回值

这个比较容易理解，直接上代码了：

```java
//自动拆箱
public int getNum1(Integer num) {
    return num;
}
//自动装箱
public Integer getNum2(int num) {
    return num;
}
```

## 自动装箱的弊端

在堆内存中创建对象的消耗肯定是要比使用栈内存要多的，同时在自动拆装箱的时候，也有一定的性能消耗，如果在数据量比较大，或者是循环的情况下，频繁的拆装箱并且生成包装类的时候，对性能的影响就是一星半点了，所以不是特殊的需求，例如上述被集合持有的情况，还是使用基本类型而不是包装类。

如下面的例子就会创建多余的对象，影响程序的性能。

```java
Integer sum = 0;
 for(int i=1000; i<5000; i++){
   sum+=i;
}
```

上面的代码`sum+=i`可以看成`sum = sum + i`，但是`+`这个操作符不适用于Integer对象，首先sum进行自动拆箱操作，进行数值相加操作，最后发生自动装箱操作转换成Integer对象。其内部变化如下

```java
int result = sum.intValue() + i; 
Integer sum = new Integer(result); 
```

由于我们这里声明的sum为Integer类型，在上面的循环中会创建将近4000个无用的Integer对象，在这样庞大的循环中，会降低程序的性能并且加重了垃圾回收的工作量。因此在我们编程时，需要注意到这一点，正确地声明变量类型，避免因为自动装箱引起的性能问题。

## 重载与自动装箱

当重载遇上自动装箱时，情况会比较有些复杂，可能会让人产生有些困惑。在1.5之前，value(int)和value(Integer)是完全不相同的方法，开发者不会因为传入是int还是Integer调用哪个方法困惑，但是由于自动装箱和拆箱的引入，处理重载方法时稍微有点复杂。一个典型的例子就是ArrayList的remove方法，它有`remove(index)`和`remove(Object)`两种重载，我们可能会有一点小小的困惑，其实这种困惑是可以验证并解开的，通过下面的例子我们可以看到，当出现这种情况时，不会发生自动装箱操作。

```java
public void test(int num){
    System.out.println("method with primitive argument");

}

public void test(Integer num){
    System.out.println("method with wrapper argument");

}

//calling overloaded method
AutoboxingTest autoTest = new AutoboxingTest();
int value = 3;
autoTest.test(value); //no autoboxing 
Integer iValue = value;
autoTest.test(iValue); //no autoboxing

Output:
method with primitive argument
method with wrapper argument
```

## 要注意的事项

自动装箱和拆箱可以使代码变得简洁,但是其也存在一些问题和极端情况下的问题，以下几点需要我们加强注意。

### 对象相等比较

这是一个比较容易出错的地方，”\==“ 可以用于原始值进行比较，也可以用于对象进行比较，当用于对象与对象之间比较时，比较的不是对象代表的值，而是检查两个对象是否是同一对象，这个比较过程中没有自动装箱发生。进行对象值比较不应该使用 ”==“，而应该使用对象对应的equals方法。看一个能说明问题的例子。

```java
public class AutoboxingTest {

    public static void main(String args[]) {

        // Example 1: == comparison pure primitive – no autoboxing
        int i1 = 1;
        int i2 = 1;
        System.out.println("i1==i2 : " + (i1 == i2)); // true

        // Example 2: equality operator mixing object and primitive
        Integer num1 = 1; // autoboxing
        int num2 = 1;
        System.out.println("num1 == num2 : " + (num1 == num2)); // true

        // Example 3: special case - arises due to autoboxing in Java
        Integer obj1 = 1; // autoboxing will call Integer.valueOf()
        Integer obj2 = 1; // same call to Integer.valueOf() will return same
                            // cached Object

        System.out.println("obj1 == obj2 : " + (obj1 == obj2)); // true

        // Example 4: equality operator - pure object comparison
        Integer one = new Integer(1); // no autoboxing
        Integer anotherOne = new Integer(1);
        System.out.println("one == anotherOne : " + (one == anotherOne)); // false

    }

}

Output:
i1==i2 : true
num1 == num2 : true
obj1 == obj2 : true
one == anotherOne : false
```

值得注意的是第三个小例子，这是一种极端情况。obj1和obj2的初始化都发生了自动装箱操作。但是处于节省内存的考虑，JVM会缓存-128到127的Integer对象。因为obj1和obj2实际上是同一个对象。所以使用”==“比较返回true。

### 容易混乱的对象和原始数据值

另一个需要避免的问题就是混乱使用对象和原始数据值，一个具体的例子就是当我们在一个原始数据值与一个对象进行比较时，如果这个对象没有进行初始化或者为Null，在自动拆箱过程中obj.xxxValue，会抛出NullPointerException,如下面的代码

```java
private static Integer count;

//NullPointerException on unboxing
if( count <= 0){
  System.out.println("Count is not started yet");
}
```

### 缓存的对象

这个问题就是我们上面提到的极端情况，在Java中，会对-128到127的Integer对象进行缓存，当创建新的Integer对象时，如果符合这个这个范围，并且已有存在的相同值的对象，则返回这个对象，否则创建新的Integer对象。

```java
public class Main {
    public static void main(String[] args) {

        Integer i1 = 100;
        Integer i2 = 100;
        Integer i3 = 200;
        Integer i4 = 200;

        System.out.println(i1==i2);
        System.out.println(i3==i4);
    }
}

Output:
true
false
```

为什么运行结果是这样呢，让我们来翻一翻源码：

```java
public static Integer valueOf(int i) {
        if(i >= -128 && i <= IntegerCache.high)
            return IntegerCache.cache[i + 128];
        else
            return new Integer(i);
}
```

欸，看来问题就出在 `IntegerCache` 类中了,我们再来翻一下`IntegerCache` 的实现类：

```java
private static class IntegerCache {
    static final int low = -128;
    static final int high;
    static final Integer cache[];

    static {
        // high value may be configured by property
        int h = 127;
        String integerCacheHighPropValue =
            sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
        if (integerCacheHighPropValue != null) {
            try {
                int i = parseInt(integerCacheHighPropValue);
                i = Math.max(i, 127);
                // Maximum array size is Integer.MAX_VALUE
                h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
            } catch( NumberFormatException nfe) {
                // If the property cannot be parsed into an int, ignore it.
            }
        }
        high = h;

        cache = new Integer[(high - low) + 1];
        int j = low;
        for(int k = 0; k < cache.length; k++)
            cache[k] = new Integer(j++);

        // range [-128, 127] must be interned (JLS7 5.1.7)
        assert IntegerCache.high >= 127;
    }

    private IntegerCache() {}
}
```

可以看到：在通过 `valueOf` 方法创建 `Integer` 对象的时候，如果数值在 `[-128,127]` 之间，便返回指向 `IntegerCache.cache` 中已经存在的对象的引用；否则创建一个新的 `Integer` 对象。

上面的代码中 `i1` 和 `i2` 的数值为100，因此会直接从 `cache` 中取已经存在的对象，所以 `i1` 和 `i2` 指向的是同一个对象，而 `i3` 和 `i4` 超出了缓存值的范围，因此会创建两个不同的对象，引用自然不是一个地址了。

这里要说的是，包装类都有相应的缓存机制，来降低一般情况下的资源消耗，但是每个包装类的机制肯定是不一样的。

在Java中另一个节省内存的例子就是[字符串常量池](https://droidyue.com/blog/2014/12/21/string-literal-pool-in-java/),感兴趣的同学可以了解一下。

### 生成无用对象增加GC压力

因为自动装箱会隐式地创建对象，像前面提到的那样，如果在一个循环体中，会创建无用的中间对象，这样会增加GC压力，拉低程序的性能。所以在写循环时一定要注意代码，避免引入不必要的自动装箱操作。

如想了解垃圾回收和内存优化，可以查看本文[Google IO：Android内存管理主题演讲记录](https://droidyue.com/blog/2014/11/02/note-for-google-io-memory-management-for-android-chinese-edition/)

总的来说，自动装箱和拆箱着实为开发者带来了很大的方便，但是在使用时也是需要格外留意，避免引起出现文章提到的问题。

