/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 좁히기
 * 타입을 상황에 따라 좁히는 방법을 이야기한다.
 */

//value => number : toFixed
//value => string : toUpperCase;
//value => Date : getTime;
//value => Person : name은 age살 입니다;

type Person = {
  name: string;
  age: number;
};
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    // 이러한 조건문들을 '타입 가드' 라고 함
    // 어떤 조건문 내부에서 하나의 타입이 '보장' 될 때 타입좁히기
    console.log(value.toFixed()); // number로 타입좁히기를 통해 추론
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // string으로 타입좁히기를 통해 추론
  } else if (value instanceof Date) {
    // instanceof 는 Date 객체인지 물어보는 연산자!
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // in 연산자를 통해 프로퍼티를 확인 한다. (null 일 수 있으므로 && 연산자를 사용)
    console.log(`${value.name}은 ${value.age}살 입니다. `);
  }
}
