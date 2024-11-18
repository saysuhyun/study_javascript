/**
 * 
 *연산자 

 산술 연산자
 1) 덧셈
 2) 뺄셈
 3) 곱셈
 4, 나눗셈
 5. 나머지 
 */

console.log(10 + 10);
console.log(10 - 10)
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 3);

/**
 * 증가와 감사 
 */

let num = 1;
num++;
console.log(num);
num--;
console.log(num);

/**
 * 연산자 위치 
 */

let reuslt = 1;
console.log(resut);

// num값을 먼저 저장해버림 num은 그 후 ++ 되어서 1증가
reuslt = num++;
console.log(result, num);

result = ++num;
console.log(result, num);


/**
 * 숫자 타입이 아닌 + , -
 */

let sample = '99';
console.log(+sample);
console.log(typeof sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof sample);
// 보면 + , - 랑 같이 쓰는 경우 Number로 취급당함 

sample = '안유진';
console.log(+sample); // Nan 숫자가 아님 

sample = '99';
console.log(-sample)

/**
 * 할당 연산자
 * += , -=, *= , %= , /=
 */
let number = 10;
number += 10;
console.log(number)

/**
 * 비교 연산자 
 * 1) 값의 비교 
 * 2) 값과 타입의 비교 
 * 
 *  */

console.log(5 == 5);
console.log(5 == '5'); // true 변환하면 숫자 5니까 
console.log(0 == '0') // ture   

// 값 , 타입의 비교 
console.log(5 === 5);
console.log(5 === '5'); // false 

/**
 * 삼항 조건 연산자
 */

console.log(10 > 0 ? 'test' : '0');


/** 논리 연산자
 *  && 
 * ||
 */

console.log(true && true); // true
console.log(ture || false);; //true

/**
 * 단축평가 
 * && 를 쓸 때 좌축이 true 면 우측값 반환 
 * && 를 쓸  때 좌측이 false면 좌측값 변환
 * || 를 쓸 때 좌축이 true면 좌측값 반환 
 * || 를 쓸 때 좌측인 flase면 우측값 반환 
 */

console.log('-------------');
console.log(true || '아이브')
console.log(false || '아이브');
console.log(false && '아이브');
console.log(treu && '아이브');

console.log(true && true && '아이브') // false 

/**
 * 지수연산자 
 */

console.log(2 ** 2);//4

/** 
 * null 연산자 
 */

let name;
console.log(name); // undeifend

name = name ?? '코팩'; // ?? 좌측값이 null이나 undefined인 경우 우측값 반환
console.log(name); // 코팩

