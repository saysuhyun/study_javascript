/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                  설정할때 호출되는 함수로 구성된 프로퍼티
 *                  예를들면 getter와 setter
 */
const yuJin = {
    name: '안유진',
    year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
//{ value: 2003, writable: true, enumerable: true, configurable: true }
// 클래스에 붙어있으니까 static 함수네 ~ yujin객체의 year이라는 프로퍼티 정보를 반환

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을
 *               수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용 할 수 있으면
 *                 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false 일 경우 프로퍼티 삭제나 어트리뷰트
 *                   변경이 금지된다. 단, writable이 true인 경우
 *                   값 변경과 writable을 변경하는건 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));

console.log(Object.getOwnPropertyDescriptors(yuJin));
//getOwnPropertyDescriptors인 경우 모든 프로퍼티 반환

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin2); //{ name: '안유진', year: 2003, age: [Getter/Setter] }
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));
/**
 * {
  get: [Function: get age],
  set: [Function: set age],
  enumerable: true,
  configurable: true
}
 */

// 프로퍼티 재정의 
Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
})
console.log(yuJin2); //{ name: '안유진', year: 1992, age: [Getter/Setter], height: 172 }
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); //{ value: 172, writable: true, enumerable: true, configurable: true }

yuJin2.height = 180;
console.log(yuJin2);

/**
 * Writable
 */
Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log('-------------');
yuJin2.height = 172; // 재정의 불가! 
console.log(yuJin2);

/**
 * Enumerable
 */
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
    console.log(key);
}

Object.defineProperty(yuJin2, 'name', {
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
//{ value: '안유진', writable: true, enumerable: false, configurable: true }
console.log('-------------');
console.log(Object.keys(yuJin2)); // 여기서도 name 안나옴 //[ 'year', 'age', 'height' ]
for (let key in yuJin2) {
    console.log(key);
}//name 프로퍼티가 for문에서 안나옴
console.log(yuJin2);
console.log(yuJin2.name); // 존재는 하지만 열거 즉 반복문 형태로 처리가 안 됨

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false,
// });

Object.defineProperty(yuJin2, 'height', {
    value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
//
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height', {
    writable: true,
});