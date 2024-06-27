// object
let user: {
  // 객체 리터럴 타입
  id?: number; // 선택적 객체
  name: string;
} = {
  id: 1,
  name: "류채영",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; // 값이 바뀌면 안되기 떄문에 오류
