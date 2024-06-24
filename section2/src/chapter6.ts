// any
// 특정 변수의 타입을 우리가 확실히 모른다.
// 마치 자바스크립트처럼 모든 타입의 변수를 받는다.

let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

//unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;

// num = unknownVar; //불가
// unknownVar.toUpperCase(); // 불가
