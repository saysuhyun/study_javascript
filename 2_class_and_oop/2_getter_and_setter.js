/**
 * Getter and Setter
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // 데이터 가공해서 새로운 데이터 반환
    // private 값 반환
    get nameAndYear() {
        return `${this.name} - ${this.year}`;
    }

    // 프로퍼티 이름으로 주로 사용 
    // 별로 쓰진 않음
    set name(name) {
        this.name = name;
    }
}

const yuJin = new IdolModel('인유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear); // ()아니다 , 메서드 아님 그냥 getter
yuJin.name = '장원영';
console.log(yuJin); //IdolModel { name: '장원영', year: 2003 }

class IdolModel2 {

    #name; // private 값
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); //IdolModel2 { year: 2003 }
console.log(yuJin2.name); //안유진   get에서 정의하면 가져오기 가능 
yuJin2.name = '코드';
console.log(yuJin2.name);

// 요즘은 setter 안 쓴다 