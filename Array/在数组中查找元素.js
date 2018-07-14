/**
 * 在数组中查找给定元素(从左往右找)
 * @param {Object} value 要查找的值
 * @param {Object} index 从第index位开始查找 负数代表相对数组末尾的偏移量
 */
const arr = [ 'a', 'b', 'c', 'd', 'a', 'a' ];
console.log(arr.indexOf('d')); // 3
console.log(arr.indexOf('b', 1)); // 1
console.log(arr.indexOf('c', -5)); // 2

// 查找数组中所有的 x 并返回其下标
const findAll = (x, arr) => {
	const results = [];
	arr.reduce((r, c, i) => {
		return (x === c) ? results.push(i) : [];
	}, []);
	return results;
};

console.log(findAll('a', arr));

/**
 * 在数组中查找指定的元素(从右往左找)
 * @param {Object} value 要查找的值
 * @param {Object} index 从第index位开始查找 负数代表相对数组末尾的偏移量
 */
const new_arr = [ 1, 1, 3, 4, 5, 1, 2, 3 ];
console.log(new_arr.lastIndexOf()); // -1
console.log(new_arr.lastIndexOf(1)); // 5
console.log(new_arr.lastIndexOf(3, 1)); // -1
console.log(new_arr.lastIndexOf(3, -11));
console.log(new_arr.lastIndexOf(3, 8)); // 7

// 将数组中出现的每一个元素的个数打印出来
const elementNums = arr => {
	const map = {};
	for (let i = 0; i < arr.length; i++) {
		if (map[arr[i]]) {
			++map[arr[i]];
		} else {
			map[arr[i]] = 1;
		}
	}
	return map;
};

// 用reduce实现
const elementNums1 = arr => {
	const map = {};
	arr.reduce((r, c) => {
		if (map[c]) {
			++map[c];
		} else {
			map[c] = 1;
		}
		return map;
	}, []);
	return map;
};

console.log(JSON.stringify(elementNums(new_arr)));
console.log(JSON.stringify(elementNums1(new_arr)));
