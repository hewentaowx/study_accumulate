## 事件监听

```javascript
const eventEmitter = require('events').EventEmitter
const event = new eventEmitter()

event.on('aa', () => {
	console.log('事件被触发')
	(function() {
		console.log('自执行函数')
	}())
})

setTimeout(() => {
	event.emit('aa')
}, 2000)

// 监听器1
const listener1 = () => {
	console.log('监听器1执行')
}

// 监听器2
const listener2 = () => {
	console.log('监听器2执行')
}

// 绑定事件 处理函数
event.addListener('connection', listener1)
event.on('connection', listener2)

let eventListeners = eventEmitter.listenerCount(event, 'connection')
console.log(eventListeners + '个监听器连接事件')

// 处理connection事件
event.emit('connection')

// 移除监听绑定的listener1函数
event.removeListener('connection', listener1)
console.log('listener1 不再受监听')

// 触发连接事件
event.emit('connection')
eventListeners = eventEmitter.listenerCount(event, 'connection')
console.log(eventListeners + '个监听器连接事件')
console.log('程序执行完毕')

```