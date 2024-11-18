/**
 * Static keyword
 */

class IdolModel {
    name;
    year;
    static groupName = '아이브'; // 객체에 귀속되지 않음 클래스에 귀속

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnGroupName() {
        return '아이브';
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

// new 안 써도 클래스 귀속이라 바로 쓰기 가능 
console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName());

/**
 * Factory Constructor
 */


class IdolModel2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // static으로 만들어서 하나의 생성자 뿐 아니라 다른 생성자등등 만들기 가능!
    static fromObject(object) {
        return new IdolModel2(
            object.name,
            object.year,
        );
    }

    static fromList(list) {
        return new IdolModel2(
            list[0],
            list[1],
        );
    }

}

// new를 안 써도 만들기 가능 
const yuJin2 = IdolModel2.fromObject({
    name: '안유진',
    yaer: 2003,
});
console.log(yuJin2); //IdolModel { name: '안유진', year: undefined }


const wonYoung = IdolModel2.fromList(
    [
        '장원영',
        2003,
    ]
);
console.log(wonYoung);