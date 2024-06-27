/**
 * 함수 타입 표현식
 */

//함수의 타입을 정의하는 것
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
