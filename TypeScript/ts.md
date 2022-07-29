## TypeScript学习资料
### 一：TypeScript定义
TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程

### 二：TypeScript基本类型
#### 2.1 Boolean类型
```typescript
const isDone: boolean = false;
```
#### 2.2 Number类型
```typescript
const count: number = 18;
```
#### 2.3 String类型
```typescript
const name: string = 'Nike';
```
#### 2.4 Array类型
```typescript
const list1: number[] = [1,2,3,4];
const list2: Array<number> = [1,2,3,4]; // Array泛型语法
```
#### 2.5 Enum类型
```typescript
enum Direction {
  NORTH,
  SOUTH,
  WEST
}
const dir: Direction = Direction.NORTH;
默认从0开始，也可以指定数字，string类型也是和上面一样定义
```
#### 2.6 Any类型
在ts中任何类型都可以归为Any类型，any类型成为了类型系统的顶级类型也就称为全局超级类型
```typescript
let notSure: any = false;
notSure = 18;
notSure = 'Mike';
```
#### 2.7 Unknown类型
```typescript
let value: unknown;

let value1: unknown = value; // OK
let value2: any = value; // OK
let value3: boolean = value; // Error
let value4: number = value; // Error
let value5: string = value; // Error
let value6: object = value; // Error
let value7: any[] = value; // Error
let value8: Function = value; // Error
```
#### 2.8 Tuple类型
数组一般由同种类型的值组成，但有时我们需要在单个变量中存储不同类型的值，这时候我们就可以使用元组。在 JavaScript 中是没有元组的，元组是 TypeScript 中特有的类型，其工作方式类似于数组。元组可用于定义具有有限数量的未命名属性的类型。每个属性都有一个关联的类型。使用元组时，必须提供每个属性的值。
```typescript
const tupleType: [string, boolean];
tupleType = ['Mike', true];
```
#### 2.9 Void类型
void某种形式上和any相反，表示没有任何类型。当一个函数没有返回值的时候返回值类型就是void
```typescript
function test(params: string): void {
  console.log(params);
}
```
#### 2.10 Null和Undefined类型
在ts中null和undefined有各自的类型
```typescript
const n: null = null;
const u: undefined = undefined;
```
#### 2.11 Never类型
never 类型表示的是那些永不存在的值的类型。 例如，never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {}
}
```
### 三：TypeScript断言
有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。
#### 3.1 尖括号语法
```typescript
const someValue: any = 'this is a string';
const strLength: number = (<string>someValue).length;
```
#### 3.2 as语法
```typescript
const someValue: any = 'this is a string';
const strLength: number = (someValue as string).length;
```
### 四：类型守卫
类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。换句话说，类型保护可以保证一个字符串是一个字符串，尽管它的值也可以是一个数值。类型保护与特性检测并不是完全不同，其主要思想是尝试检测属性、方法或原型，以确定如何处理值。目前主要有四种的方式来实现类型保护：
#### 4.1 in关键字
```typescript
interface Admin {
  name: string;
  privileges: string[];
}
interface Employee {
  name: string;
  startDate: Date;
}
type UnknownEmployee = Employee | Admin;
function test(emp: UnknownEmployee) {
  if ('privileges' in emp) {
    console.log(emp.privileges);
  }
  if ('startDate' in emp) {
    console.log(emp.startDate);
  }
}
```
#### 4.2 typeof关键字
typeof 类型保护只支持两种形式：typeof v === "typename" 和 typeof v !== typename，"typename" 必须是 "number"， "string"， "boolean" 或 "symbol"。 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。
```typescript
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
}
```
#### 4.3 instanceof 关键字
```typescript
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

let padder: Padder = new SpaceRepeatingPadder(6);

if (padder instanceof SpaceRepeatingPadder) {
  // padder的类型收窄为 'SpaceRepeatingPadder'
}
```
#### 4.4 自定义类型保护的类型谓词
```typescript
function isNumber(x: any): x is number {
  return typeof x === 'number';
}
function isString(x: any): x is string {
  return typeof x === 'string';
}
```
### 五：联合类型
#### 5.1 联合类型
联合类型通常与null或undefined一起使用
```typescript
const sayHello = (name: string | undefined) {
  // todo something
}
```
#### 5.2 可辨识联合
TypeScript 可辨识联合（Discriminated Unions）类型，也称为代数数据类型或标签联合类型。它包含 3 个要点：可辨识、联合类型和类型守卫。
这种类型的本质是结合联合类型和字面量类型的一种类型保护方法。如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。
#### 1.可辨识
可辨识要求联合类型中的每个元素都含有一个单例类型属性，比如：
```typescript
enum CarTransmission {
  Automatic = 200,
  Manual = 300
}

interface Motorcycle {
  vType: "motorcycle"; // discriminant
  make: number; // year
}

interface Car {
  vType: "car"; // discriminant
  transmission: CarTransmission
}

interface Truck {
  vType: "truck"; // discriminant
  capacity: number; // in tons
}
在上述代码中，我们分别定义了 Motorcycle、 Car 和 Truck 三个接口，在这些接口中都包含一个 vType 属性，该属性被称为可辨识的属性，而其它的属性只跟特性的接口相关。
```
#### 2.联合类型
基于前面定义了三个接口，我们可以创建一个 Vehicle 联合类型：
```typescript
type Vehicle = Motorcycle | Car | Truck;
```
#### 3.类型守卫
```typescript
const EVALUATION_FACTOR = Math.PI;
function evaluatePrice(vehicle: Vehicle) {
  switch(vehicle.vType) {
    case "car":
      return vehicle.transmission * EVALUATION_FACTOR;
    case "truck":
      return vehicle.capacity * EVALUATION_FACTOR;
    case "motorcycle":
      return vehicle.make * EVALUATION_FACTOR;
  }
}
```
#### 5.3类型别名
类型别名用来给一个类型起个新名字
```typescript
type Message = string | string[];
const greet = (message: Message) => {
  // todo something
}
```
### 六：交叉类型
TypeScript 交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
```typescript
interface IPerson {
  id: string;
  age: number;
}
interface IWorker {
  companyId: string;
}
type IStaff = IPerson & IWorker;
const staff: IStaff = {
  id: '111',
  age: 18,
  companyId: '2'
}
```
### 七：TypeScript数组
#### 7.1数组解构
```typescript
const x: number;
const y: number;
const z: number;
const arr = [1,2,3,4,5];
[x,y,z] = arr;
```
#### 7.2数组展开运算符

```typescript
const arr = [0, 1];
const arr1 = [...arr, 2, 3, 4];
```
#### 7.3数组遍历
```typescript
const arr: string[] = ['耐克', '阿迪达斯', '亚瑟士'];
for (let item of arr) {
  console.log(item);
}
```
### 八：TypeScript对象
#### 8.1对象解构
```typescript
const person = {
  name: 'Mike',
  age: 18
}
const { name, age } = person;
```
#### 8.2对象展开运算符
```typescript
const person = {
  name: 'Mike',
  age: 18,
  gender: '男'
}
const personWithAddress = { ...person, address: '湖北武汉' };
```
### 九：TypeScript接口
在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类去实现。TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
#### 9.1对象的形状
```typescript
interface Person {
  name: string;
  age: number;
}
const Mike: Person {
  name: 'Mike',
  age: 18
}
```
#### 9.2可选|只读属性
```typescript
interface Person {
  readonly name: string;
  age?: number;
}
只读属性用于限制只能在对象刚刚创建的时候修改其值。此外 TypeScript 还提供了 ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```
### 十：TypeScript泛型
软件工程中，我们不仅要创建一致的定义良好的 API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
在像 C# 和 Java 这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
设计泛型的关键目的是在成员之间提供有意义的约束，这些成员可以是：类的实例成员、类的方法、函数参数和函数返回值。
泛型（Generics）是允许同一个函数接受不同类型参数的一种模板。相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。
#### 10.1泛型接口
```typescript
interface GFn<T> {
  (arg: T): T
}
```
#### 10.2泛型类
```typescript
class GFn<T> {
  zero: T;
  add: (x: T, y: T) => T;
}
const fn = new GFn<number>();
fn.zero = 0;
fn.add = (x, y) => x + y;
```
#### 10.3泛型变量
```typescript
T（Type）：表示一个 TypeScript 类型
K（Key）：表示对象中的键类型
V（Value）：表示对象中的值类型
E（Element）：表示元素类型
```
#### 10.4泛型工具类型
为了方便开发者 TypeScript 内置了一些常用的工具类型，比如 Partial、Required、Readonly、Record 和 ReturnType 等
### 十一：TypeScript装饰器
#### 11.1装饰器的定义
它是一个表达式
该表达式被执行后，返回一个函数
函数的入参分别为 target、name 和 descriptor
执行该函数后，可能返回 descriptor 对象，用于配置 target 对象
#### 11.2装饰器的分类
类装饰器（Class decorators）
属性装饰器（Property decorators）
方法装饰器（Method decorators）
参数装饰器（Parameter decorators）
#### 11.3类装饰器
```typescript
declare type ClassDecorator = <TFunction extends Function>(
  target: TFunction
) => TFunction | void;
function Greeter(target: Function): void {
  target.prototype.greet = function (): void {
    console.log("Hello Semlinker!");
  };
}

@Greeter
class Greeting {
  constructor() {
    // 内部实现
  }
}

let myGreeting = new Greeting();
myGreeting.greet(); // console output: 'Hello Semlinker!';
```
#### 11.4属性装饰器
```typescript
declare type PropertyDecorator = (target:Object, propertyKey: string | symbol ) => void;

function logProperty(target: any, key: string) {
  delete target[key];
  const backingField = "_" + key;
  Object.defineProperty(target, backingField, {
    writable: true,
    enumerable: true,
    configurable: true
  });

  // property getter
  const getter = function (this: any) {
    const currVal = this[backingField];
    console.log(`Get: ${key} => ${currVal}`);
    return currVal;
  };

  // property setter
  const setter = function (this: any, newVal: any) {
    console.log(`Set: ${key} => ${newVal}`);
    this[backingField] = newVal;
  };

  // Create new property with getter and setter
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class Person {
  @logProperty
  public name: string;

  constructor(name : string) {
    this.name = name;
  }
}

const p1 = new Person("semlinker");
p1.name = "kakuqo";
```
#### 11.5方法装饰器
```typescript
declare type MethodDecorator = <T>(target:Object, propertyKey: string | symbol,
  descriptor: TypePropertyDescript<T>) => TypedPropertyDescriptor<T> | void;

function LogOutput(tarage: Function, key: string, descriptor: any) {
  let originalMethod = descriptor.value;
  let newMethod = function(...args: any[]): any {
    let result: any = originalMethod.apply(this, args);
    if(!this.loggedOutput) {
      this.loggedOutput = new Array<any>();
    }
    this.loggedOutput.push({
      method: key,
      parameters: args,
      output: result,
      timestamp: new Date()
    });
    return result;
  };
  descriptor.value = newMethod;
}

class Calculator {
  @LogOutput
  double (num: number): number {
    return num * 2;
  }
}

let calc = new Calculator();
calc.double(11);
// console ouput: [{method: "double", output: 22, ...}]
console.log(calc.loggedOutput);
```
#### 11.6参数装饰器
```typescript
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol,
  parameterIndex: number ) => void

function Log(target: Function, key: string, parameterIndex: number) {
  let functionLogged = key || target.prototype.constructor.name;
  console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has
	been decorated`);
}

class Greeter {
  greeting: string;
  constructor(@Log phrase: string) {
	this.greeting = phrase;
  }
}
// console output: The parameter in position 0
// at Greeter has been decorated
```
### 十二：编译上下文
#### 12.1 tsconfig.json的作用
用于标识TypeScript的根路径
用于配置TypeScript编译器
用于指定编译的文件
#### 12.2 tsconfig.json重要字段
files-设置要编译文件的名称
include-设置需要进行编译的文件，支持路径模式匹配
exclude-设置无需进行编译的文件，支持路径模式匹配
compilerOptions-设置与编译流程相关的选项
#### 12.3 compilerOptions 选项
```javascript
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}
```
