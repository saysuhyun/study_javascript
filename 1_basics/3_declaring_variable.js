/**
 * 변수 선언하기 
 * 
 * 1) var - 더 이상 안 씀
 * 2) let - 
 * 3) const - 
 */

var name = '코드팩토리';
console.log(name)

var age = 32;
console.log(age);

let ive = '아이브'
console.log(ive);

/**
 * let과 var로 선언시 
 * 값을 추후 변경 가능
 */

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// const 변수 사용한 거 변경시 에러발생 상수인듯  
// newJeans = '코팩';

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것 
 * 2) 변수에 값을 할당하는 것  아무것도 할당 안 하면 undefined 
 */

var name = '코팩';
console.log(name);

let girlFriend;
console.log(girlFriend); // 출력 undefined  할당이 되지 않았으니까 

