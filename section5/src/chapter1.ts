/**
 * 인터페이스 확장
 */

//name과 age가 계속해서 중복되고 있다!!
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  // 모두 가진 것을 확인할 수 있다!
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

//다중확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
