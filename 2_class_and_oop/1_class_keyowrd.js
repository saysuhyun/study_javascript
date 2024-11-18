/**
 * class keyword 
 */

// 클래스는 객체지향 프로그래밍에서 특정 객체를 생성하기 위한 변수와 함수를 정의하는 틀 
// 정보를 일반화 하는 방법

// let,var 필요없음
class IdolModel {
    //name;
    //year;
    // js에서는 프로퍼티 선언 안해도 되고 그냥 생성자에 정의하는 것만으로도 오케
    constructor(name, year) {
        this.name = name;
        this.year = year;
        // this : 현재 인스턴스 
    }

    // 클래스 안의 함수 : 메서드 
    sayName() {
        return `안녕하세요 저는 ${this.name}입니다.`
    }

}

// constructor - 생성자 

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);// IdolModel { name: '안유진', year: 2003 }

const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);//IdolModel { name: '가을', year: 2002 }

console.log(yuJin.name);
console.log(yuJin.sayName()); //안녕하세요 저는 안유진입니다.
console.log(typeof IdolModel); //function / 클래스는 함수 
console.log(typeof yuJin); // object

