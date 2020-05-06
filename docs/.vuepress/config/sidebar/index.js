//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: 'Java基础',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            children: [
                'java/object-oriented-and-process-oriented',
                'java/only-call-value-in-java',
                'java/enum',
                'java/auto-boxing',
            ]
        },
        {
            title: 'NodeJS',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            children: [
                'nodejs/introduction',
                'nodejs/why-node',
                'nodejs/global',
                'nodejs/common-js',
                'nodejs/npm'
            ]
        }, {
            title: 'JavaScript',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            children: [
                'javascript/why-single-thread',
                'javascript/execution-context',
                'javascript/execution-stack-and-event-queue',
            ]
        }, {
            title: 'MQTT',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            children: [
                'mqtt/00-Contents',
                'mqtt/00-Preface',
                'mqtt/01-Introduction',
                'mqtt/02-ControlPacketFormat',
                'mqtt/03-ControlPackets',
                'mqtt/0301-CONNECT',
                'mqtt/0302-CONNACK',
                'mqtt/0303-PUBLISH',
                'mqtt/0304-PUBACK',
                'mqtt/0305-PUBREC',
                'mqtt/0306-PUBREL',
                'mqtt/0307-PUBCOMP',
                'mqtt/0308-SUBSCRIBE',
                'mqtt/0309-SUBACK',
                'mqtt/0310-UNSUBSCRIBE',
                'mqtt/0311-UNSUBACK',
                'mqtt/0312-PINGREQ',
                'mqtt/0313-PINGRESP',
                'mqtt/0314-DISCONNECT',
                'mqtt/04-OperationalBehavior',
                'mqtt/05-Security',
                'mqtt/06-WebSocket',
                'mqtt/07-Conformance',
                'mqtt/08-AppendixB'
            ]
        }

    ]
}
