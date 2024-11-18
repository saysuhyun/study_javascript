/**
 * Data Types
 * 
 * 여섯개의 Primitive Type
 * 한개의 오브젝트 타입 
 * 
 * 1) Number 
 * 2) String
 * 3) Bollean
 * 4) undefined 
 * 5) null
 * 6) Symbol 
 * 
 * 7) Object 객체 
 *    Function
 *    Array
 *    7번 내용 전부 포함해서 오브젝트
 */


/**
 * 넘버 
 */
const age = 28;
const tempature = -10;
const pi = 3.14;

console.log(typeof age); //Number

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity); //Number

console.log('----------');

/**
 * String
 */

const code = '코팩';
console.log(typeof code);

const ive = "'ive' 안유진 ";  // 작은 따옴표 출력할때  혹은 큰따옴표 출력 경우 '"ive" 안유진'
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) nweLine -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현할 떄 두번 입력 
 */

const iveYujzin = '아이브\n안유진';
const iveWY = '아이브\t장원영';
const backSlash = '아이브\\레이'

const smallQ = '아이브\'코팩';
console.log(smallQ);

// 백슬레시로 감싸면 보이는 그대로 출력 됨 
const iveGaul = `아이브 "" '' //// 
가을`;
console.log(iveGaul);

console.log(iveGaul + smallQ);
console.log(`${iveGaul} 안유진`); // 백틱 + ${} 다트랑 같네
console.log('-------------')

/**
 * Bollean 타입
 */

const isTrue = true;
const isFalse = false;


/**
 * Undefined 
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값 
 * 
 * 직접 undeifined 로 값이 초기화되는걸 지양해야함 
 */

let noInit; // undefined 
console.log(noInit);

/**
 * 
 * Null
 * 
 * undeifined 와 같이 값이 ㅇ벗다는 뜻인데 
 * 개발자가 명시적으로 값이 없다라고 초기화할 때 사용 
 */

let init = null;
console.log(init);
console.log(typeof init); // 이거 null이라고 안 뜨고 object라고 뜸 버그임 그냥 알고만 있으면 됨 

/**
 * Symbol
 * 
 * 유일무이한 값을 생성할 때 사용 
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 씀
 */

const test1 = '1';
const test2 = '2';
console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); // false 무조건 유일무이하니까 다름. 

console.log('---------------');


/**
 * 
 * Object
 * 
 * 자바스크립트는 모든게 Object
 * Map이 오브젝트
 * 키 : 벨류 쌍으로 이뤄짐 
 * key : value
 */

const dictionary = {
    red: '빨간색',
    yellow: '노랑',
    blue: '파란색'
}

console.log(dictionary);
console.log(dictionary['red']); // 키 넣으면 벨류가 나옴 
console.log(typeof dictionary) // object


/**
 * Array
 * 
 * 값을 리스트로 나열할 수 있는 타입
 */

const iveMemberArray = [
    '안유진',
    '가을',
    '레이',
    '이서'
];

console.log(iveMemberArray);


/** 
 * Index
 * 
 * 0부터 시작 
 * 1씩 올라간다
 */

console.log(iveMemberArray[0]); // 해당 값의 인덱스에 해당하는 값 출력 

iveMemberArray[0] = '장원영';
console.log(iveMemberArray[0]);
console.log(typeof iveMemberArray); // object

/**
 * 
 * static typing -> 변수 선언시 어떤 타입의 변수 선언할 지 명시 ex ) c
 * 
 * dynamic type -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 '추론'한다 ex_ js
 * 
 */

/**
const iveMembersArray = ['안유진','가을','레이','장원영','리즈','이서']; 예시에서 
const로 선언된 변수는 값을 변경할수 없다고했는데 iveMembersArray[0] = '코드팩토리'; 라고 선언했을때 
왜 값이 바뀌는건가요 ? let을 사용해야하는거 아닌가요 ?
 * 
값이 변경되지 못한다고 말씀드린 부분은 선언된 '변수'에 대한 이야기입니다!
예를들어서 iveMembersArray의 경우 iveMembersArray 자체는 못바꿉니다.
예를들어 iveMembersArray = []; <- 이건 불가능합니다.
하지만 각각의 값들은 또 다른 메모리 공간을 차지하기 때문에 변경 될 수 있습니다. 
(실제 많은 초보분들이 버그로 착각하는 부분중 하나입니다)
 * 
 */