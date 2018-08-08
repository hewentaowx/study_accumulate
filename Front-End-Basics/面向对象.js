/**
 * 对象是js的一种数据类型可以看成是属性的无序集合
 */
// 创建对象 直接使用对象直接量
const book = {
	'main title': 'JS', // 属性里有空格必须加引号
	'sub-title': 'JS', // 属性里有连字符必须加引号
	author: {
		firstname: 'name',
		lastername: 'name',
	},
};

// 通过new创建对象 new是一元运算符
// const obj = new Object();

// 原型prototype
// 每一个js对象 null除外都和另一个对象相关联这个对象就是原型每一个对象都从原型继承属性

// Object.create()
const obj = Object.create(null); // {}  不会继承任何属性和方法
console.log(obj);

const obj1 = Object.create(Object.prototype);
console.log(obj1); // {}

// 对象属性的获取和设置 可以通过点或方括号来获取和设置属性的值
const author = book.author;
const title = book['main title'];

// 删除属性 delete运算符可以删除对象的属性但是至少断开属性和宿主对象的联系 不会去操作属性中的属性
// 如果删除的属性是个对象那么这个对象的引用还是存在的 而且delete只能删除自有属性不能删除继承属性
const a = { b: { c: 1 } };
const b = a.b;
console.log(b.c); // 1
console.log(a.b); // {c: 1}
delete a.b;
console.log(b.c); // 1
console.log(a.b); // undefined

// delete除了不能删除继承的属性还不能删除配置为false的属性
const d = {};
Object.defineProperty(d, 'name', {
	value: 1,
	configurable: false,
});
console.log(d.name); // 1
console.log(delete d.name); // false
console.log(delete Object.prototype); // false

// 检测属性 in 运算符 in左侧是属性名 右侧是对象
const obj2 = { b: 1 };
// console.log('a' in window); // true  'a'是window的全局属性
console.log('b' in obj2); // ture
console.log('toString' in obj2); // true
console.log('c' in obj2); // false

// hasOwnProperty 对象的hasOwnProperty()方法用来检测给定的名字是否是对象的自有属性 对于继承属性它将返回false
const obj3 = { b: 1 };
console.log(obj3.hasOwnProperty('b')); // true
console.log(obj3.hasOwnProperty('c')); // false
console.log(obj3.hasOwnProperty('toString')); // false toString是继承属性

// propertyIsEnumerable 该方法只有检测到时自身属性(不包括继承的属性)且这个属性的可枚举性为true的时候才返回true
const obj4 = { b: 1 };
console.log(obj4.propertyIsEnumerable('b')); // true
console.log(obj4.propertyIsEnumerable('toString')); // false toString是继承属性

// 包装对象 使用原始类型的值(string number boolean)在调用对应属性和方法的时候内部会自动转成对应的对象 隐式创建的这个对象就成为包装对象
// 基本类型都有自己对应的包装对象 String Number Boolean
// 特点：隐式创建对象后可以调用对应的属性和方法 使用后立马销毁 所以不能给原始类型的值添加属性和方法
// 过程为 str.substring -->> new String(1234) -->> 找到String的substring -->> 将new String销毁

// FIXME: 对象方法和属性的汇总
// Object静态方法
Object.assign();
Object.create();
Object.defineProperties();
Object.defineProperty();
Object.entries();
Object.preventExtensions();
Object.isExtensible();
Object.seal();
Object.isSealed();
Object.freeze();
Object.isFrozen();
Object.keys();
Object.values();
Object.getPrototypeOf();
Object.getOwnPropertyNames();
Object.getOwnPropertyDescriptor();
Object.getOwnPropertyDescriptors();

// Object的实例方法(定义在Object.prototype上的)
Object.prototype.hasOwnProperty();
Object.prototype.isPrototypeOf();
Object.prototype.propertyIsEnumerable();
Object.prototype.toString();
Object.prototype.valueOf();

