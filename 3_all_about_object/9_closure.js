/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical 
 * environemnt within which that function was declared
 * 
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 * 
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다."
 */
function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
}

// console.log(number);

// console.log(getNumber());

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber; // 그냥 반환 () 없음 실행하지 않고 함수 자체를 반환
}

const runner = getNumber();

console.log(runner);
console.log(runner());

/**
 * 1) 데이터 캐싱
 */
function cacheFunction() {
    // 아래 계산은 매우 오래걸린다는 가정을 했을때
    var number = 10 * 10;

    // 클로저
    function innerCacheFunction(newNumb) {
        return number * newNumb;
    }

    return innerCacheFunction;
}

const runner2 = cacheFunction(); // 일단 한 번 cacheFunction을 돌려서 오래걸리는거 초기화 한 다음 캐싱 
console.log(runner2(10));
console.log(runner2(20));

function cacheFunction2() {
    var number = 99;

    function increment() {
        number++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction2();
// 원래라면 number 접근을 못했을텐데 클로저를 통해서 접근해서 사용!
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보 은닉
 */
function Idol(name, year) {
    this.name = name;

    var _year = year;

    this.sayNameAndYear = function () {
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year);