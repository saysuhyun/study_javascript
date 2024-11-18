
/**
 * fro roop
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}

// for ... in 
const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}

// 오브젝트인 경우 키값을 가져옴 
for (let key in yuJin) {
    console.log(key);
}

const iveMembersArray = ['안유진', '가을', '레이'];
for (let key in iveMembersArray) {
    console.log(key); // 배열에서는 인덱스값 
    console.log(`${key}:${iveMembersArray[key]}`); // key를 인덱스로 해당값 출력
}

// for ...of 
iveMembersArray = ['안유진', '가을', '레이'];

// array에서 for of 는 값이 나온다!!! for in은 인덱스 
for (let value of iveMembersArray) {
    console.log(value);
}

/** while */

let number = 0;

while (number < 10) {
    number++;

}

// do while은 그냥 쓰지말자 

// break;

for (let i = 0; i < 10; i++) {

    if (i === 5) {
        break; // for문 깨짐 즉 밖으로 나감 i가 5일때
    }
    console.log(i);
}

// continue
// 현재 진행중인 루프를 건너뛴다.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

