/**
 * 기본 타입간의 호환성
 */

let num1: number = 10; //슈퍼타입
let num2: 10 = 10;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  //추가 프로퍼티가 있는 객체가 자식 객체가 된다.
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "borwn",
  breed: "진도",
};

animal = dog; // 업캐스팅이라 가능!
// dog = animal; // 다운캐스팅이라 불가능!

/**
 * 초과 프로퍼티 검사
 */
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book; //슈퍼타입
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라 먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // 업캐스팅이라 가능하다.
// programmingBook = book; // 다운캐스팅이라 불가능하다.

let book2: Book = {
  name: "한 입 크기로 잘라 먹는 리액트",
  price: 33000,
  // skill: "reactjs", //초기화 시 객체 리터럴로 정의 시 초과 프로퍼티 검사에 걸림!!
};
