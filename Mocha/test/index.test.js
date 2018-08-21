const should = require('should');
const index = require('../index');

describe('test/index.test.js', () => {
	it('shoud equal 0 when n === 0', () => {
		index.fibonacci(0).should.equal(0);
	});

	it('should equal 1 when n === 1', () => {
		index.fibonacci(1).should.equal(1);
	});

	it('should equal 89 when n === 11', () => {
		index.fibonacci(11).should.equal(89);
	});

	it('should throw when n isnt Number', () => {
		(() => {
			index.fibonacci('哈哈');
		}).should.throw('n should be a Number');
	});
});
