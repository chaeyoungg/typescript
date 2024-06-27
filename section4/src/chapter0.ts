/**
 * 함수 타입 정의
 */

//어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지
function func(a: number, b: number) {
  //반환값을 적지 않아도 number로 추론
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = "류채영", tall?: number) {
  //선택적 매개변수는 필수 매개변수(name) 뒤쪽으로!
  console.log(`name : ${name}`);

  if (typeof tall === "number") {
    //tall 은 선택적 매개변수라 undefined일 수 있기 때문에 좁혀준다!!
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("류채영", 180);
introduce("류채영");

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
}

// function getSum(...rest: [number, number, number]) {
//   // 수가 정해진 튜플 타입
//   let sum = 0;
//   rest.forEach((it) => (sum += it));
// }

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5, 6); // 15
