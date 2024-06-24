// void
// void -> 공허

function func1(): string {
  // 함수의 반환값의 타입 지정
  return "hello";
}

function func2(): void {
  // 함수의 반환값이 없으므로 void
  // null, undefined 는 실제로 return을 해줘야한다.
  console.log("hello");
}

let a: void;
a = 1; // x
a = "hello"; // x
a = undefined; // 가능

// never
// never -> 존재하지 않는
// 불가능한 타입, 모순을 의미하는 타입
// 아무런 값도 담을 수 없다.(심지어 any 타입의 값도)

function func3(): void {
  while (true) {}
  //정상적으로 종료되지 않는 경우
  //반환한다는 것 자체가 모순인 경우
}

function func4(): never {
  throw new Error();
}
