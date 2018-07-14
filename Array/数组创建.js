/**
 * 数组的创建方式
 * 1.用Array的构造函数来创建数组但是不推荐
 * 2.直接定义为[]
 */
// 创建一个长度为12的数组但是值都为 undefined
const arr = new Array(12);
console.log(arr);

// 推荐这种方式
const arr1 = [ 1, 2, 3 ];
console.log(arr1);

// 数组的长度可以读取也可设置
const arr2 = [ 1, 2, 3 ];
arr2.length; // 3
arr2.length = 0; // []
console.log(arr2);
