/**
 * function -> 함수 
 */


/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서 반환하고 싶다면??
 */

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRT
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

// 반복하지마라 

function calculate() {
    console.log((2 * 10 / 2 % 3).toString());
}

//calculate();

// 파라미터 : number  
function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

// 아규먼트 4
calculate(4);

/**
 * 함수에서 입력받는 값에대한 정의 Parameter
 * 실제 입력하는 값은 argument
 */

function multiply(x, y) {
    console.log(x * y);
}
multiply(1, 2);


// 디폴트 값 넣어주기 y=10
function multifply(x, y = 10) {
    console.log(x * y);
}
multifply(2, 4);
multifply(1);

/**
 * 반환 받기 
 * return
 */

function multifply(x, y) {
    return x * y;
}

const result = multifply(2, 4); // const로 받아야 안정성 좋음 변경이 없으니까 할당후 


/**
 * Arrow 함수
 */

const multiply2 = (x, y) => {
    return x * y;
}

console.log(multiply2(2, 4));


const multiply3 = (x, y) => x * y; // 그냥 간편하니까 생략된게 많음 
console.log(multiply3(4, 5));

const multiply4 = x => x * 2; // 파라미터가 한개인 경우 더 간편해짐
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(4)); // x : 2 y:5 z:4

// 위의 화살표3개랑 같은 함수
function multiply6(x) {
    return function (y) {
        return function (z) {
            return `x: ${x} y: ${y} z: ${z}`;
        }
    }
}

const multplyTwo = function (x, y) {
    return x * y;
}
console.log(multplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
    console.log(arguments);
    return x * y * z;
}

console.log(multiplyThree(4, 5, 6)) // arguments : x , y, ,z 가 다 있음 
//[Arguments] { '0': 4, '1': 5, '2': 6 }


// 무한대로 arguments 받는 것 
const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

// arguments에 있는 값들을 다 곱해서 반환 또 argument는 무한대로 받을 수 있음 유저입장상
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10)); //1814400

// 즉시 실행 함수
// 이름없는 함수를 ()로 감싼 뒤 파라미터 사용해서 실행
(function (x, y) {
    console.log(x * y);
})(4, 5)
// 20

console.log(typeof multifply); // function
console.log(multifply instanceof Object); //true 즉 함수는 객체