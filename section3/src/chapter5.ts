/**
 * 타입 추론
 */

let a = 10; //자동으로 타입을 number 타입으로 추론
let b = "hello";
let c = {
  id: 1,
  name: "류채영",
  profile: {
    nickname: "chaeyoung",
  },
  urls: ["https://velog.io/chaeyoungg77"],
};

//구조분해할당도 제대로 추론하는 것을 알 수 있음
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

//함수의 반환값도 추론 가능
function func() {
  return "hello";
}

function func2(message = "hello") {
  return message;
}

// 타입스크립트가 제대로 추론하지 못하는 경우
let d; // 명시적으로 타입을 쓰지 않으면 암묵적으로 any 타입으로 추론

// 타입이 진.화.됨
d = 10; // number 타입으로 추론 변경됨
d.toFixed(); // number 타입으로 추론
d = "hello"; // string으로 추론 변경됨
d.toUpperCase(); // string 타입으로 추론
// d.toFixed();

const num = 10; //타입이 없고, 넘버 리터럴 타입으로 추론됨
const str = "hello";

let arr = [1, "string"]; // 모든 요소들의 타입을 비교해서, 최대의 공통 타입으로 추론해줌
// union 타입으로 추론된다.
