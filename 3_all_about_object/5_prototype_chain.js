/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__); //[Object: null prototype] {}

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype); //{}

// console.dir(IdolModel.prototype, {
//     showHidden: true,
// });

// circular reference 순환참조
console.log(IdolModel.prototype.constructor === IdolModel); //true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); //true

const yuJin = new IdolModel('안유진', 2003);

console.log(yuJin.__proto__); // 모든 객체에 존재하는 프로퍼티 // {} 
console.log(yuJin.__proto__ === IdolModel.prototype); // true

console.log(testObj.__proto__ === Object.prototype); // true

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

console.log(yuJin.toString()); // toString 정의 안 했는데 있음 상속받음
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello); //false

console.log(yuJin2.hasOwnProperty('sayHello')); // 상속 받은건지 아님 고유인지 .. 이건 yujun2의 고유 프로퍼티

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

// 해당 idolModel3에 prototype에다가 정의 때려서 공유시키벼럼
IdolModel3.prototype.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello); //true 공유받은 거 사용 

console.log(yuJin3.hasOwnProperty('sayHello')); // false 위의 프로퍼티에서 쓰는 중

IdolModel3.sayStaticHello = function () {
    return '안녕하세요 저는 static method 입니다.';
}

console.log(IdolModel3.sayStaticHello());
// idolModel3에서의 프로토타입에서 sayStaticHello , sayHello가 추가되어있을듯

/**
 * Overriding
 */
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return '안녕하세요 저는 인스턴스 메서드입니다!';
    }
}

IdolModel4.prototype.sayHello = function () {
    return '안녕하세요 저는 prototype 메서드입니다!';
}

const yuJin4 = new IdolModel4('안유진', 2003);

// 프로퍼티 셰도잉 - class에서 override
// 오버라이딩 하려면 직접 선언해서 오버라이드 해서 쓰나보네 
// 상속받은 sayHello를 직접 클래스에서 오버라이딩해서 씀
console.log(yuJin4.sayHello()); //안녕하세요 저는 인스턴스 메서드입니다!

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function () {
    return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name}가 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // 오브젝트의 __proto__ 를 가지고 옴 

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// console.log(ray.sayHello());

Object.setPrototypeOf(ray, IdolModel.prototype); // ray의 __poroto__에다가 IdolModel의 프로토를 해서 상속대상을 바꿔버림
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel); // 프로토 바꿔서 이제부터는 Female아이돌 아님 
console.log(ray.constructor === IdolModel);
console.log(gaEul.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);