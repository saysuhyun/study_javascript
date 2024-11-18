/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value
 * 2) 객체는 copy by referce
 */

let original = 'hello';
let clone = original;

console.log(original, clone);

clone += ' 안유진 입니다. ';
console.log('-----------');
console.log(original);
console.log(clone); // 값만 가지고 와서 새로 할당했기에 원본에 영향 없다


let originalObj = {
    name: '안유진',
    group: '아이브',
}
let cloneObj = originalObj;
console.log(originalObj);
console.log(cloneObj);
console.log('----------------');

originalObj['group'] = '코드';
console.log(originalObj); // 참조라 원본에도 영향이 있음
console.log(cloneObj);

console.log(originalObj === cloneObj); // true
console.log(original === clone); // false

// spread operator
const cloneObj2 = {
    ...cloneObj
}
console.log(cloneObj2);
console.log(cloneObj === cloneObj2); // false 실제 값은 같지만 새로 할당된 것임 

const cloneObj3 = {
    year: 2003,
    ...cloneObj,
}
console.log(cloneObj3);

const cloneObj4 = {
    name: '코드',
    ...cloneObj,
}
console.log(cloneObj4);

const cloneObj5 = {
    ...cloneObj,
    name: '코드',
}
console.log(cloneObj5);

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10
]; // 순서에 따라서 스프레드 연산자 앞 뒤로 값이 추가
console.log(numbers2)

