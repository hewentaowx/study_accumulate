/**
 * 八皇后算法问题
 * @param {int} boarderSize 棋数
 * @return {array} 二位数组
 */
const queens = boarderSize => {
	// 利用递归生成一个start到end的数组
	const interval = (start, end) => {
		if (start > end) { return []; }
		return interval(start, end - 1).concat(end);
	};

	// 检查一个组合是否是有效组合
	const isValid = queenCol => {
		// 检查两个位置是否有冲突
		const isSafe = (point1, point2) => {
			const slope = (point1.row - point2.row) / (point1.col - point2.col);
			if ((slope === 0) || (slope === 1) || (slope === -1)) { return false; }
			return true;
		};
		const len = queenCol.length;
		const pointToCompare = {
			row: queenCol[len - 1],
			col: len,
		};

		// 先slice出除了最后一列的数组然后依次测试每列的点和待测点是否有冲突最后合并测试结果
		return queenCol
			.slice(0, len - 1)
			.map((row, index) => {
				return isSafe({ row, col: index + 1 }, pointToCompare);
			})
			.reduce((a, b) => {
				return a && b;
			});
	};

	// 递归去一列一列生成符合规则的组合
	const queenCols = size => {
		if (size === 1) {
			return interval(1, boarderSize).map(i => { return [ i ]; });
		}

		// 先把之前所有符合规则的列组成的集合再扩展一列，然后用reduce降维，最后用isValid过滤掉不符合规则的组合
		return queenCols(size - 1)
			.map(queenCol => {
				return interval(1, boarderSize).map(row => {
					return queenCol.concat(row);
				});
			})
			.reduce((a, b) => {
				return a.concat(b);
			})
			.filter(isValid);
	};

	return queenCols(boarderSize);
};

console.log(queens(8));
console.log(queens(8).length);
