/**
 * Async / Await
 */

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // then 사용시 반환하는 값
        resolve('에러');
    }, seconds * 1000)
});

//프로미스로 쓴 함수에서만 await Tmf tn dlTdma
async function runner() {
    try {
        // await 사용시 변수 할당시 반환값이 reslove라서 에러가 할당됨
        // await 함수는 쓰레드가 막히지 않고 큐로 넘어감 그래서 다른 함수도 실행가능
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    } catch (e) {
        // reject 사용시 이쪽으로 반환됨
        console.log('---catch e---');
        console.log(e);
    } finally {
        console.log('---finally---');
    }
}

runner();