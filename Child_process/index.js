// Demo1
// const { spawn } = require('child_process');
// const ls = spawn('ls', [ '-lh', '/usr' ]);

// ls.stdout.on('data', data => {
// 	console.log(`输出：${data}`);
// });

// ls.stderr.on('data', data => {
// 	console.log(`错误：${data}`);
// });

// ls.on('close', code => {
// 	console.log(`子进程退出：${code}`);
// });

// Demo2
const { spawn } = require('child_process');
const ps = spawn('ps', [ 'ax' ]);
const grep = spawn('grep', [ 'ssh' ]);

ps.stdout.on('data', data => {
	grep.stdin.write(data);
});

ps.stderr.on('data', data => {
	console.log(`ps stderr: ${data}`);
});

ps.on('close', code => {
	if (code !== 0) {
		console.log(`ps 进程退出: ${code}`);
	}
	grep.stdin.end();
});

grep.stdout.on('data', data => {
	console.log(data.toString());
});

grep.stderr.on('data', data => {
	console.log(`grep stderr: ${data}`);
});

grep.on('close', code => {
	if (code !== 0) {
		console.log(`grep 进程退出: ${code}`);
	}
});
