//unknown 타입

function unknownExam() {
  //업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  //다운캐스팅
  let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

// never 타입

function neverExam() {
  function neverFunc(): never {
    while (true) {} // 반환하는 값이 아무 것도 없다.
  }

  //업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //다운캐스팅 (오류)
  // let never1: never = 10;
  // let never2: never = "hello";
  // let never3: never = true;
}

//void 타입

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined; // 업캐스팅
}

//any 타입
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; //다운캐스팅 이지만, 가능
  undefinedVar = anyVar; // 다운캐스팅 이지만, 가능

  //이런 치트키 any도 불가능한 것이 있었으니
  // neverVar = anyVar;
}
