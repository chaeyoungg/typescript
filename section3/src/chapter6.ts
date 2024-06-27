/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "류채영";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog; //타입 단언을 사용하면, dog 객체의 타입을 단언하게 되어 초과 프로퍼티에 대한 오류가 사라진다

/**
 * 타입 단언의 규칙!!
 * 1. 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼 타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // 가능, never은 모든타입의 서브타입이다.
let num2 = 10 as unknown; // 가능 unknown은 모든 타입의 슈퍼타입이다.
let num3 = 10 as unknown as string; // 오류!!  number와 string 타입은 전혀 교집합이 없다. (슈퍼/서브 타입 없음음)

/**
 * const 단언
 */

let num4 = 10 as const; //num4가 const처럼 상수화하여 쓰일 수 있다.

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 모든 객체가 readonly 객체가 된다!

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글 1",
  author: "류채영",
};

const len: number = post.author!.length;
//author 라는 프로퍼티는 진짜 있어! 라는 느낌
//post.author가 non null 이라고 믿기 때문에

console.log(len);
