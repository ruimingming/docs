(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{443:function(t,v,_){"use strict";_.r(v);var r=_(5),e=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_3-2-connack-确认连接请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-connack-确认连接请求"}},[t._v("#")]),t._v(" 3.2 CONNACK – 确认连接请求")]),t._v(" "),_("p",[t._v("服务端发送CONNACK报文响应从客户端收到的CONNECT报文。服务端发送给客户端的第一个报文"),_("strong",[t._v("必须")]),t._v("是CONNACK [MQTT-3.2.0-1]。")]),t._v(" "),_("p",[t._v("如果客户端在合理的时间内没有收到服务端的CONNACK报文，客户端"),_("strong",[t._v("应该")]),t._v("关闭网络连接。"),_("em",[t._v("合理")]),t._v(" 的时间取决于应用的类型和通信基础设施。")]),t._v(" "),_("h3",{attrs:{id:"_3-2-1-固定报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-固定报头"}},[t._v("#")]),t._v(" 3.2.1 固定报头")]),t._v(" "),_("p",[t._v("固定报头的格式见 "),_("a",{attrs:{href:"#_Figure_3.8_%E2%80%93"}},[t._v("图例 3.8 – CONNACK 报文固定报头")]),t._v(" 的描述。")]),t._v(" "),_("h5",{attrs:{id:"图例-3-8-connack-报文固定报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图例-3-8-connack-报文固定报头"}},[t._v("#")]),t._v(" 图例 3.8 – CONNACK 报文固定报头")]),t._v(" "),_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("td",{attrs:{align:"center"}},[_("strong",[t._v("Bit")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("7")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("6")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("5")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("4")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("3")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("2")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("1")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("0")])])]),t._v(" "),_("tr",[_("td",[t._v("byte 1")]),t._v(" "),_("td",{attrs:{colspan:"4",align:"center"}},[t._v("MQTT报文类型 (2)")]),t._v(" "),_("td",{attrs:{colspan:"4",align:"center"}},[t._v("Reserved 保留位")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")])]),t._v(" "),_("tr",[_("td",[t._v("byte 2...")]),t._v(" "),_("td",{attrs:{colspan:"8",align:"center"}},[t._v("剩余长度 (2)")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")])])]),t._v(" "),_("p",[_("strong",[t._v("剩余长度字段")])]),t._v(" "),_("p",[t._v("表示可变报头的长度。对于CONNACK报文这个值等于2。")]),t._v(" "),_("h3",{attrs:{id:"_3-2-2-可变报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-可变报头"}},[t._v("#")]),t._v(" 3.2.2 可变报头")]),t._v(" "),_("p",[t._v("可变报头的格式见 "),_("a",{attrs:{href:"#_%E5%9B%BE%E4%BE%8B_3.9_%E2%80%93CONNACK%E6%8A%A5%E6%96%87%E5%8F%AF%E5%8F%98%E6%8A%A5%E5%A4%B4"}},[t._v("图例 3.9 –CONNACK报文可变报头")]),t._v(" 的描述。")]),t._v(" "),_("h5",{attrs:{id:"图例-3-9-connack报文可变报头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图例-3-9-connack报文可变报头"}},[t._v("#")]),t._v(" 图例 3.9 –CONNACK报文可变报头")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th"),t._v(" "),_("th",[_("strong",[t._v("描述")])]),t._v(" "),_("th",[_("strong",[t._v("7")])]),t._v(" "),_("th",[_("strong",[t._v("6")])]),t._v(" "),_("th",[_("strong",[t._v("5")])]),t._v(" "),_("th",[_("strong",[t._v("4")])]),t._v(" "),_("th",[_("strong",[t._v("3")])]),t._v(" "),_("th",[_("strong",[t._v("2")])]),t._v(" "),_("th",[_("strong",[t._v("1")])]),t._v(" "),_("th",[_("strong",[t._v("0")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("连接确认标志")]),t._v(" "),_("td",[t._v("Reserved 保留位")]),t._v(" "),_("td",[t._v("SP"),_("sup",[t._v("1")])]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("byte 1")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("X")])]),t._v(" "),_("tr",[_("td",[t._v("连接返回码")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("byte 2")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")]),t._v(" "),_("td",[t._v("X")])])])]),t._v(" "),_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("td"),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("描述")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("7")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("6")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("5")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("4")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("3")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("2")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("1")])]),t._v(" "),_("td",{attrs:{align:"center"}},[_("strong",[t._v("0")])])]),t._v(" "),_("tr",[_("td",{attrs:{colspan:"2"}},[t._v("连接确认标志")]),t._v(" "),_("td",{attrs:{colspan:"7",align:"center"}},[t._v("Reserved 保留位")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("SP"),_("sup",[t._v("1")])])]),t._v(" "),_("tr",[_("td",{attrs:{align:"center"}},[t._v("byte 1")]),t._v(" "),_("td"),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("X")])]),t._v(" "),_("tr",[_("td",{attrs:{colspan:"10"}},[t._v("连接返回码")])]),t._v(" "),_("tr",[_("td",{attrs:{align:"center"}},[t._v("byte 2")]),t._v(" "),_("td"),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("X")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("X")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("X")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("X")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("X")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("X")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("X")]),t._v(" "),_("td",{attrs:{align:"center"}},[t._v("X")])])]),t._v(" "),_("h4",{attrs:{id:"连接确认标志-connect-acknowledge-flags"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连接确认标志-connect-acknowledge-flags"}},[t._v("#")]),t._v(" 连接确认标志 Connect Acknowledge Flags")]),t._v(" "),_("p",[t._v("第1个字节是 "),_("em",[t._v("连接确认标志")]),t._v("，位7-1是保留位且"),_("strong",[t._v("必须")]),t._v("设置为0。 \n第0 (SP)位 是当前会话（Session Present）标志。")]),t._v(" "),_("h4",{attrs:{id:"当前会话-session-present"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#当前会话-session-present"}},[t._v("#")]),t._v(" 当前会话 Session Present")]),t._v(" "),_("p",[t._v("**位置：**连接确认标志的第0位。")]),t._v(" "),_("p",[t._v("如果服务端收到清理会话（CleanSession）标志为1的连接，除了将CONNACK报文中的返回码设置为0之外，还"),_("strong",[t._v("必须")]),t._v("将CONNACK报文中的当前会话设置（Session Present）标志为0 [MQTT-3.2.2-1]。")]),t._v(" "),_("p",[t._v("如果服务端收到一个CleanSession为0的连接，当前会话标志的值取决于服务端是否已经保存了ClientId对应客户端的会话状态。如果服务端已经保存了会话状态，它"),_("strong",[t._v("必须")]),t._v("将CONNACK报文中的当前会话标志设置为1 [MQTT-3.2.2-2]。如果服务端没有已保存的会话状态，它"),_("strong",[t._v("必须")]),t._v("将CONNACK报文中的当前会话设置为0。还需要将CONNACK报文中的返回码设置为0 [MQTT-3.2.2-3]。")]),t._v(" "),_("p",[t._v("当前会话标志使服务端和客户端在是否有已存储的会话状态上保持一致。")]),t._v(" "),_("p",[t._v("一旦完成了会话的初始化设置，已经保存会话状态的客户端将期望服务端维持它存储的会话状态。如果客户端从服务端收到的当前的值与预期的不同，客户端可以选择继续这个会话或者断开连接。客户端可以丢弃客户端和服务端之间的会话状态，方法是，断开连接，将清理会话标志设置为1，再次连接，然后再次断开连接。")]),t._v(" "),_("p",[t._v("如果服务端发送了一个包含非零返回码的CONNACK报文，它"),_("strong",[t._v("必须")]),t._v("将当前会话标志设置为0 [MQTT-3.2.2-4]。")]),t._v(" "),_("h4",{attrs:{id:"连接返回码-connect-return-code"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连接返回码-connect-return-code"}},[t._v("#")]),t._v(" 连接返回码 Connect Return code")]),t._v(" "),_("p",[t._v("**位置：**可变报头的第2个字节。")]),t._v(" "),_("p",[t._v("连接返回码字段使用一个字节的无符号值，在 "),_("a",{attrs:{href:"#_%E8%A1%A8%E6%A0%BC_3.1_%E2%80%93%E8%BF%9E%E6%8E%A5%E8%BF%94%E5%9B%9E%E7%A0%81%E7%9A%84%E5%80%BC"}},[t._v("表格 3.1 –连接返回码的值")]),t._v(" 中列出。如果服务端收到一个合法的CONNECT报文，但出于某些原因无法处理它，服务端应该尝试发送一个包含非零返回码（表格中的某一个）的CONNACK报文。如果服务端发送了一个包含非零返回码的CONNACK报文，那么它"),_("strong",[t._v("必须")]),t._v("关闭网络连接 [MQTT-3.2.2-5].。")]),t._v(" "),_("h5",{attrs:{id:"表格-3-1-连接返回码的值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#表格-3-1-连接返回码的值"}},[t._v("#")]),t._v(" 表格 3.1 –连接返回码的值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("值")])]),t._v(" "),_("th",[_("strong",[t._v("返回码响应")])]),t._v(" "),_("th",[_("strong",[t._v("描述")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("0x00连接已接受")]),t._v(" "),_("td",[t._v("连接已被服务端接受")])]),t._v(" "),_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("0x01连接已拒绝，不支持的协议版本")]),t._v(" "),_("td",[t._v("服务端不支持客户端请求的MQTT协议级别")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("0x02连接已拒绝，不合格的客户端标识符")]),t._v(" "),_("td",[t._v("客户端标识符是正确的UTF-8编码，但服务端不允许使用")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("0x03连接已拒绝，服务端不可用")]),t._v(" "),_("td",[t._v("网络连接已建立，但MQTT服务不可用")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("0x04连接已拒绝，无效的用户名或密码")]),t._v(" "),_("td",[t._v("用户名或密码的数据格式无效")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("0x05连接已拒绝，未授权")]),t._v(" "),_("td",[t._v("客户端未被授权连接到此服务器")])]),t._v(" "),_("tr",[_("td",[t._v("6-255")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("保留")])])])]),t._v(" "),_("p",[t._v("如果认为上表中的所有连接返回码都不太合适，那么服务端"),_("strong",[t._v("必须")]),t._v("关闭网络连接，不需要发送CONNACK报文 [MQTT-3.2.2-6]。")]),t._v(" "),_("h3",{attrs:{id:"_3-2-3-有效载荷"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-有效载荷"}},[t._v("#")]),t._v(" 3.2.3 有效载荷")]),t._v(" "),_("p",[t._v("CONNACK报文没有有效载荷。")]),t._v(" "),_("h3",{attrs:{id:"第三章目录-mqtt控制报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三章目录-mqtt控制报文"}},[t._v("#")]),t._v(" 第三章目录 MQTT控制报文")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/03-ControlPackets.html"}},[t._v("3.0 Contents – MQTT控制报文")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0301-CONNECT.html"}},[t._v("3.1 CONNECT – 连接服务端")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0302-CONNACK.html"}},[t._v("3.2 CONNACK – 确认连接请求")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0303-PUBLISH.html"}},[t._v("3.3 PUBLISH – 发布消息")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0304-PUBACK.html"}},[t._v("3.4 PUBACK –发布确认")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0305-PUBREC.html"}},[t._v("3.5 PUBREC – 发布收到（QoS 2，第一步）")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0306-PUBREL.html"}},[t._v("3.6 PUBREL – 发布释放（QoS 2，第二步）")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0307-PUBCOMP.html"}},[t._v("3.7 PUBCOMP – 发布完成（QoS 2，第三步）")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0308-SUBSCRIBE.html"}},[t._v("3.8 SUBSCRIBE - 订阅主题")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0309-SUBACK.html"}},[t._v("3.9 SUBACK – 订阅确认")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0310-UNSUBSCRIBE.html"}},[t._v("3.10 UNSUBSCRIBE –取消订阅")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0311-UNSUBACK.html"}},[t._v("3.11 UNSUBACK – 取消订阅确认")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0312-PINGREQ.html"}},[t._v("3.12 PINGREQ – 心跳请求")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0313-PINGRESP.html"}},[t._v("3.13 PINGRESP – 心跳响应")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/views/mqtt/0314-DISCONNECT.html"}},[t._v("3.14 DISCONNECT –断开连接")])],1)]),t._v(" "),_("h3",{attrs:{id:"项目主页"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目主页"}},[t._v("#")]),t._v(" 项目主页")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://github.com/mcxiaoke/mqtt",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT协议中文版"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=e.exports}}]);