/**
 * 闭包问题
 * @param {Object} n anything
 * @param {Object} o anything
 * @return {Function} function
 */
function fun(n, o) {
	console.log(o);
	return {
		fun(m) {
			return fun(m, n);
		},
	};
}
const a = fun(0);
a.fun(1); a.fun(2); a.fun(3);// undefined,?,?,?

const b = fun(0)
	.fun(1)
	.fun(2)
	.fun(3);// undefined,?,?,?

const c = fun(0).fun(1); c.fun(2);
c.fun(3);// undefined,?,?,?
