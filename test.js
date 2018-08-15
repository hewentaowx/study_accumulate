const redis = require('redis');

const client = redis.createClient('6379', '127.0.0.1');
client.on('connect', () => {
	console.log('aa');
});

// const client1 = redis.createClient('6379', '127.0.0.1', {
// 	auth_pass: 'admin123',
// });
const client1 = redis.createClient('6379', '127.0.0.1');
client1.on('message', (channel, message) => {
	console.log('普通订阅来自' + channel + '的信息：' + message);
	if (message === 'demo') {
		client.publish('demo', 'demo msg');
	}
	if (message === 'quit1') {
		client1.unsubscribe('channel');
		console.log('普通订阅操作已经取消');
	}
});

// const client2 = redis.createClient('6379', '127.0.0.1', {
// 	auth_pass: 'admin123',
// });
const client2 = redis.createClient('6379', '127.0.0.1');
client2.on('connect', () => {
	client2.punsubscribe('channel*');
});
client2.on('pmessage', (p, channel, message) => {
	console.log('批量订阅来自' + channel + '的信息:' + message);
	if (message === 'quit2') {
		client2.punsubscribe('channel*');
		console.log('批量订阅操作取消');
	}
});
