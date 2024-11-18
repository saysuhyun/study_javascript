/**
 * try catch
 * 
 * 1) 발생시킬 떄 - > 던진다고 한다 throw
 * 2) 명시적으로 인지할 떄 -> 잡는다 catch
 */

function runner() {

    try {
        console.log('Hello');

        // 새로운 에러객체 생성
        // 애러던지는 순간 함수가 정지가 됨 
        throw new Error('큰 문제 발생!@!');

        console.log('Code');
    } catch (e) {
        console.log('----catch----');
        console.log(e);
    } finally {
        // 무조건 실행
        console.log('---fianlly----')

    }

}
runner();