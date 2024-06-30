/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취금해도 괜찮은가를 판단하는
 * 1. 반환값이 호환되는가 ?
 * 2. 매개변수가 호환되는가 ?
 */

// 1. 반환값이 호환되는가?
type A = () => number;
type B = () => 10; // 무조건 리터럴 10을 반환환

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // 다운캐스팅!! 리터럴 10을 더 큰 넘버타입에 할당하겠다는 뜻

// 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 업캐스팅인데 안됨!!!  -> 매개변수가 객체일 때를 보면 이해가 쉽다.
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;
// 매개변수를 기준으로 업캐스팅인 상황에서는 안됨

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
  // animal 타입에는 color 가 없는데! 업캐스팅을 허용하면 말도 안되는 일이 일어남
};

dogFunc = animalFunc;
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// 2-2. 매개변수의 개수가 다를 때
//할당하려고 하는 함수의 타입에 매개변수의 개수가 더 적을 때에만 호환( = 할당) 이 된다.

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
