// 타입 별칭

type User = {
  //User라는 타입 별칭 생성
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  //타입 별칭으로 타입 정의
  id: 1,
  name: "류채영",
  nickname: "chaeyoung",
  birth: "1996.11.13",
  bio: "안녕하세요",
  location: "용인시",
};

let user2: User = {
  //타입 별칭으로 타입 정의
  id: 1,
  name: "류채영2",
  nickname: "chaeyoung2",
  birth: "1996.11.13",
  bio: "안녕하세요",
  location: "용인시",
};

//인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko", // string key  + string value 규칙을 이용!
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes = {
  korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
