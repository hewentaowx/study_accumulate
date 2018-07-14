/**
 * 将数组转换为字符串
 * @param {Object} value 数组元素之间的连接符 省略的时候默认为 ,
 * @return {String} 返回一个用value衔接起来的字符串
 */
const arr = [ 1, 2, 3 ];
console.log(arr.join(','));
console.log(arr.join(' '));

/**
 * 拼接数组
 * @param {Object} value 可以是一个元素或者是一个数组
 * @return {Array} FIXME: 一个衔接value的新数组不会修改原有调用的数组
 */
const arr1 = [ 1, 2, 3 ];
console.log(arr1.concat(4, 5));
console.log(arr1.concat([ 4, 5 ]));
console.log(arr1.concat([ 4, [ 5, [ 6, 7 ]]]));
console.log(arr1);

/**
 * 数组添加元素
 * @param {Object} value 要添加的元素
 * @return {Number} 返回新数组的长度
 */
// push 向队尾添加
const arr2 = [ 1, 2, 3 ];
console.log(arr2.push(4));

// unshift 向队首添加
console.log(arr2.unshift(5));
console.log(arr2); // 5,1,2,3,4

/**
 * 数组删除元素
 * @param {Object} value 要删除的元素
 * @return {Object} 返回删除的数据
 */
const arr3 = [ 1, 2, 3, 4, [ 5, 6 ]];

// pop 删除数组最后一个元素
console.log(arr3.pop()); // [5, 6]

// shift 删除数组第一个元素
console.log(arr3.shift()); // 1
console.log(arr3); // [2, 3, 4]

/**
 * 截取数组一部分
 * @param {Object} start 开始的index
 * @param {Object} end 不传默认为最后一位 负数从数组尾部开始计算  -1 表示最后一位 -2 表示倒数第二位
 * @return {Array} 返回截取的start到end之间的新数组 不影响原数组
 */
// [start, end)
const arr4 = [ 1, 2, 3, 4, 5 ];
console.log(arr4.slice(0, 3)); // [1,2,3]
console.log(arr4.slice(1, -1)); // [2,3,4]
console.log(arr4.slice(-4, -3)); // [2]
console.log(arr4.slice(3, 0)); // [] 截取不到就返回空数组

/**
 * 添加删除替换数组元素
 * @param {Object} start
 * @return {Array} 返回一个新数组不影响原数组
 */
