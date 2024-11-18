/**
 * Object 객체 
 * 
 */

// key : value 
let yuJin = {
    name: '유진',
    group: 'ive',
    // 오브젝트 안에 함수 : 메서드
    dance: function () {
        //  this 는 함수가 정의되어 있는 yuJin 객체를 칭함
        // this로 해당 오브젝트 가져오기 가능
        return `${this.name}이 춤을 춘다`;
    }
}

console.log(yuJin); //{ name: '유진', group: 'ive', dacne: [Function: dacne] }
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';
console.log(yuJin[key]);
console.log(yuJin.dance());


const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
}

console.log(yuJin2);

// 존재하지 않는 키 넣는 경우 새로 생김
yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2); //{ name: '안유진', group: '아이브', englishName: 'An Yu Jin' }

delete yuJin2['englishName']; // 프로퍼티 삭제 가능
console.log(yuJin2); //{ name: '안유진', group: '아이브' }


/**
 * 
 * const로 선언한 객체 특징
 * 1) const 선언한 경우 객체 자체를 변경할 수는 없음
 * 2) 객체 안의 프로퍼티나 메서드는 변경 가능 
 */

const wonyYoung = {
    name: '장원영',
    group: '아이브',
}
console.log(wonyYoung); //{ name: '장원영', group: '아이브' }

// wonYounh ={} 에러 const로 선언했으니까 
wonyYoung['group'] = '코드';
console.log(wonyYoung) // { name: '장원영', group: '코드' }


// 모든 키값 다 가져오기 
console.log(Object.keys(wonyYoung));

// 모든 벨류값 다 가져오기 
console.log(Object.values(wonyYoung));

const name = '안유진';

// 키랑 벨류랑 같으면 하나만 써도 됨
const yuJin3 = {
    // name : name
    name,
};
console.log(yuJin3); //{ name: '안유진' }
