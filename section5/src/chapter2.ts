/**
 * 선언 합침 merging
 */

interface Person {
  name: string;
}

interface Person {
  // name: number; // 동일한 프로퍼티를 중복정의, 타입을 다르게 하면 충돌이 일어난다.
  age: number;
}

const person: Person = {
  name: "",
  age: 28,
};

interface Developer extends Person {
  name: "hello";
}

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", // c의 프로퍼티가 보강이 필요할 때
};
