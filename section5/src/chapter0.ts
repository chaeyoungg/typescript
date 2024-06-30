/**
 * 인터페이스
 */

interface Person {
  // 헝가리안 표기법 ...
  readonly name: string;
  age?: number;

  //오버로드 시그니처 : 메서드 오버로딩 가능 OO
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// // 타입 별칭과의 차이점
// // 1. 유니온, 인터섹션 타입 작성이 불가하다.
// type Type1 = number | string;
// type Type2 = number & string;

const person: Person | number = {
  name: "류채영",
  // age: 29,
  sayHi: function () {
    //인터페이스
    console.log("Hi");
  },
};

//메서드 오버로딩
person.sayHi();
person.sayHi(1, 2);
