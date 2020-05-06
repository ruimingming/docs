(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{435:function(t,a,_){"use strict";_.r(a);var v=_(5),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"第五章-安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第五章-安全"}},[t._v("#")]),t._v(" 第五章 安全")]),t._v(" "),_("h2",{attrs:{id:"目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/01-Introduction.html"}},[t._v("第一章 - 介绍")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/02-ControlPacketFormat.html"}},[t._v("第二章 – MQTT控制报文格式")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/03-ControlPackets.html"}},[t._v("第三章 – MQTT控制报文")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/04-OperationalBehavior.html"}},[t._v("第四章 – 操作行为")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/05-Security.html"}},[t._v("第五章 – 安全")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/06-WebSocket.html"}},[t._v("第六章 – 使用WebSocket")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/07-Conformance.html"}},[t._v("第七章 – 一致性目标")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/08-AppendixB.html"}},[t._v("附录B - 强制性规范声明")])],1)]),t._v(" "),_("h2",{attrs:{id:"_5-1-概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-概述"}},[t._v("#")]),t._v(" 5.1 概述")]),t._v(" "),_("p",[t._v("本章的内容仅供参考，是非规范化的。然而，强烈推荐提供TLS的服务端实现"),_("strong",[t._v("应该")]),t._v("使用TCP端口8883（IANA服务名：secure-mqtt）。")]),t._v(" "),_("p",[t._v("解决方案提供者需要考虑很多风险。例如：")]),t._v(" "),_("ul",[_("li",[t._v("设备可能会被盗用")]),t._v(" "),_("li",[t._v("客户端和服务端的静态数据可能是可访问的（可能会被修改）")]),t._v(" "),_("li",[t._v("协议行为可能有副作用（如计时器攻击）")]),t._v(" "),_("li",[t._v("拒绝服务攻击")]),t._v(" "),_("li",[t._v("通信可能会被拦截、修改、重定向或者泄露")]),t._v(" "),_("li",[t._v("虚假控制报文注入")])]),t._v(" "),_("p",[t._v("MQTT方案通常部署在不安全的通信环境中。在这种情况下，协议实现通常需要提供这些机制：")]),t._v(" "),_("ul",[_("li",[t._v("用户和设备身份认证")]),t._v(" "),_("li",[t._v("服务端资源访问授权")]),t._v(" "),_("li",[t._v("MQTT控制报文和内嵌应用数据的完整性校验")]),t._v(" "),_("li",[t._v("MQTT控制报文和内嵌应用数据的隐私控制")])]),t._v(" "),_("p",[t._v("作为传输层协议，MQTT仅关注消息传输，提供合适的安全功能是实现者的责任。使用TLS "),_("a",{attrs:{href:"#RFC5246"}},[t._v("[RFC5246]")]),t._v(" 是比较普遍的选择。除了技术上的安全问题外，还有地理因素（例如美国欧盟安全港原则 "),_("a",{attrs:{href:"#USEUSAFEHARB"}},[t._v("[USEUSAFEHARB]")]),t._v("），行业标准（例如第三方支付行业数据安全标准 "),_("a",{attrs:{href:"#PCIDSS"}},[t._v("[PCIDSS]")]),t._v("），监管方面的考虑（例如萨班斯-奥克斯利法案 "),_("a",{attrs:{href:"#SARBANES"}},[t._v("[SARBANES]")]),t._v("）等问题。")]),t._v(" "),_("h2",{attrs:{id:"_5-2-mqtt解决方案：安全和认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-mqtt解决方案：安全和认证"}},[t._v("#")]),t._v(" 5.2 MQTT解决方案：安全和认证")]),t._v(" "),_("p",[t._v("MQTT solutions: security and certification")]),t._v(" "),_("p",[t._v("协议实现可能想要符合特定的工业安全标准，如NIST网络安全框架 ["),_("a",{attrs:{href:"#NISTCSF"}},[t._v("NISTCSF]")]),t._v(" ，第三方支付行业数据安全标准 "),_("a",{attrs:{href:"#PCIDSS"}},[t._v("[PCIDSS]")]),t._v(" ，美国联邦信息处理标准 "),_("a",{attrs:{href:"#FIPS1402"}},[t._v("[FIPS1402]")]),t._v(" 和 NSA 加密组合B ["),_("a",{attrs:{href:"#NSAB"}},[t._v("NSAB")]),t._v("] 。")]),t._v(" "),_("p",[t._v("在MQTT的补充出版物 （MQTT and the NIST Framework for Improving Critical Infrastructure Cybersecurity "),_("a",{attrs:{href:"#NISTCSF"}},[t._v("[MQTT NIST]")]),t._v("） 中可以找到在NIST网络安全框架 ["),_("a",{attrs:{href:"#NISTCSF"}},[t._v("NISTCSF]")]),t._v(" 中使用MQTT的指导。使用行业证明、独立审计和认证技术有助于满足合规要求。")]),t._v(" "),_("h2",{attrs:{id:"_5-3-轻量级的加密与受限设备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-轻量级的加密与受限设备"}},[t._v("#")]),t._v(" 5.3 轻量级的加密与受限设备")]),t._v(" "),_("p",[t._v("Lightweight cryptography and constrained devices")]),t._v(" "),_("p",[t._v("广泛采用高级加密标准 "),_("a",{attrs:{href:"#AES"}},[t._v("[AES]")]),t._v(" 数据加密标准 "),_("a",{attrs:{href:"#DES"}},[t._v("[DES]")]),t._v(" 。")]),t._v(" "),_("p",[t._v("推荐使用为受限的低端设备特别优化过的轻量级加密国际标准 ISO 29192 "),_("a",{attrs:{href:"#ISO29192"}},[t._v("[ISO29192]")]),t._v(" 。")]),t._v(" "),_("h2",{attrs:{id:"_5-4-实现注意事项-implementation-notes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-实现注意事项-implementation-notes"}},[t._v("#")]),t._v(" 5.4 实现注意事项 Implementation notes")]),t._v(" "),_("p",[t._v("实现和使用MQTT时需要考虑许多安全问题。下面的部分不应该被当作是一个 核对清单 。")]),t._v(" "),_("p",[t._v("协议实现可以实现下面的一部分或全部：")]),t._v(" "),_("h3",{attrs:{id:"_5-4-1-客户端身份验证-authentication-of-clients-by-the-server"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-1-客户端身份验证-authentication-of-clients-by-the-server"}},[t._v("#")]),t._v(" 5.4.1 客户端身份验证 Authentication of Clients by the Server")]),t._v(" "),_("p",[t._v("CONNECT报文包含用户名和密码字段。实现可以决定如何使用这些字段的内容。实现者可以提供自己的身份验证机制，或者使用外部的认证系统如LDAP "),_("a",{attrs:{href:"#RFC4511"}},[t._v("[RFC4511]")]),t._v(" 或OAuth "),_("a",{attrs:{href:"#RFC6749"}},[t._v("[RFC6749]")]),t._v(" ，还可以利用操作系统的认证机制。")]),t._v(" "),_("p",[t._v("实现可以明文传递认证数据，混淆那些数据，或者不要求任何认证数据，但应该意识到这会增加中间人攻击和重放攻击的风险。5.4.5节介绍了确保数据私密的方法。")]),t._v(" "),_("p",[t._v("在客户端和服务端之间使用虚拟专用网（VPN）可以确保数据只被授权的客户端收到。")]),t._v(" "),_("p",[t._v("使用TLS "),_("a",{attrs:{href:"#RFC5246"}},[t._v("[RFC5246]")]),t._v(" 时，服务端可以使用客户端发送的SSL证书验证客户端的身份。")]),t._v(" "),_("p",[t._v("实现可以允许客户端通过应用消息给服务端发送凭证用于身份验证。")]),t._v(" "),_("h3",{attrs:{id:"_5-4-2-客户端授权-authorization-of-clients-by-the-server"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-2-客户端授权-authorization-of-clients-by-the-server"}},[t._v("#")]),t._v(" 5.4.2 客户端授权 Authorization of Clients by the Server")]),t._v(" "),_("p",[t._v("基于客户端提供的信息如用户名、客户端标识符（ClientId）、客户端的主机名或IP地址，或者身份认证的结果，服务端可以限制对某些服务端资源的访问。")]),t._v(" "),_("h3",{attrs:{id:"_5-4-3-服务端身份验证-authentication-of-the-server-by-the-client"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-3-服务端身份验证-authentication-of-the-server-by-the-client"}},[t._v("#")]),t._v(" 5.4.3 服务端身份验证 Authentication of the Server by the Client")]),t._v(" "),_("p",[t._v("MQTT协议不是双向信任的，它没有提供客户端验证服务端身份的机制。")]),t._v(" "),_("p",[t._v("但是使用TLS "),_("a",{attrs:{href:"#RFC5246"}},[t._v("[RFC5246]")]),t._v(" 时，客户端可以使用服务端发送的SSL证书验证服务端的身份。从单IP多域名提供MQTT服务的实现应该考虑RFC6066 "),_("a",{attrs:{href:"#RFC6066"}},[t._v("[RFC6066]")]),t._v(" 第3节定义的TLS的SNI扩展。SNI允许客户端告诉服务端它要连接的服务端主机名。")]),t._v(" "),_("p",[t._v("实现可以允许服务端通过应用消息给客户端发送凭证用于身份验证。")]),t._v(" "),_("p",[t._v("在客户端和服务端之间使用虚拟专用网（VPN）可以确保客户端连接的是预期的服务器。")]),t._v(" "),_("h3",{attrs:{id:"_5-4-4-控制报文和应用消息的完整性-integrity-of-application-messages-and-control-packets"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-4-控制报文和应用消息的完整性-integrity-of-application-messages-and-control-packets"}},[t._v("#")]),t._v(" 5.4.4 控制报文和应用消息的完整性 Integrity of Application Messages and Control Packets")]),t._v(" "),_("p",[t._v("应用可以在应用消息中单独包含哈希值。这样做可以为PUBLISH控制报文的网络传输和静态数据提供内容的完整性检查。")]),t._v(" "),_("p",[t._v("TLS "),_("a",{attrs:{href:"#RFC5246"}},[t._v("[RFC5246]")]),t._v(" 提供了对网络传输的数据做完整性校验的哈希算法。")]),t._v(" "),_("p",[t._v("在客户端和服务端之间使用虚拟专用网（VPN）连接可以在VPN覆盖的网络段提供数据完整性检查。")]),t._v(" "),_("h3",{attrs:{id:"_5-4-5-控制报文和应用消息的保密性-privacy-of-application-messages-and-control-packets"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-5-控制报文和应用消息的保密性-privacy-of-application-messages-and-control-packets"}},[t._v("#")]),t._v(" 5.4.5 控制报文和应用消息的保密性 Privacy of Application Messages and Control Packets")]),t._v(" "),_("p",[t._v("TLS "),_("a",{attrs:{href:"#RFC5246"}},[t._v("[RFC5246]")]),t._v(" 可以对网络传输的数据加密。如果有效的TLS密码组合包含的加密算法为NULL，那么它不会加密数据。要确保客户端和服务端的保密，应避免使用这些密码组合。")]),t._v(" "),_("p",[t._v("应用可以单独加密应用消息的内容。这可以提供应用消息传输途中和静态数据的私密性。但不能给应用消息的其它属性如主题名加密。")]),t._v(" "),_("p",[t._v("客户端和服务端实现可以加密存储静态数据，例如可以将应用消息作为会话的一部分存储。")]),t._v(" "),_("p",[t._v("在客户端和服务端之间使用虚拟专用网（VPN）连接可以在VPN覆盖的网络段保证数据的私密性。")]),t._v(" "),_("h3",{attrs:{id:"_5-4-6-消息传输的不可抵赖性-non-repudiation-of-message-transmission"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-6-消息传输的不可抵赖性-non-repudiation-of-message-transmission"}},[t._v("#")]),t._v(" .5.4.6 消息传输的不可抵赖性 Non-repudiation of message transmission")]),t._v(" "),_("p",[t._v("应用设计者可能需要考虑适当的策略，以实现端到端的不可抵赖性（non-repudiation）。")]),t._v(" "),_("h3",{attrs:{id:"_5-4-7-检测客户端和服务端的盗用-detecting-compromise-of-clients-and-servers"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-7-检测客户端和服务端的盗用-detecting-compromise-of-clients-and-servers"}},[t._v("#")]),t._v(" 5.4.7 检测客户端和服务端的盗用 Detecting compromise of Clients and Servers")]),t._v(" "),_("p",[t._v("使用TLS "),_("a",{attrs:{href:"#RFC5246"}},[t._v("[RFC5246]")]),t._v(" 的客户端和服务端实现应该能够确保，初始化TLS "),_("a",{attrs:{href:"#RFC5246"}},[t._v("[RFC5246]")]),t._v(" 连接时提供的SSL证书是与主机名（客户端要连接的或服务端将被连接的）关联的。")]),t._v(" "),_("p",[t._v("使用TLS "),_("a",{attrs:{href:"#RFC5246"}},[t._v("[RFC5246]")]),t._v(" 的客户端和服务端实现，可以选择提供检查证书吊销列表 (CRLs "),_("a",{attrs:{href:"#RFC5280"}},[t._v("[RFC5280]")]),t._v(") 和在线证书状态协议 (OSCP) "),_("a",{attrs:{href:"#RFC6960"}},[t._v("[RFC6960]")]),t._v(" 的功能，拒绝使用被吊销的证书。")]),t._v(" "),_("p",[t._v("物理部署可以将防篡改硬件与应用消息的特殊数据传输结合。例如，一个仪表可能会内置一个GPS以确保没有在未授权的地区使用。IEEE安全设备认证 "),_("a",{attrs:{href:"#IEEE8021AR"}},[t._v("[IEEE 802.1AR]")]),t._v(" 就是用于实现这个机制的一个标准，它使用加密绑定标识符验证设备身份。")]),t._v(" "),_("h3",{attrs:{id:"_5-4-8-检测异常行为-detecting-abnormal-behaviors"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-8-检测异常行为-detecting-abnormal-behaviors"}},[t._v("#")]),t._v(" 5.4.8 检测异常行为 Detecting abnormal behaviors")]),t._v(" "),_("p",[t._v("服务端实现可以监视客户端的行为，检测潜在的安全风险。例如：")]),t._v(" "),_("ul",[_("li",[t._v("重复的连接请求")]),t._v(" "),_("li",[t._v("重复的身份验证请求")]),t._v(" "),_("li",[t._v("连接的异常终止")]),t._v(" "),_("li",[t._v("主题扫描（请求发送或订阅大量主题）")]),t._v(" "),_("li",[t._v("发送无法送达的消息（没有订阅者的主题）")]),t._v(" "),_("li",[t._v("客户端连接但是不发送数据")])]),t._v(" "),_("p",[t._v("发现违反安全规则的行为，服务端实现可以断开客户端连接。")]),t._v(" "),_("p",[t._v("服务端实现检测不受欢迎的行为，可以基于IP地址或客户端标识符实现一个动态黑名单列表。")]),t._v(" "),_("p",[t._v("服务部署可以使用网络层次控制（如果可用）实现基于IP地址或其它信息的速率限制或黑名单。")]),t._v(" "),_("h3",{attrs:{id:"_5-4-9-其它的安全注意事项-other-security-considerations"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-9-其它的安全注意事项-other-security-considerations"}},[t._v("#")]),t._v(" 5.4.9 其它的安全注意事项 Other security considerations")]),t._v(" "),_("p",[t._v("如果客户端或服务端的SSL证书丢失，或者我们考虑证书被盗用或者被吊销(利用 CRLs "),_("a",{attrs:{href:"#RFC5280"}},[t._v("[RFC5280]")]),t._v(" 和 OSCP "),_("a",{attrs:{href:"#RFC6960"}},[t._v("[RFC6960]")]),t._v(")的情况。")]),t._v(" "),_("p",[t._v("客户端或服务端验证凭证时，如果发现用户名和密码丢失或被盗用，应该吊销或者重新发放。")]),t._v(" "),_("p",[t._v("在使用长连接时：")]),t._v(" "),_("ul",[_("li",[t._v("客户端和服务端使用TLS "),_("a",{attrs:{href:"#RFC5246"}},[t._v("[RFC5246]")]),t._v(" 时应该允许重新协商会话以确认新的加密参数（替换会话密钥，更换密码组合，更换认证凭证）。")]),t._v(" "),_("li",[t._v("服务端可以断开客户端连接，并要求他们使用新的凭证重新验证身份。")])]),t._v(" "),_("p",[t._v("受限网络上的受限设备和客户端可以使用TLS会话恢复 "),_("a",{attrs:{href:"#RFC5077"}},[t._v("[RFC5077]")]),t._v(" 降低TLS会话重连 "),_("a",{attrs:{href:"#RFC5246"}},[t._v("[RFC5246]")]),t._v(" 的成本。")]),t._v(" "),_("p",[t._v("连接到服务端的客户端与其它连接到服务端的客户端 之间有一个信任传递关系，它们都有权在同一个主题上发布消息。")]),t._v(" "),_("h3",{attrs:{id:"_5-4-10-使用socks代理-use-of-socks"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-10-使用socks代理-use-of-socks"}},[t._v("#")]),t._v(" 5.4.10 使用SOCKS代理 Use of SOCKS")]),t._v(" "),_("p",[t._v("客户端实现应该意识到某些环境要求使用SOCKSv5 "),_("a",{attrs:{href:"#RFC1928"}},[t._v("[RFC1928]")]),t._v(" 代理创建出站的网络连接。某些MQTT实现可以利用安全隧道（如SSH）通过SOCKS代理。一个实现决定支持SOCKS时，它们应该同时支持匿名的和用户名密码验证的SOCKS代理。对于后一种情况，实现应该意识到SOCKS可能使用明文认证，因此应该避免使用相同的凭证连接MQTT服务器。")]),t._v(" "),_("h3",{attrs:{id:"_5-4-11-安全配置文件-security-profiles"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-11-安全配置文件-security-profiles"}},[t._v("#")]),t._v(" 5.4.11 安全配置文件 Security profiles")]),t._v(" "),_("p",[t._v("实现者和方案设计者可能希望将安全当作配置文件集合应用到MQTT协议中。下面描述的是一个分层的安全等级结构。")]),t._v(" "),_("h4",{attrs:{id:"开放通信配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开放通信配置"}},[t._v("#")]),t._v(" 开放通信配置")]),t._v(" "),_("p",[t._v("使用开放通信配置时，MQTT协议运行在一个没有内置额外安全通信机制的开放网络上。")]),t._v(" "),_("h4",{attrs:{id:"安全网络通信配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全网络通信配置"}},[t._v("#")]),t._v(" 安全网络通信配置")]),t._v(" "),_("p",[t._v("使用安全网络通信配置时，MQTT协议运行在有安全控制的物理或虚拟网络上，如VPN或物理安全网络。")]),t._v(" "),_("h4",{attrs:{id:"安全传输配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全传输配置"}},[t._v("#")]),t._v(" 安全传输配置")]),t._v(" "),_("p",[t._v("使用安全传输配置时，MQTT协议运行在使用TLS "),_("a",{attrs:{href:"#RFC5246"}},[t._v("[RFC5246]")]),t._v(" 的物理或虚拟网络上，它提供了身份认证，完整性和保密性。")]),t._v(" "),_("p",[t._v("使用内置的用户名和密码字段，TLS "),_("a",{attrs:{href:"#RFC5246"}},[t._v("[RFC5246]")]),t._v(" 客户端身份认证可被用于（或者代替）MQTT客户端认证。")]),t._v(" "),_("h4",{attrs:{id:"工业标准的安全配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工业标准的安全配置"}},[t._v("#")]),t._v(" 工业标准的安全配置")]),t._v(" "),_("p",[t._v("可以预料的是，MQTT被设计为支持很多工业标准的应用配置，每一种定义一个威胁模型和用于定位威胁的特殊安全机制。特殊的安全机制推荐从下面的方案中选择：")]),t._v(" "),_("p",[_("a",{attrs:{href:"#NISTCSF"}},[t._v("[NISTCSF]")]),t._v(" NIST网络安全框架**\n"),_("strong",[_("a",{attrs:{href:"#NIST7628"}},[t._v("[NIST7628]")]),t._v(" NISTIR 7628智能电网网络安全指南")]),t._v(" "),_("strong",[_("a",{attrs:{href:"#FIPS1402"}},[t._v("[FIPS1402]")]),t._v(" (FIPS PUB 140-2) 加密模块的安全要求")]),t._v(" "),_("strong",[_("a",{attrs:{href:"#PCIDSS"}},[t._v("[PCIDSS]")]),t._v(" PCI-DSS第三方支付行业数据安全标准")]),t._v("\n**"),_("a",{attrs:{href:"#NSAB"}},[t._v("[NSAB]")]),t._v(" NSA加密组合B")]),t._v(" "),_("h3",{attrs:{id:"项目主页"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目主页"}},[t._v("#")]),t._v(" 项目主页")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://github.com/mcxiaoke/mqtt",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT协议中文版"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);