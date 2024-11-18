/**
 * 타입 변환 
 * 
 * 1) 명시적 
 * 2) 암묵적 
 */


let age = 32; // Number

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); // 982로 나옴 string에서 + 있음 문자 변환 
console.log('98' * 2); // 196 string에서는 *가 없으니까 숫자 변환
console.log('98' - 2); // 96 string에서는 -가 없으니까 숫자변환

// 위에 처럼 작성하면 뒤통수 맞는다


/**
 * 명시적 변환 더 
 */

console.log(typeof (99).toString()); // 문자
console.log(typeof (ture).toString); // 문자

console.log(typeof parseInt('0'), parseInt('0')); // 숫자
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // 숫자


/**
 * Boolean 타입 변환
 * 
 * 뭔가 값이 없으면 false
 * 뭔가 값이 있으면 true
 */

console.log(!'x'); // false 문자열 기준 ''에 값이 있으면 true임
console.log(!!'x'); // true
console.log(!!''); // false 값이 없으니까
console.log(!!false); // false

console.log(!!{}) // 오브젝트는 무조건 참 . 배열도 같음 

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우 
 * 3) 0
 * 모두 false를 반환한다
 */
