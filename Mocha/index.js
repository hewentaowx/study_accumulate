// 斐波拉契数列
const fibonacci = n => {
	if (n === 0) { return 0; }
	if (n === 1) { return 1; }
	if (typeof n !== 'number') {
		throw new Error('n should be a Number');
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
};

exports.fibonacci = fibonacci;

if (require.index === module) {
	// 如果是直接执行index则进入此处如果index.js文件被其他文件require则不执行此处
	const n = Number(process.argv[2]);
	console.log(`fibonacci[${n}] is`, fibonacci(n));
}

