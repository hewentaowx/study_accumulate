const cluster = require('cluster');
const http = require('http');
const cpus = require('os').cpus().length;

if (cluster.isMaster) {
	console.log(`主进程 ${process.pid} 正在运行`);

	// 衍生工作进程
	for (let i = 0; i < cpus; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`工作进程 ${worker.process.pid} 已退出`);
	});
} else {
	// 工作进程可以共享任何TCP进程 本demo中是http服务器
	http.createServer((req, res) => {
		res.writeHead(200);
		res.end('hello, world \n');
	}).listen(3000);

	console.log(`工作进程 ${process.pid} 已启动`);
}

