// 创建一个长度为 10 并且用 0 填充的Buffer 分配内存并对旧数据进行覆盖
const buf1 = Buffer.alloc(10);
console.log('buf1-->>', buf1);

// 创建一个长度为 10 并且用 0x1 填充的Buffer
const buf2 = Buffer.alloc(10, 1);
console.log('buf2--->>>', buf2);

const arr = [ 1, 2, 3 ];
console.log(Buffer.from(arr));

// Buffer与字符编码
const buf3 = Buffer.from('hello, world', 'ascii');
console.log('buf3--->>>', buf3.toString('hex'));

// Buffer与iteration
const buf4 = Buffer.from([ 1, 2, 3 ]);
for (const a of buf4) {
	console.log(a);
}

// Buffer.compare(buf1, buf2)
const buf5 = Buffer.from('1234');
const buf6 = Buffer.from('0123');
const arr1 = [ buf5, buf6 ];
console.log(arr1.sort(Buffer.compare));

// Buffer.concat(list[, totalLength])
const buf7 = Buffer.alloc(3, 1);
const buf8 = Buffer.alloc(2, 2);
const buf9 = Buffer.alloc(4, 5);
const totalLength = buf7.length + buf8.length + buf9.length;
console.log(Buffer.concat([ buf7, buf8, buf9 ], totalLength));

// Buffer.isBuffer(obj)
const obj = Buffer.from('a');
console.log(Buffer.isBuffer(obj));

// Buffer.isEncoding(encoding)
const encoding = 'ascii';
console.log(Buffer.isEncoding(encoding));
