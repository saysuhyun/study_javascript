/**
 * 상속
 * 
 * 클래스는 객체지향에서 특정 인스턴스를 생성하기 위한 변수와 메서드를 정의하는 틀 
 * 상속은 객체들 간의 관계를 구축하는 방법 
 * 부모클래스 등 기존 클래스로부터 속성과 동작 상속받기 가능 
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance() {
        return '여자 아이돌이 춤을 춥니다.';
    }
}

class MaleIdolModel extends IdolModel {
    sing() {
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);

console.log(cf.name);

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);

console.log('----------');
console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemaleIdolModel);
console.log(jiMin instanceof MaleIdolModel);

console.log('-------------');
console.log(cf instanceof IdolModel);
console.log(cf instanceof FemaleIdolModel);
console.log(cf instanceof MaleIdolModel);