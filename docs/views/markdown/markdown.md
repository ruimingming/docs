# Markdown 拓展

## [#](https://www.vuepress.cn/guide/markdown.html#header-anchors)Header Anchors

所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 [`markdown.anchor`](https://www.vuepress.cn/config/#markdown-anchor) 来配置。

## [#](https://www.vuepress.cn/guide/markdown.html#链接)链接

### [#](https://www.vuepress.cn/guide/markdown.html#内部链接)内部链接

网站内部的链接，将会被转换成 `` 用于 SPA 导航。同时，站内的每一个文件夹下的 `README.md` 或者 `index.md` 文件都会被自动编译为 `index.html`，对应的链接将被视为 `/`。

以如下的文件结构为例：

```text
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```

假设你现在在 `foo/one.md` 中：

```md
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->
```

### [#](https://www.vuepress.cn/guide/markdown.html#链接的重定向)链接的重定向

VuePress 支持重定向到干净链接。如果一个链接 `/foo` 找不到，VuePress 会自行寻找一个可用的 `/foo/` 或 `/foo.html`。反过来，当 `/foo/` 或 `/foo.html` 中的一个找不到时，VuePress 也会尝试寻找另一个。借助这种特性，我们可以通过官方插件 [vuepress-plugin-clean-urls](https://vuepress.github.io/plugins/clean-urls/) 定制你的网站路径。

注意

无论是否使用了 permalink 和 clean-urls 插件，你的相对路径都应该依赖于当前的文件结构来定义。在上面的例子中，即使你将 `/foo/one.md` 的路径设为了 `/foo/one/`，你依然应该通过 `./two.md` 来访问 `/foo/two.md`。

### [#](https://www.vuepress.cn/guide/markdown.html#外部链接)外部链接

外部的链接将会被自动地设置为 `target="_blank" rel="noopener noreferrer"`:

- [vuejs.org](https://vuejs.org/)
- [VuePress on GitHub](https://github.com/vuejs/vuepress)

你可以自定义通过配置 [config.markdown.externalLinks](https://www.vuepress.cn/config/#markdown-externallinks) 来自定义外部链接的特性。

## [#](https://www.vuepress.cn/guide/markdown.html#front-matter)Front Matter

VuePress 提供了对 [YAML front matter](https://jekyllrb.com/docs/frontmatter/) 开箱即用的支持:

```yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

这些数据可以在当前 markdown 的正文，或者是任意的自定义或主题组件中使用。

想了解更多，请移步 [Front Matter](https://www.vuepress.cn/guide/frontmatter.html)。

## [#](https://www.vuepress.cn/guide/markdown.html#github-风格的表格)GitHub 风格的表格

**输入**

```text
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

**输出**

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## [#](https://www.vuepress.cn/guide/markdown.html#emoji)Emoji

**输入**

```text
:tada: :100:
```

**输出**

🎉 💯

你可以在[这个列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)找到所有可用的 Emoji。

## [#](https://www.vuepress.cn/guide/markdown.html#目录)目录

**输入**

```text
[[toc]]
```

**输出**



- [Header Anchors](https://www.vuepress.cn/guide/markdown.html#header-anchors)
- 链接
  - [内部链接](https://www.vuepress.cn/guide/markdown.html#内部链接)
  - [链接的重定向](https://www.vuepress.cn/guide/markdown.html#链接的重定向)
  - [外部链接](https://www.vuepress.cn/guide/markdown.html#外部链接)
- [Front Matter](https://www.vuepress.cn/guide/markdown.html#front-matter)
- [GitHub 风格的表格](https://www.vuepress.cn/guide/markdown.html#github-风格的表格)
- [Emoji](https://www.vuepress.cn/guide/markdown.html#emoji)
- [目录](https://www.vuepress.cn/guide/markdown.html#目录)
- [自定义容器 默认主题](https://www.vuepress.cn/guide/markdown.html#自定义容器-badge-text-默认主题)
- [代码块中的语法高亮](https://www.vuepress.cn/guide/markdown.html#代码块中的语法高亮)
- [代码块中的行高亮](https://www.vuepress.cn/guide/markdown.html#代码块中的行高亮)
- [行号](https://www.vuepress.cn/guide/markdown.html#行号)
- [导入代码段 beta](https://www.vuepress.cn/guide/markdown.html#导入代码段-badge-text-beta-type-warning)
- [进阶配置](https://www.vuepress.cn/guide/markdown.html#进阶配置)



目录（Table of Contents）的渲染可以通过 [`markdown.toc`](https://www.vuepress.cn/config/#markdown-toc) 选项来配置。

## [#](https://www.vuepress.cn/guide/markdown.html#自定义容器)自定义容器 默认主题

**输入**

```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

**输出**

TIP

这是一个提示

WARNING

这是一个警告

WARNING

这是一个危险警告

<details class="custom-block details" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"></details>

你也可以自定义块中的标题：

~~~md
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::
~~~

STOP

危险区域，禁止通行

<details class="custom-block details" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看代码</summary></details>

**参考:**

- [vuepress-plugin-container](https://vuepress.github.io/plugins/container/)

## [#](https://www.vuepress.cn/guide/markdown.html#代码块中的语法高亮)代码块中的语法高亮

VuePress 使用了 [Prism](https://prismjs.com/) 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：

**输入**

~~~text
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
~~~

**输出**

```js
export default {
  name: 'MyComponent',
  // ...
}
```

**输入**

~~~text
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
~~~

**输出**

```html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

在 Prism 的网站上查看 [合法的语言列表](https://prismjs.com/#languages-list)。

## [#](https://www.vuepress.cn/guide/markdown.html#代码块中的行高亮)代码块中的行高亮

**输入**

~~~text
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
~~~

**输出**





 







```js
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## [#](https://www.vuepress.cn/guide/markdown.html#行号)行号

你可以通过配置来为每个代码块显示行号：

```js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```

- 示例:

![Image](assets/面试)







## [#](https://www.vuepress.cn/guide/markdown.html#导入代码段)导入代码段 beta

你可以通过下述的语法导入已经存在的文件中的代码段：

```md
<<< @/filepath
```

它也支持 [行高亮](https://www.vuepress.cn/guide/markdown.html#代码块中的行高亮)：

```md
<<< @/filepath{highlightLines}
```

**输入**

```text
<<< @/../@vuepress/markdown/__tests__/fragments/snippet.js{2}
```

**输出**



 





```js
export default function () {
  // ..
}
```

注意

由于代码段的导入将在 webpack 编译之前执行，因此你无法使用 webpack 中的路径别名，此处的 `@` 默认值是 `process.cwd()`。

## [#](https://www.vuepress.cn/guide/markdown.html#进阶配置)进阶配置

VuePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的。想要进一步的话，你可以通过 `.vuepress/config.js` 的 `markdown` 选项，来对当前的 `markdown-it` 实例做一些自定义的配置：

```js
module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```