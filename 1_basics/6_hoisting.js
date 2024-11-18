/**
 * Hoisiting
 * 모든 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상 
 * let, const도 호이스팅이됨 
 */
// 호이스팅은 순서대로 실행되는 것은 아님

console.log(name);
var name = 'code';
console.log(name);


