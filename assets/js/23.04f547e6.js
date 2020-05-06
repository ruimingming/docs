(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{445:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"markdown-拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-拓展"}},[t._v("#")]),t._v(" Markdown 拓展")]),t._v(" "),a("h2",{attrs:{id:"header-anchors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header-anchors"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#header-anchors",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("Header Anchors")]),t._v(" "),a("p",[t._v("所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 "),a("a",{attrs:{href:"https://www.vuepress.cn/config/#markdown-anchor",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("markdown.anchor")]),a("OutboundLink")],1),t._v(" 来配置。")]),t._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E9%93%BE%E6%8E%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("链接")]),t._v(" "),a("h3",{attrs:{id:"内部链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内部链接"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E5%86%85%E9%83%A8%E9%93%BE%E6%8E%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("内部链接")]),t._v(" "),a("p",[t._v("网站内部的链接，将会被转换成 `` 用于 SPA 导航。同时，站内的每一个文件夹下的 "),a("code",[t._v("README.md")]),t._v(" 或者 "),a("code",[t._v("index.md")]),t._v(" 文件都会被自动编译为 "),a("code",[t._v("index.html")]),t._v("，对应的链接将被视为 "),a("code",[t._v("/")]),t._v("。")]),t._v(" "),a("p",[t._v("以如下的文件结构为例：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├─ README.md\n├─ foo\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("假设你现在在 "),a("code",[t._v("foo/one.md")]),t._v(" 中：")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("Home")]),t._v("](/)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到根部的 README.md --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo")]),t._v("](/foo/)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到 foo 文件夹的 index.html --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo heading")]),t._v("](./#heading)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到 foo/index.html 的特定标题位置 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("bar - three")]),t._v("](../bar/three.md)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 具体文件可以使用 .md 结尾（推荐） --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("bar - four")]),t._v("](../bar/four.html)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 也可以用 .html --\x3e")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"链接的重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接的重定向"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E9%93%BE%E6%8E%A5%E7%9A%84%E9%87%8D%E5%AE%9A%E5%90%91",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("链接的重定向")]),t._v(" "),a("p",[t._v("VuePress 支持重定向到干净链接。如果一个链接 "),a("code",[t._v("/foo")]),t._v(" 找不到，VuePress 会自行寻找一个可用的 "),a("code",[t._v("/foo/")]),t._v(" 或 "),a("code",[t._v("/foo.html")]),t._v("。反过来，当 "),a("code",[t._v("/foo/")]),t._v(" 或 "),a("code",[t._v("/foo.html")]),t._v(" 中的一个找不到时，VuePress 也会尝试寻找另一个。借助这种特性，我们可以通过官方插件 "),a("a",{attrs:{href:"https://vuepress.github.io/plugins/clean-urls/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-clean-urls"),a("OutboundLink")],1),t._v(" 定制你的网站路径。")]),t._v(" "),a("p",[t._v("注意")]),t._v(" "),a("p",[t._v("无论是否使用了 permalink 和 clean-urls 插件，你的相对路径都应该依赖于当前的文件结构来定义。在上面的例子中，即使你将 "),a("code",[t._v("/foo/one.md")]),t._v(" 的路径设为了 "),a("code",[t._v("/foo/one/")]),t._v("，你依然应该通过 "),a("code",[t._v("./two.md")]),t._v(" 来访问 "),a("code",[t._v("/foo/two.md")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"外部链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部链接"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E5%A4%96%E9%83%A8%E9%93%BE%E6%8E%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("外部链接")]),t._v(" "),a("p",[t._v("外部的链接将会被自动地设置为 "),a("code",[t._v('target="_blank" rel="noopener noreferrer"')]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuejs.org"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress on GitHub"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("你可以自定义通过配置 "),a("a",{attrs:{href:"https://www.vuepress.cn/config/#markdown-externallinks",target:"_blank",rel:"noopener noreferrer"}},[t._v("config.markdown.externalLinks"),a("OutboundLink")],1),t._v(" 来自定义外部链接的特性。")]),t._v(" "),a("h2",{attrs:{id:"front-matter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-matter"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#front-matter",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("Front Matter")]),t._v(" "),a("p",[t._v("VuePress 提供了对 "),a("a",{attrs:{href:"https://jekyllrb.com/docs/frontmatter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML front matter"),a("OutboundLink")],1),t._v(" 开箱即用的支持:")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blogging Like a Hacker\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("这些数据可以在当前 markdown 的正文，或者是任意的自定义或主题组件中使用。")]),t._v(" "),a("p",[t._v("想了解更多，请移步 "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/frontmatter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Front Matter"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"github-风格的表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-风格的表格"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#github-%E9%A3%8E%E6%A0%BC%E7%9A%84%E8%A1%A8%E6%A0%BC",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("GitHub 风格的表格")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Tables")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Are")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("Cool")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("col 3 is")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("right-aligned")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("$1600")])]),t._v(" "),a("tr",[a("td",[t._v("col 2 is")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("centered")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("$12")])]),t._v(" "),a("tr",[a("td",[t._v("zebra stripes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("are neat")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("$1")])])])]),t._v(" "),a("h2",{attrs:{id:"emoji"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emoji"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#emoji",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("Emoji")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(":tada: :100:\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("p",[t._v("🎉 💯")]),t._v(" "),a("p",[t._v("你可以在"),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个列表"),a("OutboundLink")],1),t._v("找到所有可用的 Emoji。")]),t._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E7%9B%AE%E5%BD%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("目录")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[[toc]]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#header-anchors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Header Anchors"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("链接\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E5%86%85%E9%83%A8%E9%93%BE%E6%8E%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("内部链接"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E9%93%BE%E6%8E%A5%E7%9A%84%E9%87%8D%E5%AE%9A%E5%90%91",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接的重定向"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E5%A4%96%E9%83%A8%E9%93%BE%E6%8E%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("外部链接"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#front-matter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Front Matter"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#github-%E9%A3%8E%E6%A0%BC%E7%9A%84%E8%A1%A8%E6%A0%BC",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 风格的表格"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#emoji",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emoji"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E7%9B%AE%E5%BD%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("目录"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8-badge-text-%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义容器 默认主题"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%AF%AD%E6%B3%95%E9%AB%98%E4%BA%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码块中的语法高亮"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%A1%8C%E9%AB%98%E4%BA%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码块中的行高亮"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E8%A1%8C%E5%8F%B7",target:"_blank",rel:"noopener noreferrer"}},[t._v("行号"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E6%AE%B5-badge-text-beta-type-warning",target:"_blank",rel:"noopener noreferrer"}},[t._v("导入代码段 beta"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E8%BF%9B%E9%98%B6%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("进阶配置"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("目录（Table of Contents）的渲染可以通过 "),a("a",{attrs:{href:"https://www.vuepress.cn/config/#markdown-toc",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("markdown.toc")]),a("OutboundLink")],1),t._v(" 选项来配置。")]),t._v(" "),a("h2",{attrs:{id:"自定义容器-默认主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器-默认主题"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("自定义容器 默认主题")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("::: tip\n这是一个提示\n:::\n\n::: warning\n这是一个警告\n:::\n\n::: danger\n这是一个危险警告\n:::\n\n::: details\n这是一个详情块，在 IE / Edge 中不生效\n:::\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("p",[t._v("TIP")]),t._v(" "),a("p",[t._v("这是一个提示")]),t._v(" "),a("p",[t._v("WARNING")]),t._v(" "),a("p",[t._v("这是一个警告")]),t._v(" "),a("p",[t._v("WARNING")]),t._v(" "),a("p",[t._v("这是一个危险警告")]),t._v(" "),a("details",{staticClass:"custom-block details",staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0px",padding:"1.6em","background-color":"rgb(238, 238, 238)",color:"rgb(44, 62, 80)","font-family":'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',"font-size":"16px","font-style":"normal","font-variant-ligatures":"normal","font-variant-caps":"normal","font-weight":"400","letter-spacing":"normal",orphans:"2","text-align":"start","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","text-decoration-style":"initial","text-decoration-color":"initial"}}),t._v(" "),a("p",[t._v("你也可以自定义块中的标题：")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("::: danger STOP\n危险区域，禁止通行\n:::\n\n::: details 点击查看代码\n"),a("span",{pre:!0,attrs:{class:"token code"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")]),a("span",{pre:!0,attrs:{class:"token code-language"}},[t._v("js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token code-block language-js"}},[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你好，VuePress！'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")])]),t._v("\n:::\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("STOP")]),t._v(" "),a("p",[t._v("危险区域，禁止通行")]),t._v(" "),a("details",{staticClass:"custom-block details",staticStyle:{display:"block",position:"relative","border-radius":"2px",margin:"1.6em 0px",padding:"1.6em","background-color":"rgb(238, 238, 238)",color:"rgb(44, 62, 80)","font-family":'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',"font-size":"16px","font-style":"normal","font-variant-ligatures":"normal","font-variant-caps":"normal","font-weight":"400","letter-spacing":"normal",orphans:"2","text-align":"start","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","text-decoration-style":"initial","text-decoration-color":"initial"}},[a("summary",{staticStyle:{outline:"none",cursor:"pointer"}},[t._v("点击查看代码")])]),t._v(" "),a("p",[a("strong",[t._v("参考:")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.github.io/plugins/container/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-container"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"代码块中的语法高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码块中的语法高亮"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%AF%AD%E6%B3%95%E9%AB%98%E4%BA%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("代码块中的语法高亮")]),t._v(" "),a("p",[t._v("VuePress 使用了 "),a("a",{attrs:{href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prism"),a("OutboundLink")],1),t._v(" 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("``` js\nexport default {\n  name: 'MyComponent',\n  // ...\n}\n```\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyComponent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('``` html\n<ul>\n  <li\n    v-for="todo in todos"\n    :key="todo.id"\n  >\n    {{ todo.text }}\n  </li>\n</ul>\n```\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("todo in todos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("todo.id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ todo.text }}\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("在 Prism 的网站上查看 "),a("a",{attrs:{href:"https://prismjs.com/#languages-list",target:"_blank",rel:"noopener noreferrer"}},[t._v("合法的语言列表"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"代码块中的行高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码块中的行高亮"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%A1%8C%E9%AB%98%E4%BA%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("代码块中的行高亮")]),t._v(" "),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("``` js {4}\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Highlighted!'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"行号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行号"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E8%A1%8C%E5%8F%B7",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("行号")]),t._v(" "),a("p",[t._v("你可以通过配置来为每个代码块显示行号：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lineNumbers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[t._v("示例:")])]),t._v(" "),a("p",[a("img",{attrs:{src:"assets/%E9%9D%A2%E8%AF%95",alt:"Image"}})]),t._v(" "),a("h2",{attrs:{id:"导入代码段-beta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入代码段-beta"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E6%AE%B5",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("导入代码段 beta")]),t._v(" "),a("p",[t._v("你可以通过下述的语法导入已经存在的文件中的代码段：")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("<<< @/filepath\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("它也支持 "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%A1%8C%E9%AB%98%E4%BA%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("行高亮"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("<<< @/filepath{highlightLines}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("输入")])]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<<< @/../@vuepress/markdown/__tests__/fragments/snippet.js{2}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("输出")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("注意")]),t._v(" "),a("p",[t._v("由于代码段的导入将在 webpack 编译之前执行，因此你无法使用 webpack 中的路径别名，此处的 "),a("code",[t._v("@")]),t._v(" 默认值是 "),a("code",[t._v("process.cwd()")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"进阶配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶配置"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.vuepress.cn/guide/markdown.html#%E8%BF%9B%E9%98%B6%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("进阶配置")]),t._v(" "),a("p",[t._v("VuePress 使用 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),a("OutboundLink")],1),t._v(" 来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的。想要进一步的话，你可以通过 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 的 "),a("code",[t._v("markdown")]),t._v(" 选项，来对当前的 "),a("code",[t._v("markdown-it")]),t._v(" 实例做一些自定义的配置：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// markdown-it-anchor 的选项")]),t._v("\n    anchor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" permalink"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// markdown-it-toc 的选项")]),t._v("\n    toc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" includeLevel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("extendMarkdown")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("md")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用更多的 markdown-it 插件!")]),t._v("\n      md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);