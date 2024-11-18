/** 
 * if and switch 
 */

let number = 5;

if (number % 2 === 0) {
    console.log('number 변수 짝수 ');
} else {
    console.log('number 홀수');
}

if (number % 2 === 0) {
    console.log('2')
} else if (number % 3 === 0) {
    console.log('3');
} else {
    console.log('---');
}

/**
 * 스위치문 
 */

const englishDay = 'monday';

let koreanDay;

switch (englishDay) {

    case 'monday':
        koreanDay = '월요일'
        console.log('monday');
        break; // 빠져나오라고  
    case 'tuesday':
        koreanDay = '화요일';
        break;
    default:
        koreanDay = 'default';
        break;
}




