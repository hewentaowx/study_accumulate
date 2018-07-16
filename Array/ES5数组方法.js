/**
 * foreach方法 遍历数组为每个元素调用指定函数
 * FIXME: 该方法不会在没有遍历完所有元素之前停止
 * @param {Array}
 * @return {Array} new_array
 */
const arr9 = [ 1, 2, 3, 4, 5 ];
arr9.forEach((item, index, arr) => {
	arr[index] = item + 1;
});
console.log(arr9); // [2, 3, 4, 5, 6]

/**
 * map方法 将数组每个元素传递给指定函数
 * @param {Array
 * @return {Array} 返回一个新数组不改变原数组
 */
const arr10 = [ 1, 2, 3, 4, 5 ];
const result1 = arr10.map(item => {
	return item * item;
});
console.log(result1);
console.log(arr10);

/**
 * filter方法 返回过滤后数组的一部分
 * @param {Array}
 * @return {Array} new_array
 */
let arr11 = [ 1, 2, undefined, 4, null ];
arr11 = arr11.filter(item => {
	return item !== undefined && item !== null;
});
console.log(arr11); // [1, 2, 4]

/**
 * every方法 对所有元素应用指定函数进行检测 所有元素满足条件返回true否则false
 * @param {Array}
 * @return {Boolean}
 */
const arr12 = [ 1, 2, 3, 4, 5 ];
const result2 = arr12.every(item => {
	return item < 9;
});
console.log(result2); // true

/**
 * some方法 对数组元素应用指定函数进行检测 有一个元素满足则返回true
 * @param {Array}
 * @return {Boolean}
 */
const arr13 = [ 1, 2, 3 ];
const result3 = arr13.some(item => {
	return item < 2;
});
console.log(result3);

/**
 * reduce方法 使用指定函数将数组进行组合返回一个值(从左到右)
 * Array.reduce(fn, value)
 * @param {Array}
 * @return {Object}
 */
const arr14 = [ 1, 2, 3, 4 ];
const result4 = arr14.reduce((p, c) => {
	return p + c;
}, 0);
const result5 = arr14.reduce((p, c) => {
	return (p > c) ? p : c;
});
console.log(result4);
console.log(result5);

/**
 * reduceRight方法 使用指定函数将数组进行组合返回一个值(从右往左)
 * @param {Array}
 * @return {Object}
 */
const arr15 = [ 1, 2, 3, 4, 5 ];
const result6 = arr15.reduceRight(item => {
	console.log('item--->>', item);
	return item + item;
});
console.log(result6); // 80

