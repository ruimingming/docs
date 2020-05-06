(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{444:function(t,a,s){"use strict";s.r(a);var r=s(5),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"什么是面向过程？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是面向过程？"}},[t._v("#")]),t._v(" 什么是面向过程？")]),t._v(" "),s("h3",{attrs:{id:"概述-自顶而下的编程模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述-自顶而下的编程模式"}},[t._v("#")]),t._v(" 概述: 自顶而下的编程模式")]),t._v(" "),s("p",[t._v("把问题分解成一个一个步骤，每个步骤用函数实现，依次调用即可。")]),t._v(" "),s("p",[t._v("就是说，在进行面向过程编程的时候，不需要考虑那么多，上来先定义一个函数，然后使用各种诸如if-else、for-each等方式进行代码执行。")]),t._v(" "),s("p",[t._v("最典型的用法就是实现一个简单的算法，比如实现冒泡排序。")]),t._v(" "),s("h2",{attrs:{id:"什么是面向对象？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是面向对象？"}},[t._v("#")]),t._v(" 什么是面向对象？")]),t._v(" "),s("h3",{attrs:{id:"概述-将事务高度抽象化的编程模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述-将事务高度抽象化的编程模式"}},[t._v("#")]),t._v(" 概述: 将事务高度抽象化的编程模式")]),t._v(" "),s("p",[t._v("将问题分解成一个一个步骤，对每个步骤进行相应的抽象，形成对象，通过不同对象之间的调用，组合解决问题。")]),t._v(" "),s("p",[t._v("就是说，在进行面向对象进行编程的时候，要把属性、行为等封装成对象，然后基于这些对象及对象的能力进行业务逻辑的实现。")]),t._v(" "),s("p",[t._v("比如:想要造一辆车，上来要先把车的各种属性定义出来，然后抽象成一个Car类。")]),t._v(" "),s("h3",{attrs:{id:"举例说明区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举例说明区别"}},[t._v("#")]),t._v(" 举例说明区别")]),t._v(" "),s("p",[t._v("同样一个象棋设计.")]),t._v(" "),s("p",[t._v("面向对象:创建黑白双方的对象负责演算,棋盘的对象负责画布,规则的对象负责判断，例子可以看出,面向对象更重视不重复造轮子,即创建一次,重复使用.")]),t._v(" "),s("p",[t._v("面向过程:开始—黑走—棋盘—判断—白走—棋盘—判断—循环。只需要关注每一步怎么实现即可.")]),t._v(" "),s("h2",{attrs:{id:"优劣对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优劣对比"}},[t._v("#")]),t._v(" 优劣对比")]),t._v(" "),s("p",[t._v("面向对象:占用资源相对高,速度相对慢")]),t._v(" "),s("p",[t._v("面向过程:占用资源相对低,速度相对快")]),t._v(" "),s("h2",{attrs:{id:"面向对象的三大基本特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向对象的三大基本特征"}},[t._v("#")]),t._v(" 面向对象的三大基本特征")]),t._v(" "),s("h3",{attrs:{id:"封装-encapsulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#封装-encapsulation"}},[t._v("#")]),t._v(" 封装(Encapsulation)")]),t._v(" "),s("p",[t._v("所谓封装，也就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏。封装是面向对象的特征之一，是对象和类概念的主要特性。简单的说，一个类就是一个封装了数据以及操作这些数据的代码的逻辑实体。在一个对象内部，某些代码或某些数据可以是私有的，不能被外界访问。通过这种方式，对象对内部数据提供了不同级别的保护，以防止程序中无关的部分意外的改变或错误的使用了对象的私有部分。")]),t._v(" "),s("h3",{attrs:{id:"继承-inheritance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承-inheritance"}},[t._v("#")]),t._v(" 继承(Inheritance)")]),t._v(" "),s("p",[t._v("继承是指这样一种能力：它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。通过继承创建的新类称为“子类”或“派生类”，被继承的类称为“基类”、“父类”或“超类”。继承的过程，就是从一般到特殊的过程。要实现继承，可以通过“继承”（Inheritance）和“组合”（Composition）来实现。继承概念的实现方式有二类：实现继承与接口继承。实现继承是指直接使用基类的属性和方法而无需额外编码的能力；接口继承是指仅使用属性和方法的名称、但是子类必须提供实现的能力；")]),t._v(" "),s("h3",{attrs:{id:"多态-polymorphism"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多态-polymorphism"}},[t._v("#")]),t._v(" 多态(Polymorphism)")]),t._v(" "),s("p",[t._v("所谓多态就是指一个类实例的相同方法在不同情形有不同表现形式。多态机制使具有不同内部结构的对象可以共享相同的外部接口。这意味着，虽然针对不同对象的具体操作不同，但通过一个公共的类，它们（那些操作）可以通过相同的方式予以调用。")]),t._v(" "),s("p",[t._v("最常见的多态就是将子类传入父类参数中，运行时调用父类方法时通过传入的子类决定具体的内部结构或行为。")]),t._v(" "),s("h2",{attrs:{id:"面向对象的五大基本原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向对象的五大基本原则"}},[t._v("#")]),t._v(" 面向对象的五大基本原则")]),t._v(" "),s("h3",{attrs:{id:"单一职责原则（single-responsibility-principle）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单一职责原则（single-responsibility-principle）"}},[t._v("#")]),t._v(" 单一职责原则（Single-Responsibility Principle）")]),t._v(" "),s("p",[t._v("其核心思想为：一个类，最好只做一件事，只有一个引起它的变化。单一职责原则可以看做是低耦合、高内聚在面向对象原则上的引申，将职责定义为引起变化的原因，以提高内聚性来减少引起变化的原因。职责过多，可能引起它变化的原因就越多，这将导致职责依赖，相互之间就产生影响，从而大大损伤其内聚性和耦合度。通常意义下的单一职责，就是指只有一种单一功能，不要为类实现过多的功能点，以保证实体只有一个引起它变化的原因。 专注，是一个人优良的品质；同样的，单一也是一个类的优良设计。交杂不清的职责将使得代码看起来特别别扭牵一发而动全身，有失美感和必然导致丑陋的系统错误风险。")]),t._v(" "),s("h3",{attrs:{id:"开放封闭原则（open-closed-principle）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开放封闭原则（open-closed-principle）"}},[t._v("#")]),t._v(" 开放封闭原则（Open-Closed principle）")]),t._v(" "),s("p",[t._v("其核心思想是：软件实体应该是可扩展的，而不可修改的。也就是，对扩展开放，对修改封闭的。开放封闭原则主要体现在两个方面1、对扩展开放，意味着有新的需求或变化时，可以对现有代码进行扩展，以适应新的情况。2、对修改封闭，意味着类一旦设计完成，就可以独立完成其工作，而不要对其进行任何尝试的修改。 实现开放封闭原则的核心思想就是对抽象编程，而不对具体编程，因为抽象相对稳定。让类依赖于固定的抽象，所以修改就是封闭的；而通过面向对象的继承和多态机制，又可以实现对抽象类的继承，通过覆写其方法来改变固有行为，实现新的拓展方法，所以就是开放的。 “需求总是变化”没有不变的软件，所以就需要用封闭开放原则来封闭变化满足需求，同时还能保持软件内部的封装体系稳定，不被需求的变化影响。")]),t._v(" "),s("h3",{attrs:{id:"liskov替换原则（liskov-substitution-principle）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#liskov替换原则（liskov-substitution-principle）"}},[t._v("#")]),t._v(" Liskov替换原则（Liskov-Substitution Principle）")]),t._v(" "),s("p",[t._v("其核心思想是：子类必须能够替换其基类。这一思想体现为对继承机制的约束规范，只有子类能够替换基类时，才能保证系统在运行期内识别子类，这是保证继承复用的基础。在父类和子类的具体行为中，必须严格把握继承层次中的关系和特征，将基类替换为子类，程序的行为不会发生任何变化。同时，这一约束反过来则是不成立的，子类可以替换基类，但是基类不一定能替换子类。 Liskov替换原则，主要着眼于对抽象和多态建立在继承的基础上，因此只有遵循了Liskov替换原则，才能保证继承复用是可靠地。实现的方法是面向接口编程：将公共部分抽象为基类接口或抽象类，通过Extract Abstract Class，在子类中通过覆写父类的方法实现新的方式支持同样的职责。 Liskov替换原则是关于继承机制的设计原则，违反了Liskov替换原则就必然导致违反开放封闭原则。 Liskov替换原则能够保证系统具有良好的拓展性，同时实现基于多态的抽象机制，能够减少代码冗余，避免运行期的类型判别。")]),t._v(" "),s("h3",{attrs:{id:"依赖倒置原则（dependecy-inversion-principle）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖倒置原则（dependecy-inversion-principle）"}},[t._v("#")]),t._v(" 依赖倒置原则（Dependecy-Inversion Principle）")]),t._v(" "),s("p",[t._v("其核心思想是：依赖于抽象。具体而言就是高层模块不依赖于底层模块，二者都同依赖于抽象；抽象不依赖于具体，具体依赖于抽象。 我们知道，依赖一定会存在于类与类、模块与模块之间。当两个模块之间存在紧密的耦合关系时，最好的方法就是分离接口和实现：在依赖之间定义一个抽象的接口使得高层模块调用接口，而底层模块实现接口的定义，以此来有效控制耦合关系，达到依赖于抽象的设计目标。 抽象的稳定性决定了系统的稳定性，因为抽象是不变的，依赖于抽象是面向对象设计的精髓，也是依赖倒置原则的核心。 依赖于抽象是一个通用的原则，而某些时候依赖于细节则是在所难免的，必须权衡在抽象和具体之间的取舍，方法不是一层不变的。依赖于抽象，就是对接口编程，不要对实现编程。")]),t._v(" "),s("h3",{attrs:{id:"接口隔离原则（interface-segregation-principle）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口隔离原则（interface-segregation-principle）"}},[t._v("#")]),t._v(" 接口隔离原则（Interface-Segregation Principle）")]),t._v(" "),s("p",[t._v("其核心思想是：使用多个小的专门的接口，而不要使用一个大的总接口。 具体而言，接口隔离原则体现在：接口应该是内聚的，应该避免“胖”接口。一个类对另外一个类的依赖应该建立在最小的接口上，不要强迫依赖不用的方法，这是一种接口污染。 接口有效地将细节和抽象隔离，体现了对抽象编程的一切好处，接口隔离强调接口的单一性。而胖接口存在明显的弊端，会导致实现的类型必须完全实现接口的所有方法、属性等；而某些时候，实现类型并非需要所有的接口定义，在设计上这是“浪费”，而且在实施上这会带来潜在的问题，对胖接口的修改将导致一连串的客户端程序需要修改，有时候这是一种灾难。在这种情况下，将胖接口分解为多个特点的定制化方法，使得客户端仅仅依赖于它们的实际调用的方法，从而解除了客户端不会依赖于它们不用的方法。 分离的手段主要有以下两种：1、委托分离，通过增加一个新的类型来委托客户的请求，隔离客户和接口的直接依赖，但是会增加系统的开销。2、多重继承分离，通过接口多继承来实现客户的需求，这种方式是较好的。")]),t._v(" "),s("p",[t._v("以上就是5个基本的面向对象设计原则，它们就像面向对象程序设计中的金科玉律，遵守它们可以使我们的代码更加鲜活，易于复用，易于拓展，灵活优雅。不同的设计模式对应不同的需求，而设计原则则代表永恒的灵魂，需要在实践中时时刻刻地遵守。就如ARTHUR J.RIEL在那边《OOD启示录》中所说的：“你并不必严格遵守这些原则，违背它们也不会被处以宗教刑罚。但你应当把这些原则看做警铃，若违背了其中的一条，那么警铃就会响起。”")])])}),[],!1,null,null,null);a.default=e.exports}}]);