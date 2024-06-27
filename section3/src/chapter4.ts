/**
 * 대수타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean; // 합집합!! 두가지 타입 모두 가능하다.
a = 10;
a = "hello";

a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Union1 = Dog | Person; // 별칭을 이용해서도 union 타입을 만들 수 있다.

let union1: Union1 = {
  name: "", //name은 Dog와 Person의 교집합에 위치
  color: "",
};

let union2: Union1 = {
  name: "", //name은 Dog와 Person의 교집합에 위치
  language: "",
};

let union3: Union1 = {
  name: "", //name은 Dog와 Person의 교집합에 위치
  color: "",
  language: "",
};

// let union4: Union1 = {
//   // 오류 발생
//   // color 프로퍼티가 없기 때문에 Dog 타입이 될 수 없고
//   // language 프로퍼티가 없기 때문에 Person 타입도 될 수 없고

//   name: "",
// };

/**
 * 2. 교집합 타입 - Intersection type
 */

let variable: number & string; // variable 은 never 타입이 됨

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person; // 무.조.건 Dog와 Person의 프로퍼티를 다 포함하는 타입이어야한다.

let intersection: Intersection = {
  // 모든 경우에서 Dog, Person 타입을 모두 충족해야함
  name: "",
  color: "",
  language: "", //하나라도 주석하면 오류1
};
