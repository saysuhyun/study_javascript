/**
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMembers);

// push() : 배열 맨 끝에 아이템 추가
iveMembers.push('코드'); // 해당 push는 리턴값이 추가한 배열의 길이
console.log(iveMembers);

console.log('------------');

// pop() : 배열 맨 끝에 아이템 삭제 및 반환
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('------------');

// shift() : 배열의 첫번째 아이템 삭제 및 반환
console.log(iveMembers.shift());
console.log(iveMembers);

console.log('------------');

// unshift() : 배열 맨 앞에 값을 추가 또 추가된 배열 길이 반환 
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('------------');

// splice() : 잘라서 반환
console.log(iveMembers.splice(0, 3)); // 0부터 몇개까지 삭제할지
console.log(iveMembers); // 잘라진 배열 반환

/**
 * 요즘은 위에것 처럼 쓰지 않음 
 * 요즘 트랜드는 본래 값을 변경하지 않는 트랜드
 * 아래 함수를 주로 쓰는 것이 트랜드라고함
 */

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

// concat() : 끝에 아이템 넣은 배열을 새로 만들어서 반환!
console.log(iveMembers.concat('코드'));
console.log(iveMembers);
console.log('-----------');

// slice() : 잘라서 새로 반환 기존은 값 변경 없음
console.log(iveMembers.slice(0, 3)); // 0부터 차례대로 자르는데 3번 인덱스 제외하고 자름
console.log(iveMembers);
console.log('-----------');

// spread operator : ... 펼쳐져서 저장이 됨 즉 괄호 빼고 값들을 펼쳐서 쓰나봄
let iveMembers2 = [
    ...iveMembers
]
console.log(iveMembers2); //[ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

let iveMembers3 = [
    iveMembers
]
console.log(iveMembers3); // [ [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ] ] 
console.log('-----------');

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers); // true 

// console.log([...iveMembers,] === iveMembers); // false다 왜냐하면 같은건 아니니까 펼쳐서 다른 배열을 보여줌 이건


// 이제부터 더 많이 씀

//join() : 배열을 스트링으로 문자열로!
console.log(iveMembers.join()); //안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join(', '));//안유진, 가을, 레이, 장원영, 리즈, 이서

//sort() : 오름차순 정렬 , 원래 변수 건들임
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse()); // 내림차순 정렬

let numbers = [1, 10, 4, 7, 2];
console.log(numbers);

// a,b를 비교했을ㄷ 때 
// 1) a를 b보다 나중에 정렬하려면 ( 뒤에 두려면 ) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 ( 앞에 두려면 ) 0보다 작은 숫자를 반환
// 3) 원래 숫자 그대로 두려면 0 반환 

numbers.sort((a, b) => {
    return a > b ? 1 : -1; // a가 크면 1반환해서 뒤에 감 , a가 작으면 -1반환해서 a를 앞에둠 : 오름차순 
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1); // 내림차순
console.log(numbers);


// map()
// 배열 순회하면서 각 값들을 변형하는 역할
// 원래 배열은 건들이지 않고 새 배열 반환
console.log('---------------------------')
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브 : ${x}`)); //

// map이 순회하면서 아이템이 안유진일 때만 변경하고 그 외는 그냥 x 반환이라 그렇게 변형된 배열 반환
console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브 : ${x}`;
    } else {
        return x;
    }
}));

console.log(iveMembers) // 원본은 변형 없음


// filter() : 조건에 맞는 것만 추림 킵해서 추려서 새로 배열 반환
numbers = [1, 8, 7, 5, 2];

console.log(numbers.filter((x) => true)); //[ 1, 8, 7, 5, 2 ]
console.log(numbers.filter((x) => x % 2 === 0)); //[ 8, 2 ] 짝수만


// find() : 순서대로 보긴하는데 참인 것중 가장 첫번째인 값만 반환
console.log(numbers.find((x) => x % 2 === 0)); //8

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0)); //1 : 8의 인덱스값


// reduce() 첫번째 파라미터는 그 전 함수 리턴값 , 두번째 파라미터는 처음 p의 값
console.log(numbers.reduce((p, n) => p + n, 0));

