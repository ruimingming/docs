---
title:  简介
keys:
 - '123456'
---

## CommonJS

### 背景

ECMScript标准的缺陷

1. 没有模块化的系统
2. 标准库较少
3. 没有标准接口
4. 缺乏管理系统

CommonJS的提出,主要是为了弥补当前JavaScript没有标准的缺陷

### 简介

CommonJS是Node.js使用的模块化标准,主要是在服务器端模块化的规范，在CommonJS规范中，一个文件就是一个模块，模块具有单独的作用域，在模块内定义的变量、函数、类等都是私有的，对其他文件不可见。

`CommonJS`定义的模块分为: 模块标识(`module`)、模块定义(`exports`) 、模块引用(`require`)

### 特点

Node 应用由模块组成，采用 CommonJS 模块规范。

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

```js
// example.js
var x = 5;
var addX = function (value) {
  return value + x;
};
```

上面代码中，变量`x`和函数`addX`，是当前文件`example.js`私有的，其他文件不可见。

如果想在多个文件分享变量，必须定义为`global`对象的属性。

```js
global.warning = true;
```

上面代码的`warning`变量，可以被所有文件读取。当然，这样写法是不推荐的。

CommonJS规范规定，每个模块内部，`module`变量代表当前模块。这个变量是一个对象，它的`exports`属性（即`module.exports`）是对外的接口。加载某个模块，其实是加载该模块的`module.exports`属性。

```js
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
```

上面代码通过`module.exports`输出变量`x`和函数`addX`。

`require`方法用于加载模块。

```js
var example = require('./example.js');

console.log(example.x); // 5
console.log(example.addX(1)); // 6
```

`require`方法的详细解释参见《Require命令》一节。

CommonJS模块的特点如下。

- 所有代码都运行在模块作用域，不会污染全局作用域。
- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
- 模块加载的顺序，按照其在代码中出现的顺序。

### module对象

Node内部提供一个`Module`构建函数。所有模块都是`Module`的实例。

```js
function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  // ...
```

每个模块内部，都有一个`module`对象，代表当前模块。它有以下属性。

- `module.id` 模块的识别符，通常是带有绝对路径的模块文件名。
- `module.filename` 模块的文件名，带有绝对路径。
- `module.loaded` 返回一个布尔值，表示模块是否已经完成加载。
- `module.parent` 返回一个对象，表示调用该模块的模块。
- `module.children` 返回一个数组，表示该模块要用到的其他模块。
- `module.exports` 表示模块对外输出的值。

下面是一个示例文件，最后一行输出module变量。

```js
// example.js
var jquery = require('jquery');
exports.$ = jquery;
console.log(module);
```

执行这个文件，命令行会输出如下信息。

```js
{ id: '.',
  exports: { '$': [Function] },
  parent: null,
  filename: '/path/to/example.js',
  loaded: false,
  children:
   [ { id: '/path/to/node_modules/jquery/dist/jquery.js',
       exports: [Function],
       parent: [Circular],
       filename: '/path/to/node_modules/jquery/dist/jquery.js',
       loaded: true,
       children: [],
       paths: [Object] } ],
  paths:
   [ '/home/user/deleted/node_modules',
     '/home/user/node_modules',
     '/home/node_modules',
     '/node_modules' ]
}
```

如果在命令行下调用某个模块，比如`node something.js`，那么`module.parent`就是`null`。如果是在脚本之中调用，比如`require('./something.js')`，那么`module.parent`就是调用它的模块。利用这一点，可以判断当前模块是否为入口脚本。

```js
if (!module.parent) {
    // ran with `node something.js`
    app.listen(8088, function() {
        console.log('app listening on port 8088');
    })
} else {
    // used with `require('/.something.js')`
    module.exports = app;
}
```

#### module.exports属性

`module.exports`属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取`module.exports`变量。

```js
var EventEmitter = require('events').EventEmitter;
module.exports = new EventEmitter();

setTimeout(function() {
  module.exports.emit('ready');
}, 1000);
```

上面模块会在加载后1秒后，发出ready事件。其他文件监听该事件，可以写成下面这样。

```js
var a = require('./a');
a.on('ready', function() {
  console.log('module a is ready');
});
```

#### exports变量

为了方便，Node为每个模块提供一个exports变量，指向module.exports。这等同在每个模块头部，有一行这样的命令。

```js
var exports = module.exports;
```

造成的结果是，在对外输出模块接口时，可以向exports对象添加方法。

```js
exports.area = function (r) {
  return Math.PI * r * r;
};

exports.circumference = function (r) {
  return 2 * Math.PI * r;
};
```

注意，不能直接将exports变量指向一个值，因为这样等于切断了`exports`与`module.exports`的联系。

```js
exports = function(x) {console.log(x)};
```

上面这样的写法是无效的，因为`exports`不再指向`module.exports`了。

下面的写法也是无效的。

```js
exports.hello = function() {
  return 'hello';
};

module.exports = 'Hello world';
```

上面代码中，`hello`函数是无法对外输出的，因为`module.exports`被重新赋值了。

这意味着，如果一个模块的对外接口，就是一个单一的值，不能使用`exports`输出，只能使用`module.exports`输出。

```js
module.exports = function (x){ console.log(x);};
```

如果你觉得，`exports`与`module.exports`之间的区别很难分清，一个简单的处理方法，就是放弃使用`exports`，只使用`module.exports`。

### AMD规范与CommonJS规范的兼容性

CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。AMD规范则是非同步加载模块，允许指定回调函数。由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以CommonJS规范比较适用。但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用AMD规范。

AMD规范使用define方法定义模块，下面就是一个例子：

```js
define(['package/lib'], function(lib){
  function foo(){
    lib.log('hello world!');
  }

  return {
    foo: foo
  };
});
```

AMD规范允许输出的模块兼容CommonJS规范，这时`define`方法需要写成下面这样：

```js
define(function (require, exports, module){
  var someModule = require("someModule");
  var anotherModule = require("anotherModule");

  someModule.doTehAwesome();
  anotherModule.doMoarAwesome();

  exports.asplode = function (){
    someModule.doTehAwesome();
    anotherModule.doMoarAwesome();
  };
});
```

### require命令

#### 基本用法

Node使用CommonJS模块规范，内置的`require`命令用于加载模块文件。

`require`命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的exports对象。如果没有发现指定模块，会报错。

```js
// example.js
var invisible = function () {
  console.log("invisible");
}

exports.message = "hi";

exports.say = function () {
  console.log(message);
}
```

运行下面的命令，可以输出exports对象。

```js
var example = require('./example.js');
example
// {
//   message: "hi",
//   say: [Function]
// }
```

如果模块输出的是一个函数，那就不能定义在exports对象上面，而要定义在`module.exports`变量上面。

```js
module.exports = function () {
  console.log("hello world")
}

require('./example2.js')()
```

上面代码中，require命令调用自身，等于是执行`module.exports`，因此会输出 hello world。

#### 加载规则

`require`命令用于加载文件，后缀名默认为`.js`。

```js
var foo = require('foo');
//  等同于
var foo = require('foo.js');
```

根据参数的不同格式，`require`命令去不同路径寻找模块文件。

（1）如果参数字符串以“/”开头，则表示加载的是一个位于绝对路径的模块文件。比如，`require('/home/marco/foo.js')`将加载`/home/marco/foo.js`。

（2）如果参数字符串以“./”开头，则表示加载的是一个位于相对路径（跟当前执行脚本的位置相比）的模块文件。比如，`require('./circle')`将加载当前脚本同一目录的`circle.js`。

（3）如果参数字符串不以“./“或”/“开头，则表示加载的是一个默认提供的核心模块（位于Node的系统安装目录中），或者一个位于各级node_modules目录的已安装模块（全局安装或局部安装）。

举例来说，脚本`/home/user/projects/foo.js`执行了`require('bar.js')`命令，Node会依次搜索以下文件。

- /usr/local/lib/node/bar.js
- /home/user/projects/node_modules/bar.js
- /home/user/node_modules/bar.js
- /home/node_modules/bar.js
- /node_modules/bar.js

这样设计的目的是，使得不同的模块可以将所依赖的模块本地化。

（4）如果参数字符串不以“./“或”/“开头，而且是一个路径，比如`require('example-module/path/to/file')`，则将先找到`example-module`的位置，然后再以它为参数，找到后续路径。

（5）如果指定的模块文件没有发现，Node会尝试为文件名添加`.js`、`.json`、`.node`后，再去搜索。`.js`件会以文本格式的JavaScript脚本文件解析，`.json`文件会以JSON格式的文本文件解析，`.node`文件会以编译后的二进制文件解析。

（6）如果想得到`require`命令加载的确切文件名，使用`require.resolve()`方法。

#### 目录的加载规则

通常，我们会把相关的文件会放在一个目录里面，便于组织。这时，最好为该目录设置一个入口文件，让`require`方法可以通过这个入口文件，加载整个目录。

在目录中放置一个`package.json`文件，并且将入口文件写入`main`字段。下面是一个例子。

```js
// package.json
{ "name" : "some-library",
  "main" : "./lib/some-library.js" }
```

`require`发现参数字符串指向一个目录以后，会自动查看该目录的`package.json`文件，然后加载`main`字段指定的入口文件。如果`package.json`文件没有`main`字段，或者根本就没有`package.json`文件，则会加载该目录下的`index.js`文件或`index.node`文件。

#### 模块的缓存

第一次加载某个模块时，Node会缓存该模块。以后再加载该模块，就直接从缓存取出该模块的`module.exports`属性。

```js
require('./example.js');
require('./example.js').message = "hello";
require('./example.js').message
// "hello"
```

上面代码中，连续三次使用`require`命令，加载同一个模块。第二次加载的时候，为输出的对象添加了一个`message`属性。但是第三次加载的时候，这个message属性依然存在，这就证明`require`命令并没有重新加载模块文件，而是输出了缓存。

如果想要多次执行某个模块，可以让该模块输出一个函数，然后每次`require`这个模块的时候，重新执行一下输出的函数。

所有缓存的模块保存在`require.cache`之中，如果想删除模块的缓存，可以像下面这样写。

```js
// 删除指定模块的缓存
delete require.cache[moduleName];

// 删除所有模块的缓存
Object.keys(require.cache).forEach(function(key) {
  delete require.cache[key];
})
```

注意，缓存是根据绝对路径识别模块的，如果同样的模块名，但是保存在不同的路径，`require`命令还是会重新加载该模块。

#### 环境变量NODE_PATH

Node执行一个脚本时，会先查看环境变量`NODE_PATH`。它是一组以冒号分隔的绝对路径。在其他位置找不到指定模块时，Node会去这些路径查找。

可以将NODE_PATH添加到`.bashrc`。

```js
export NODE_PATH="/usr/local/lib/node"
```

所以，如果遇到复杂的相对路径，比如下面这样。

```js
var myModule = require('../../../../lib/myModule');
```

有两种解决方法，一是将该文件加入`node_modules`目录，二是修改`NODE_PATH`环境变量，`package.json`文件可以采用下面的写法。

```js
{
  "name": "node_path",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "NODE_PATH=lib node index.js"
  },
  "author": "",
  "license": "ISC"
}
```

`NODE_PATH`是历史遗留下来的一个路径解决方案，通常不应该使用，而应该使用`node_modules`目录机制。

#### 模块的循环加载

如果发生模块的循环加载，即A加载B，B又加载A，则B将加载A的不完整版本。

```js
// a.js
exports.x = 'a1';
console.log('a.js ', require('./b.js').x);
exports.x = 'a2';

// b.js
exports.x = 'b1';
console.log('b.js ', require('./a.js').x);
exports.x = 'b2';

// main.js
console.log('main.js ', require('./a.js').x);
console.log('main.js ', require('./b.js').x);
```

上面代码是三个JavaScript文件。其中，a.js加载了b.js，而b.js又加载a.js。这时，Node返回a.js的不完整版本，所以执行结果如下。

```js
$ node main.js
b.js  a1
a.js  b2
main.js  a2
main.js  b2
```

修改main.js，再次加载a.js和b.js。

```js
// main.js
console.log('main.js ', require('./a.js').x);
console.log('main.js ', require('./b.js').x);
console.log('main.js ', require('./a.js').x);
console.log('main.js ', require('./b.js').x);
```

执行上面代码，结果如下。

```js
$ node main.js
b.js  a1
a.js  b2
main.js  a2
main.js  b2
main.js  a2
main.js  b2
```

上面代码中，第二次加载a.js和b.js时，会直接从缓存读取exports属性，所以a.js和b.js内部的console.log语句都不会执行了。

#### require.main

`require`方法有一个`main`属性，可以用来判断模块是直接执行，还是被调用执行。

直接执行的时候（`node module.js`），`require.main`属性指向模块本身。

```js
require.main === module
// true
```

调用执行的时候（通过`require`加载该脚本执行），上面的表达式返回false。

### 模块的加载机制

CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。请看下面这个例子。

下面是一个模块文件`lib.js`。

```js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};
```

上面代码输出内部变量`counter`和改写这个变量的内部方法`incCounter`。

然后，加载上面的模块。

```js
// main.js
var counter = require('./lib').counter;
var incCounter = require('./lib').incCounter;

console.log(counter);  // 3
incCounter();
console.log(counter); // 3
```

上面代码说明，`counter`输出以后，`lib.js`模块内部的变化就影响不到`counter`了。

#### require的内部处理流程

`require`命令是CommonJS规范之中，用来加载其他模块的命令。它其实不是一个全局命令，而是指向当前模块的`module.require`命令，而后者又调用Node的内部命令`Module._load`。

```js
Module._load = function(request, parent, isMain) {
  // 1. 检查 Module._cache，是否缓存之中有指定模块
  // 2. 如果缓存之中没有，就创建一个新的Module实例
  // 3. 将它保存到缓存
  // 4. 使用 module.load() 加载指定的模块文件，
  //    读取文件内容之后，使用 module.compile() 执行文件代码
  // 5. 如果加载/解析过程报错，就从缓存删除该模块
  // 6. 返回该模块的 module.exports
};
```

上面的第4步，采用`module.compile()`执行指定模块的脚本，逻辑如下。

```js
Module.prototype._compile = function(content, filename) {
  // 1. 生成一个require函数，指向module.require
  // 2. 加载其他辅助方法到require
  // 3. 将文件内容放到一个函数之中，该函数可调用 require
  // 4. 执行该函数
};
```

上面的第1步和第2步，`require`函数及其辅助方法主要如下。

- `require()`: 加载外部模块
- `require.resolve()`：将模块名解析到一个绝对路径
- `require.main`：指向主模块
- `require.cache`：指向所有缓存的模块
- `require.extensions`：根据文件的后缀名，调用不同的执行函数

一旦`require`函数准备完毕，整个所要加载的脚本内容，就被放到一个新的函数之中，这样可以避免污染全局环境。该函数的参数包括`require`、`module`、`exports`，以及其他一些参数。

```js
(function (exports, require, module, __filename, __dirname) {
  // YOUR CODE INJECTED HERE!
});
```

`Module._compile`方法是同步执行的，所以`Module._load`要等它执行完成，才会向用户返回`module.exports`的值。

#### 模块化

在nodejs中,一个js文件就是一个模块

在nodejs中,每一个js文件中的js代码都是独立运行在一个函数中(nodejs封装的)

### global

在node环境中有一个全局对象,global,它的作用和网页中的window对象类似

- 在全局作用域中创建的变量,都会作为global的属性保存

- 在全局作用域中创建的函数,都会作为global的方法保存

>前提 : 在一个node引擎在执行(调用)一个js文件时，会创建一个方法函数包裹我们的js代码中的内容,也就是在运行期间,我们的代码作用域默认是在函数

![image-20200321173402975](assets/image-20200321173402975.png)

### exports

该对象用来将变量或函数暴露给外部

### require

该对象用来引入外部模块

在使用require时,我们通过传入模块标识导入模块,标识分为两种

- 核心模块,由node引擎提供的模块.浅红色文字：<font color="red">直接通过模块名称导入</font>
- 文件模块,由用户创建的模块.<font color="red">可通过相对路径或者绝对路径导入</font>

### module

该对象代表当前模块本身

exports是module的属性,exports指向module.exports(exports保留了module.exports的指针)

### __filename

该对象代表当前模块完整路径

### __dirname

该对象代表当前模块所在文件夹的路径

### exports和module.exports

exports指向module.exports的内存地址，涉及到引用变量和基本变量

其实`require`导入的内容是`module.exports`的指向的内存块内容，并不是`exports`的。 简而言之，区分他们之间的区别就是 `exports` 只是 `module.exports`的引用，辅助后者添加内容用的。

一般尽量都用 `module.exports` 导出，然后用`require`导入。

### package

CommonJS的规范允许我们将一组相关的模块组合在一起，形成一个完整的工具

CommonJS的包规范由包结构和包描述文件构成

- 包结构 用于组织包中的各种文件
- 包描述文件 描述包相关信息，以供外部读取，包含以下内容
  - package.json 描述文件
  - bin 可执行二进制文件
  - lib js 代码
  - doc 文档
  - test 单元测试 

#### package.json

每个项目的根目录下面，一般都有一个`package.json`文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。`npm install`命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。

下面是一个最简单的package.json文件，只定义两项元数据：项目名称和项目版本。

```json
{
  "name" : "xxx",
  "version" : "0.0.0",
}
```

`package.json`文件就是一个JSON对象，该对象的每一个成员就是当前项目的一项设置。比如`name`就是项目名称，`version`是版本（遵守“大版本.次要版本.小版本”的格式）。

下面是一个更完整的package.json文件。

```json
{
	"name": "Hello World",
	"version": "0.0.1",
	"author": "张三",
	"description": "第一个node.js程序",
	"keywords":["node.js","javascript"],
	"repository": {
		"type": "git",
		"url": "https://path/to/url"
	},
	"license":"MIT",
	"engines": {"node": "0.10.x"},
	"bugs":{"url":"http://path/to/bug","email":"bug@example.com"},
	"contributors":[{"name":"李四","email":"lisi@example.com"}],
	"scripts": {
		"start": "node index.js"
	},
	"dependencies": {
		"express": "latest",
		"mongoose": "~3.8.3",
		"handlebars-runtime": "~1.0.12",
		"express3-handlebars": "~0.5.0",
		"MD5": "~1.2.0"
	},
	"devDependencies": {
		"bower": "~1.2.8",
		"grunt": "~0.4.1",
		"grunt-contrib-concat": "~0.3.0",
		"grunt-contrib-jshint": "~0.7.2",
		"grunt-contrib-uglify": "~0.2.7",
		"grunt-contrib-clean": "~0.5.0",
		"browserify": "2.36.1",
		"grunt-browserify": "~1.3.0",
	}
}
```

##### scripts

`scripts`指定了运行脚本命令的npm命令行缩写，比如start指定了运行`npm run start`时，所要执行的命令。

下面的设置指定了`npm run preinstall`、`npm run postinstall`、`npm run start`、`npm run test`时，所要执行的命令。

```json
"scripts": {
    "preinstall": "echo here it comes!",
    "postinstall": "echo there it goes!",
    "start": "node index.js",
    "test": "tap test/*.js"
}
```

##### dependencies and devDependencies

`dependencies`字段指定了项目运行所依赖的模块，`devDependencies`指定项目开发所需要的模块。

它们都指向一个对象。该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。

```json
{
  "devDependencies": {
    "browserify": "~13.0.0",
    "karma-browserify": "~5.0.1"
  }
}
```

对应的版本可以加上各种限定，主要有以下几种：

- **指定版本**：比如`1.2.2`，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
- **波浪号（tilde）+指定版本**：比如`~1.2.2`，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
- **插入号（caret）+指定版本**：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
- **latest**：安装最新版本。

package.json文件可以手工编写，也可以使用`npm init`命令自动生成。

```bash
$ npm init
```

这个命令采用互动方式，要求用户回答一些问题，然后在当前目录生成一个基本的package.json文件。所有问题之中，只有项目名称（name）和项目版本（version）是必填的，其他都是选填的。

有了package.json文件，直接使用npm install命令，就会在当前目录中安装所需要的模块。

```bash
$ npm install
```

如果一个模块不在`package.json`文件之中，可以单独安装这个模块，并使用相应的参数，将其写入`package.json`文件之中。

```bash
$ npm install express --save
$ npm install express --save-dev
```

上面代码表示单独安装express模块，`--save`参数表示将该模块写入`dependencies`属性，`--save-dev`表示将该模块写入`devDependencies`属性。

##### peerDependencies

有时，你的项目和所依赖的模块，都会同时依赖另一个模块，但是所依赖的版本不一样。比如，你的项目依赖A模块和B模块的1.0版，而A模块本身又依赖B模块的2.0版。

大多数情况下，这不构成问题，B模块的两个版本可以并存，同时运行。但是，有一种情况，会出现问题，就是这种依赖关系将暴露给用户。

最典型的场景就是插件，比如A模块是B模块的插件。用户安装的B模块是1.0版本，但是A插件只能和2.0版本的B模块一起使用。这时，用户要是将1.0版本的B的实例传给A，就会出现问题。因此，需要一种机制，在模板安装的时候提醒用户，如果A和B一起安装，那么B必须是2.0模块。

`peerDependencies`字段，就是用来供插件指定其所需要的主工具的版本。

```json
{
  "name": "chai-as-promised",
  "peerDependencies": {
    "chai": "1.x"
  }
}
```

上面代码指定，安装`chai-as-promised`模块时，主程序`chai`必须一起安装，而且`chai`的版本必须是`1.x`。如果你的项目指定的依赖是`chai`的2.0版本，就会报错。

注意，从npm 3.0版开始，`peerDependencies`不再会默认安装了。

##### bin

bin项用来指定各个内部命令对应的可执行文件的位置。

```json
"bin": {
  "someTool": "./bin/someTool.js"
}
```

上面代码指定，someTool 命令对应的可执行文件为 bin 子目录下的 someTool.js。Npm会寻找这个文件，在`node_modules/.bin/`目录下建立符号链接。在上面的例子中，someTool.js会建立符号链接`node_modules/.bin/someTool`。由于`node_modules/.bin/`目录会在运行时加入系统的PATH变量，因此在运行npm时，就可以不带路径，直接通过命令来调用这些脚本。

因此，像下面这样的写法可以采用简写。

```json
scripts: {  
  start: './node_modules/bin/someTool.js build'
}

// 简写为

scripts: {  
  start: 'someTool build'
}
```

所有`node_modules/.bin/`目录下的命令，都可以用`npm run [命令]`的格式运行。在命令行下，键入`npm run`，然后按tab键，就会显示所有可以使用的命令。

##### main

`main`字段指定了加载的入口文件，`require('moduleName')`就会加载这个文件。这个字段的默认值是模块根目录下面的`index.js`。

##### config

`config`字段用于添加命令行的环境变量。

下面是一个`package.json`文件。

```json
{
  "name" : "foo",
  "config" : { "port" : "8080" },
  "scripts" : { "start" : "node server.js" }
}
```

然后，在`server.js`脚本就可以引用`config`字段的值。

```js
http
  .createServer(...)
  .listen(process.env.npm_package_config_port)
```

用户执行`npm run start`命令时，这个脚本就可以得到值。

```bash
$ npm run start
```

用户可以改变这个值。

```bash
$ npm config set foo:port 80
```

##### browser

browser指定该模板供浏览器使用的版本。Browserify这样的浏览器打包工具，通过它就知道该打包那个文件。

```json
"browser": {
  "tipso": "./node_modules/tipso/src/tipso.js"
},
```

##### engines

`engines`字段指明了该模块运行的平台，比如 Node 的某个版本或者浏览器。

```json
{ "engines" : { "node" : ">=0.10.3 <0.12" } }
```

该字段也可以指定适用的`npm`版本。

```json
{ "engines" : { "npm" : "~1.0.20" } }
```

##### man

man用来指定当前模块的man文档的位置。

```json
"man" :[ "./doc/calc.1" ]
```

##### preferGlobal

preferGlobal的值是布尔值，表示当用户不将该模块安装为全局模块时（即不用–global参数），要不要显示警告，表示该模块的本意就是安装为全局模块。

##### style

style指定供浏览器使用时，样式文件所在的位置。样式文件打包工具parcelify，通过它知道样式文件的打包位置。

```json
"style": [
  "./node_modules/tipso/src/tipso.css"
]
```

## NPM

### 简介

`npm`有两层含义。一层含义是Node的开放式模块登记和管理系统，网址为[npmjs.org](https://npmjs.org/)。另一层含义是Node默认的模块管理器，是一个命令行下的软件，用来安装和管理Node模块。

`npm`不需要单独安装。在安装Node的时候，会连带一起安装`npm`。但是，Node附带的`npm`可能不是最新版本，最好用下面的命令，更新到最新版本。

```bash
$ npm install npm@latest -g
```

上面的命令中，`@latest`表示最新版本，`-g`表示全局安装。所以，命令的主干是`npm install npm`，也就是使用`npm`安装自己。之所以可以这样，是因为`npm`本身与Node的其他模块没有区别。

然后，运行下面的命令，查看各种信息。

```bash
## 查看 npm 命令列表
$ npm help

## 查看各个命令的简单用法
$ npm -l

## 查看 npm 的版本
$ npm -v

## 查看 npm 的配置
$ npm config list -l
```

### npm init

`npm init`用来初始化生成一个新的`package.json`文件。它会向用户提问一系列问题，如果你觉得不用修改默认配置，一路回车就可以了。

如果使用了`-f`（代表force）、`-y`（代表yes），则跳过提问阶段，直接生成一个新的`package.json`文件。

```bash
$ npm init -y
```

### npm set

`npm set`用来设置环境变量。

```bash
$ npm set init-author-name 'Your name'
$ npm set init-author-email 'Your email'
$ npm set init-author-url 'http://yourdomain.com'
$ npm set init-license 'MIT'
```

上面命令等于为`npm init`设置了默认值，以后执行`npm init`的时候，`package.json`的作者姓名、邮件、主页、许可证字段就会自动写入预设的值。这些信息会存放在用户主目录的` ~/.npmrc`文件，使得用户不用每个项目都输入。如果某个项目有不同的设置，可以针对该项目运行`npm config`。

```bash
$ npm set save-exact true
```

上面命令设置加入模块时，`package.json`将记录模块的确切版本，而不是一个可选的版本范围。

### npm config

```bash
$ npm config set prefix $dir
```

上面的命令将指定的`$dir`目录，设为模块的全局安装目录。如果当前有这个目录的写权限，那么运行`npm install`的时候，就不再需要`sudo`命令授权了。

```bash
$ npm config set save-prefix ~
```

上面的命令使得`npm install --save`和`npm install --save-dev`安装新模块时，允许的版本范围从克拉符号（`^`）改成波浪号（`~`），即从允许小版本升级，变成只允许补丁包的升级。

```bash
$ npm config set init.author.name $name
$ npm config set init.author.email $email
```

上面命令指定使用`npm init`时，生成的`package.json`文件的字段默认值。

### npm info

`npm info`命令可以查看每个模块的具体信息。比如，查看underscore模块的信息。

```json
$ npm info underscore
{ name: 'underscore',
  description: 'JavaScript\'s functional programming helper library.',
  'dist-tags': { latest: '1.5.2', stable: '1.5.2' },
  repository:
   { type: 'git',
     url: 'git://github.com/jashkenas/underscore.git' },
  homepage: 'http://underscorejs.org',
  main: 'underscore.js',
  version: '1.5.2',
  devDependencies: { phantomjs: '1.9.0-1' },
  licenses:
   { type: 'MIT',
     url: 'https://raw.github.com/jashkenas/underscore/master/LICENSE' },
  files:
   [ 'underscore.js',
     'underscore-min.js',
     'LICENSE' ],
  readmeFilename: 'README.md'}
```

上面命令返回一个JavaScript对象，包含了underscore模块的详细信息。这个对象的每个成员，都可以直接从info命令查询。

```bash
$ npm info underscore description
JavaScript's functional programming helper library.

$ npm info underscore homepage
http://underscorejs.org

$ npm info underscore version
1.5.2
```

### npm search

`npm search`命令用于搜索npm仓库，它后面可以跟字符串，也可以跟正则表达式。

```bash
$ npm search <搜索词>
```

下面是一个例子。

```bash
$ npm search node-gyp
// NAME                  DESCRIPTION
// autogypi              Autogypi handles dependencies for node-gyp projects.
// grunt-node-gyp        Run node-gyp commands from Grunt.
// gyp-io                Temporary solution to let node-gyp run `rebuild` under…
// ...
```

### npm list

`npm list`命令以树型结构列出当前项目安装的所有模块，以及它们依赖的模块。

```bash
$ npm list
```

加上global参数，会列出全局安装的模块。

```bash
$ npm list -global
```

`npm list`命令也可以列出单个模块。

```bash
$ npm list underscore
```

### npm install

#### 基本用法

Node模块采用`npm install`命令安装。

每个模块可以“全局安装”，也可以“本地安装”。“全局安装”指的是将一个模块安装到系统目录中，各个项目都可以调用。一般来说，全局安装只适用于工具模块，比如`eslint`和`gulp`。“本地安装”指的是将一个模块下载到当前项目的`node_modules`子目录，然后只有在项目目录之中，才能调用这个模块。

```bash
## 本地安装
$ npm install <package name>

## 全局安装
$ sudo npm install -global <package name>
$ sudo npm install -g <package name>
```

`npm install`也支持直接输入Github代码库地址。

```bash
$ npm install git://github.com/package/path.git
$ npm install git://github.com/package/path.git##0.1.0
```

安装之前，`npm install`会先检查，`node_modules`目录之中是否已经存在指定模块。如果存在，就不再重新安装了，即使远程仓库已经有了一个新版本，也是如此。

如果你希望，一个模块不管是否安装过，npm 都要强制重新安装，可以使用`-f`或`--force`参数。

```bash
$ npm install <packageName> --force
```

如果你希望，所有模块都要强制重新安装，那就删除`node_modules`目录，重新执行`npm install`。

```bash
$ rm -rf node_modules
$ npm install
```

#### 安装不同版本

install命令总是安装模块的最新版本，如果要安装模块的特定版本，可以在模块名后面加上@和版本号。

```bash
$ npm install sax@latest
$ npm install sax@0.1.1
$ npm install sax@">=0.1.0 <0.2.0"
```

如果使用`--save-exact`参数，会在package.json文件指定安装模块的确切版本。

```bash
$ npm install readable-stream --save --save-exact
```

install命令可以使用不同参数，指定所安装的模块属于哪一种性质的依赖关系，即出现在packages.json文件的哪一项中。

- –save：模块名将被添加到dependencies，可以简化为参数`-S`。
- –save-dev: 模块名将被添加到devDependencies，可以简化为参数`-D`。

```bash
$ npm install sax --save
$ npm install node-tap --save-dev
## 或者
$ npm install sax -S
$ npm install node-tap -D
```

如果要安装beta版本的模块，需要使用下面的命令。

```bash
## 安装最新的beta版
$ npm install <module-name>@beta (latest beta)

## 安装指定的beta版
$ npm install <module-name>@1.3.1-beta.3
```

`npm install`默认会安装`dependencies`字段和`devDependencies`字段中的所有模块，如果使用`--production`参数，可以只安装`dependencies`字段的模块。

```bash
$ npm install --production
## 或者
$ NODE_ENV=production npm install
```

一旦安装了某个模块，就可以在代码中用`require`命令加载这个模块。

```bash
var backbone = require('backbone')
console.log(backbone.VERSION)
```

#### 避免系统权限

默认情况下，Npm全局模块都安装在系统目录（比如`/usr/local/lib/`），普通用户没有写入权限，需要用到`sudo`命令。这不是很方便，我们可以在没有root权限的情况下，安装全局模块。

首先，在主目录下新建配置文件`.npmrc`，然后在该文件中将`prefix`变量定义到主目录下面。

```properties
prefix = /home/yourUsername/npm
```

然后在主目录下新建`npm`子目录。

```bash
$ mkdir ~/npm
```

此后，全局安装的模块都会安装在这个子目录中，npm也会到`~/npm/bin`目录去寻找命令。

最后，将这个路径在`.bash_profile`文件（或`.bashrc`文件）中加入PATH变量。

```properties
export PATH=~/npm/bin:$PATH
```

### npm update，npm uninstall

`npm update`命令可以更新本地安装的模块。

```bash
## 升级当前项目的指定模块
$ npm update [package name]

## 升级全局安装的模块
$ npm update -global [package name]
```

它会先到远程仓库查询最新版本，然后查询本地版本。如果本地版本不存在，或者远程版本较新，就会安装。

使用`-S`或`--save`参数，可以在安装的时候更新`package.json`里面模块的版本号。

```json
// 更新之前的package.json
dependencies: {
  dep1: "^1.1.1"
}

// 更新之后的package.json
dependencies: {
  dep1: "^1.2.2"
}
```

注意，从npm v2.6.1 开始，`npm update`只更新顶层模块，而不更新依赖的依赖，以前版本是递归更新的。如果想取到老版本的效果，要使用下面的命令。

```bash
$ npm --depth 9999 update
```

`npm uninstall`命令，卸载已安装的模块。

```bash
$ npm uninstall [package name]

## 卸载全局模块
$ npm uninstall [package name] -global
```

### npm run

`npm`不仅可以用于模块管理，还可以用于执行脚本。`package.json`文件有一个`scripts`字段，可以用于指定脚本命令，供`npm`直接调用。

```json
{
  "name": "myproject",
  "devDependencies": {
    "jshint": "latest",
    "browserify": "latest",
    "mocha": "latest"
  },
  "scripts": {
    "lint": "jshint **.js",
    "test": "mocha test/"
  }
}
```

上面代码中，`scripts`字段指定了两项命令`lint`和`test`。命令行输入`npm run-script lint`或者`npm run lint`，就会执行`jshint **.js`，输入`npm run-script test`或者`npm run test`，就会执行`mocha test/`。`npm run`是`npm run-script`的缩写，一般都使用前者，但是后者可以更好地反应这个命令的本质。

`npm run`命令会自动在环境变量`$PATH`添加`node_modules/.bin`目录，所以`scripts`字段里面调用命令时不用加上路径，这就避免了全局安装NPM模块。

`npm run`如果不加任何参数，直接运行，会列出`package.json`里面所有可以执行的脚本命令。

npm内置了两个命令简写，`npm test`等同于执行`npm run test`，`npm start`等同于执行`npm run start`。

`npm run`会创建一个Shell，执行指定的命令，并临时将`node_modules/.bin`加入PATH变量，这意味着本地模块可以直接运行。

举例来说，你执行ESLint的安装命令。

```bash
$ npm i eslint --save-dev
```

运行上面的命令以后，会产生两个结果。首先，ESLint被安装到当前目录的`node_modules`子目录；其次，`node_modules/.bin`目录会生成一个符号链接`node_modules/.bin/eslint`，指向ESLint模块的可执行脚本。

然后，你就可以在`package.json`的`script`属性里面，不带路径的引用`eslint`这个脚本。

```json
{
  "name": "Test Project",
  "devDependencies": {
    "eslint": "^1.10.3"
  },
  "scripts": {
    "lint": "eslint ."
  }
}
```

等到运行`npm run lint`的时候，它会自动执行`./node_modules/.bin/eslint .`。

如果直接运行`npm run`不给出任何参数，就会列出`scripts`属性下所有命令。

```bash
$ npm run
Available scripts in the user-service package:
  lint
     jshint **.js
  test
    mocha test/
```

下面是另一个`package.json`文件的例子。

```json
"scripts": {
  "watch": "watchify client/main.js -o public/app.js -v",
  "build": "browserify client/main.js -o public/app.js",
  "start": "npm run watch & nodemon server.js",
  "test": "node test/all.js"
},
```

上面代码在`scripts`项，定义了四个别名，每个别名都有对应的脚本命令。

```bash
$ npm run watch
$ npm run build
$ npm run start
$ npm run test
```

其中，`start`和`test`属于特殊命令，可以省略`run`。

```bash
$ npm start
$ npm test
```

如果希望一个操作的输出，是另一个操作的输入，可以借用Linux系统的管道命令，将两个操作连在一起。

```properties
"build-js": "browserify browser/main.js | uglifyjs -mc > static/bundle.js"
```

但是，更方便的写法是引用其他`npm run`命令。

```properties
"build": "npm run build-js && npm run build-css"
```

上面的写法是先运行`npm run build-js`，然后再运行`npm run build-css`，两个命令中间用`&&`连接。如果希望两个命令同时平行执行，它们中间可以用`&`连接。

下面是一个流操作的例子。

```json
"devDependencies": {
  "autoprefixer": "latest",
  "cssmin": "latest"
},

"scripts": {
  "build:css": "autoprefixer -b 'last 2 versions' < assets/styles/main.css | cssmin > dist/main.css"
}
```

写在`scripts`属性中的命令，也可以在`node_modules/.bin`目录中直接写成bash脚本。下面是一个bash脚本。

```bash
#!/bin/bash

cd site/main
browserify browser/main.js | uglifyjs -mc > static/bundle.js
```

假定上面的脚本文件名为build.sh，并且权限为可执行，就可以在scripts属性中引用该文件。

```properties
"build-js": "bin/build.sh"
```

#### 参数

`npm run`命令还可以添加参数。

```json
"scripts": {
  "test": "mocha test/"
}
```

上面代码指定`npm test`，实际运行`mocha test/`。如果要通过`npm test`命令，将参数传到mocha，则参数之前要加上两个连词线。

```bash
$ npm run test -- anothertest.js
## 等同于
$ mocha test/ anothertest.js
```

上面命令表示，mocha要运行所有`test`子目录的测试脚本，以及另外一个测试脚本`anothertest.js`。

`npm run`本身有一个参数`-s`，表示关闭npm本身的输出，只输出脚本产生的结果。

```bash
// 输出npm命令头
$ npm run test

// 不输出npm命令头
$ npm run -s test
```

#### scripts脚本命令最佳实践

`scripts`字段的脚本命令，有一些最佳实践，可以方便开发。首先，安装`npm-run-all`模块。

```bash
$ npm install npm-run-all --save-dev
```

这个模块用于运行多个`scripts`脚本命令。

```bash
## 继发执行
$ npm-run-all build:html build:js
## 等同于
$ npm run build:html && npm run build:js

## 并行执行
$ npm-run-all --parallel watch:html watch:js
## 等同于
$ npm run watch:html & npm run watch:js

## 混合执行
$ npm-run-all clean lint --parallel watch:html watch:js
## 等同于
$ npm-run-all clean lint
$ npm-run-all --parallel watch:html watch:js

## 通配符
$ npm-run-all --parallel watch:*
```

（1）start脚本命令

`start`脚本命令，用于启动应用程序。

```properties
"start": "npm-run-all --parallel dev serve"
```

上面命令并行执行`dev`脚本命令和`serve`脚本命令，等同于下面的形式。

```bash
$ npm run dev & npm run serve
```

如果start脚本没有配置，`npm start`命令默认执行下面的脚本，前提是模块的根目录存在一个server.js文件。

```bash
$ node server.js
```

（2）dev脚本命令

`dev`脚本命令，规定开发阶段所要做的处理，比如构建网页资源。

```properties
"dev": "npm-run-all dev:*"
```

上面命令用于继发执行所有`dev`的子命令。

```properties
"predev:sass": "node-sass --source-map src/css/hoodie.css.map --output-style nested src/sass/base.scss src/css/hoodie.css"
```

上面命令将sass文件编译为css文件，并生成source map文件。

```properties
"dev:sass": "node-sass --source-map src/css/hoodie.css.map --watch --output-style nested src/sass/base.scss src/css/hoodie.css"
```

上面命令会监视sass文件的变动，只要有变动，就自动将其编译为css文件。

```properties
"dev:autoprefix": "postcss --use autoprefixer --autoprefixer.browsers \"> 5%\" --output src/css/hoodie.css src/css/hoodie.css"
```

上面命令为css文件加上浏览器前缀，限制条件是只考虑市场份额大于5%的浏览器。

（3）serve脚本命令

`serve`脚本命令用于启动服务。

```properties
"serve": "live-server dist/ --port=9090"
```

上面命令启动服务，用的是[live-server](https://npmjs.com/package/live-server)模块，将服务启动在9090端口，展示`dist`子目录。

`live-server`模块有三个功能。

- 启动一个HTTP服务器，展示指定目录的`index.html`文件，通过该文件加载各种网络资源，这是`file://`协议做不到的。
- 添加自动刷新功能。只要指定目录之中，文件有任何变化，它就会刷新页面。
- `npm run serve`命令执行以后，自动打开浏览器。、

以前，上面三个功能需要三个模块来完成：`http-server`、`live-reload`和`opener`，现在只要`live-server`一个模块就够了。

（4）test脚本命令

`test`脚本命令用于执行测试。

```properties
"test": "npm-run-all test:*",
"test:lint": "sass-lint --verbose --config .sass-lint.yml src/sass/*"
```

上面命令规定，执行测试时，运行`lint`脚本，检查脚本之中的语法错误。

（5）prod脚本命令

`prod`脚本命令，规定进入生产环境时需要做的处理。

```properties
"prod": "npm-run-all prod:*",
"prod:sass": "node-sass --output-style compressed src/sass/base.scss src/css/prod/hoodie.min.css",
"prod:autoprefix": "postcss --use autoprefixer --autoprefixer.browsers "> 5%" --output src/css/prod/hoodie.min.css src/css/prod/hoodie.min.css"
```

上面命令将sass文件转为css文件，并加上浏览器前缀。

（6）help脚本命令

`help`脚本命令用于展示帮助信息。

```properties
"help": "markdown-chalk --input DEVELOPMENT.md"
```

上面命令之中，`markdown-chalk`模块用于将指定的markdown文件，转为彩色文本显示在终端之中。

（7）docs脚本命令

`docs`脚本命令用于生成文档。

```properties
"docs": "kss-node --source src/sass --homepage ../../styleguide.md"
```

上面命令使用`kss-node`模块，提供源码的注释生成markdown格式的文档。

#### pre- 和 post- 脚本

`npm run`为每条命令提供了`pre-`和`post-`两个钩子（hook）。以`npm run lint`为例，执行这条命令之前，npm会先查看有没有定义prelint和postlint两个钩子，如果有的话，就会先执行`npm run prelint`，然后执行`npm run lint`，最后执行`npm run postlint`。

```properties
{
  "name": "myproject",
  "devDependencies": {
    "eslint": "latest"
    "karma": "latest"
  },
  "scripts": {
    "lint": "eslint --cache --ext .js --ext .jsx src",
    "test": "karma start --log-leve=error karma.config.js --single-run=true",
    "pretest": "npm run lint",
    "posttest": "echo 'Finished running tests'"
  }
}
```

上面代码是一个`package.json`文件的例子。如果执行`npm test`，会按下面的顺序执行相应的命令。

1. `pretest`
2. `test`
3. `posttest`

如果执行过程出错，就不会执行排在后面的脚本，即如果prelint脚本执行出错，就不会接着执行lint和postlint脚本。

下面是一个例子。

```properties
{
  "test": "karma start",
  "test:lint": "eslint . --ext .js --ext .jsx",
  "pretest": "npm run test:lint"
}
```

上面代码中，在运行`npm run test`之前，会自动检查代码，即运行`npm run test:lint`命令。

下面是一些常见的`pre-`和`post-`脚本。

- `prepublish`：发布一个模块前执行。
- `postpublish`：发布一个模块后执行。
- `preinstall`：用户执行`npm install`命令时，先执行该脚本。
- `postinstall`：用户执行`npm install`命令时，安装结束后执行该脚本，通常用于将下载的源码编译成用户需要的格式，比如有些模块需要在用户机器上跟本地的C++模块一起编译。
- `preuninstall`：卸载一个模块前执行。
- `postuninstall`：卸载一个模块后执行。
- `preversion`：更改模块版本前执行。
- `postversion`：更改模块版本后执行。
- `pretest`：运行`npm test`命令前执行。
- `posttest`：运行`npm test`命令后执行。
- `prestop`：运行`npm stop`命令前执行。
- `poststop`：运行`npm stop`命令后执行。
- `prestart`：运行`npm start`命令前执行。
- `poststart`：运行`npm start`命令后执行。
- `prerestart`：运行`npm restart`命令前执行。
- `postrestart`：运行`npm restart`命令后执行。

对于最后一个`npm restart`命令，如果没有设置`restart`脚本，`prerestart`和`postrestart`会依次执行stop和start脚本。

另外，不能在`pre`脚本之前再加`pre`，即`prepretest`脚本不起作用。

注意，即使Npm可以自动运行`pre`和`post`脚本，也可以手动执行它们。

```bash
$ npm run prepublish
```

下面是`post install`的例子。

```properties
{
  "postinstall": "node lib/post_install.js"
}
```

上面的这个命令，主要用于处理从Git仓库拉下来的源码。比如，有些源码是用TypeScript写的，可能需要转换一下。

下面是`publish`钩子的一个例子。

```
{
  "dist:modules": "babel ./src --out-dir ./dist-modules",
  "gh-pages": "webpack",
  "gh-pages:deploy": "gh-pages -d gh-pages",
  "prepublish": "npm run dist:modules",
  "postpublish": "npm run gh-pages && npm run gh-pages:deploy"
}
```

上面命令在运行`npm run publish`时，会先执行Babel编译，然后调用Webpack构建，最后发到Github Pages上面。

以上都是npm相关操作的钩子，如果安装某些模块，还能支持Git相关的钩子。下面以[husky](https://github.com/typicode/husky)模块为例。

```bash
$ npm install husky --save-dev
```

安装以后，就能在`package.json`添加`precommit`、`prepush`等钩子。

```properties
{
    "scripts": {
        "lint": "eslint yourJsFiles.js",
        "precommit": "npm run test && npm run lint",
        "prepush": "npm run test && npm run lint",
        "...": "..."
    }
}
```

类似作用的模块还有`pre-commit`、`precommit-hook`等。

#### 内部变量

scripts字段可以使用一些内部变量，主要是package.json的各种字段。

比如，package.json的内容是`{"name":"foo", "version":"1.2.5"}`，那么变量`npm_package_name`的值是foo，变量`npm_package_version`的值是1.2.5。

```properties
{
  "scripts":{
    "bundle": "mkdir -p build/$npm_package_version/"
  }
}
```

运行`npm run bundle`以后，将会生成`build/1.2.5/`子目录。

`config`字段也可以用于设置内部字段。

```properties
  "name": "fooproject",
  "config": {
    "reporter": "xunit"
  },
  "scripts": {
    "test": "mocha test/ --reporter $npm_package_config_reporter"
  }
```

上面代码中，变量`npm_package_config_reporter`对应的就是reporter。

#### 通配符

npm的通配符的规则如下。

- `*` 匹配0个或多个字符
- `?` 匹配1个字符
- `[...]` 匹配某个范围的字符。如果该范围的第一个字符是`!`或`^`，则匹配不在该范围的字符。
- `!(pattern|pattern|pattern)` 匹配任何不符合给定的模式
- `?(pattern|pattern|pattern)` 匹配0个或1个给定的模式
- `+(pattern|pattern|pattern)` 匹配1个或多个给定的模式
- `*(a|b|c)` 匹配0个或多个给定的模式
- `@(pattern|pat*|pat?erN)` 只匹配给定模式之一
- `**` 如果出现在路径部分，表示0个或多个子目录。

### npm link

开发NPM模块的时候，有时我们会希望，边开发边试用，比如本地调试的时候，`require('myModule')`会自动加载本机开发中的模块。Node规定，使用一个模块时，需要将其安装到全局的或项目的`node_modules`目录之中。对于开发中的模块，解决方法就是在全局的`node_modules`目录之中，生成一个符号链接，指向模块的本地目录。

`npm link`就能起到这个作用，会自动建立这个符号链接。

请设想这样一个场景，你开发了一个模块`myModule`，目录为`src/myModule`，你自己的项目`myProject`要用到这个模块，项目目录为`src/myProject`。首先，在模块目录（`src/myModule`）下运行`npm link`命令。

```
src/myModule$ npm link
```

上面的命令会在NPM的全局模块目录内，生成一个符号链接文件，该文件的名字就是`package.json`文件中指定的模块名。

```
/path/to/global/node_modules/myModule -> src/myModule
```

这个时候，已经可以全局调用`myModule`模块了。但是，如果我们要让这个模块安装在项目内，还要进行下面的步骤。

切换到项目目录，再次运行`npm link`命令，并指定模块名。

```
src/myProject$ npm link myModule
```

上面命令等同于生成了本地模块的符号链接。

```
src/myProject/node_modules/myModule -> /path/to/global/node_modules/myModule
```

然后，就可以在你的项目中，加载该模块了。

```
var myModule = require('myModule');
```

这样一来，`myModule`的任何变化，都可以直接反映在`myProject`项目之中。但是，这样也出现了风险，任何在`myProject`目录中对`myModule`的修改，都会反映到模块的源码中。

如果你的项目不再需要该模块，可以在项目目录内使用`npm unlink`命令，删除符号链接。

```
src/myProject$ npm unlink myModule
```

### npm bin

`npm bin`命令显示相对于当前目录的，Node模块的可执行脚本所在的目录（即`.bin`目录）。

```bash
## 项目根目录下执行
$ npm bin
./node_modules/.bin
```

### npm adduser

`npm adduser`用于在[npmjs.com](http://npmjs.com/)注册一个用户。

```bash
$ npm adduser
Username: YOUR_USER_NAME
Password: YOUR_PASSWORD
Email: YOUR_EMAIL@domain.com
```

### npm publish

`npm publish`用于将当前模块发布到`npmjs.com`。执行之前，需要向`npmjs.com`申请用户名。

```bash
$ npm adduser
```

如果已经注册过，就使用下面的命令登录。

```bash
$ npm login
```

登录以后，就可以使用`npm publish`命令发布。

```bash
$ npm publish
```

如果当前模块是一个beta版，比如`1.3.1-beta.3`，那么发布的时候需要使用`tag`参数，将其发布到指定标签，默认的发布标签是`latest`。

```bash
$ npm publish --tag beta
```

如果发布私有模块，模块初始化的时候，需要加上`scope`参数。只有npm的付费用户才能发布私有模块。

```bash
$ npm init --scope=<yourscope>
```

如果你的模块是用ES6写的，那么发布的时候，最好转成ES5。首先，需要安装Babel。

```bash
$ npm install --save-dev babel-cli@6 babel-preset-es2015@6
```

然后，在`package.json`里面写入`build`脚本。

```properties
"scripts": {
  "build": "babel source --presets babel-preset-es2015 --out-dir distribution",
  "prepublish": "npm run build"
}
```

运行上面的脚本，会将`source`目录里面的ES6源码文件，转为`distribution`目录里面的ES5源码文件。然后，在项目根目录下面创建两个文件`.npmignore`和`.gitignore`，分别写入以下内容。

```javascrip
// .npmignore
source

// .gitignore
node_modules
distribution
```

### npm deprecate

如果想废弃某个版本的模块，可以使用`npm deprecate`命令。

```bash
$ npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
```

运行上面的命令以后，小于`0.2.3`版本的模块的`package.json`都会写入一行警告，用户安装这些版本时，这行警告就会在命令行显示。

### npm owner

模块的维护者可以发布新版本。`npm owner`命令用于管理模块的维护者。

```bash
## 列出指定模块的维护者
$ npm owner ls <package name>

## 新增维护者
$ npm owner add <user> <package name>

## 删除维护者
$ npm owner rm <user> <package name>
```

### 其他命令

#### npm home，npm repo

`npm home`命令可以打开一个模块的主页，`npm repo`命令则是打开一个模块的代码仓库。

```bash
$ npm home $package
$ npm repo $package
```

这两个命令不需要模块先安装。

#### npm outdated

`npm outdated`命令检查当前项目所依赖的模块，是否已经有新版本。

```bash
$ npm outdated
```

它会输出当前版本（current version）、应当安装的版本（wanted version）和最新发布的版本（latest version）。

#### npm prune

`npm prune`检查当前项目的`node_modules`目录中，是否有`package.json`里面没有提到的模块，然后将所有这些模块输出在命令行。

```bash
$ npm prune
```

#### npm shrinkwrap

`npm shrinkwrap`的作用是锁定当前项目的依赖模块的版本。

```bash
$ npm shrinkwrap
```

运行该命令后，会在当前项目的根目录下生成一个`npm-shrinkwrap.json`文件，内容是`node_modules`目录下所有已经安装的模块，以及它们的精确版本。

下次运行`npm install`命令时，`npm`发现当前目录下有`npm-shrinkwrap.json`文件，就会只安装里面提到的模块，且版本也会保持一致。