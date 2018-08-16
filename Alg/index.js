/**
 * 字符的左右移动
 * eg： 给定字符串 将字母都移到最左边其他的都在最右边而且顺序不变
 */
// 给定的字符串
const str = 'ab%c$de@f*ll';

const reStr = str.split('');
let flag = 0;

for (let i = reStr.length - 1; i >= 0; i--) {
	if (reStr[i] === '%' || reStr[i] === '*' || reStr[i] === '@' || reStr[i] === '$') {
		flag++;
	} else {
		if (flag === 0) {
			continue;
		} else {
			reStr[i + flag] = reStr[i];
			reStr[i] = '*';
		}
	}
}

console.log(reStr.join(''));
