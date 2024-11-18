/**
 * All about objects 
 * 
 * 객체를 선언할 때 사용할 수 있는 방법들 
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 class 와 OOP
 * 3) function을 사용해서 객체 생성
 */


// 1번째 
const yuJin = {
    name: '안유진',
    year: 2003,
}

console.log(yuJin);

// 2번째
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
console.log(new IdolModel('안유진', 2003));


// 3번째 생성자 함수 -> 오래된 라이브러리에서 쓰나보네
function IdolFunction(name, year) {
    this.anme = name;
    this.year = year;
}
const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul);