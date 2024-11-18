/**
 * Callback
 * 특정 시간이 끝나고 나중에 실행되는 함수 
 */
function waitAndRun() {
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}

// waitAndRun();

function waitAndRun2() {
    setTimeout(
        () => {
            console.log('1번 콜백 끝');
            setTimeout(() => {
                console.log('2번 콜백 끝');
                setTimeout(() => {
                    console.log('3번 콜백 끝');
                }, 2000);
            }, 2000);
        }, 2000);
}

// waitAndRun2();

/**
 * Promise
 * 
 * 콜백함수 개선용 비동기 
 * reslove :  reslove 안에 아규먼트 넣어주면 해당 값이 then에 들어가게 된다
 * reject :  reject 안에 아규먼트 넣어주면 실행시 catch에서 사용가능 error용  
 */

// new를 쓴 프로미스 객체 . 객체에는 then이라는 함수가 있다.  timeoutPromise가 실행후 2초뒤 완료라는 값이 then에 들어가서 실행됨
const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

// timeoutPromise.then((res) => {
//     console.log('---then---');
//     console.log(res);
// });


const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if(xxx){
        //     resolve('성공')
        // }else{
        //     reject('에러');
        // }
        resolve('에러');
    }, seconds * 1000);
});

// getPromise(3)
//     .then((res) => {
//         console.log('--- first then ---');
//         console.log(res);
//     })
//     .catch((res)=>{
//         console.log('--- first catch ---');
//         console.log(res);
//     })
//     .finally(()=>{
//         console.log('--- finally ---');
//     });

// 3개의 프로미스를 동시에 실행하고 안에 든 거중 가장 느린함수 기준을 then이나 catch가 불림  실행은 동시 , 실행은 가장 느린거 기준
Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((res) => {
    console.log(res);
});