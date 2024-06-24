// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "chaeyoung"];

let boolArr: Array<boolean> = [true, false, true];
// <> 로 정의하는 방식 제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열!
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // x!! 길이가 달라지면 넣어지지않음
// tup1 = ["1", "2"]; // x!!  타입이 달라지면 넣어지지 않음

let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1); //배열 메서드를 사용할 때에는 튜플을 구분하지 못한다.

const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "최아무개"],
];
