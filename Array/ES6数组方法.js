/**
 * form方法 将类数组对象和可遍历对象转为真数组
 * Array.form(array, fn)
 * @param {Array} arr为类数组或集合
 * @param {Function} fn函数作用类似map方法
 */
const arr1 = {
	0: 'a',
	1: 'b',
	2: 'c',
	length: 3,
};
const result1 = [].slice.call(arr1); // es5
console.log(result1);
const result2 = Array.from(arr1); // es6
console.log(result2);

/**
 * Array.of(value)方法 将一组值转换为数组弥补因参数个数不同结果不同的不足
 */
console.log(Array(3)); // [ <3 empty items> ]
console.log(Array.of(3)); // [3]

/**
 * Array.fill(value, start, end) 使用给定的value填充一个数组
 */
console.log([ 1, 2, 3 ].fill(5));
console.log([ 1, 2, 3 ].fill(5, 1, 2));
