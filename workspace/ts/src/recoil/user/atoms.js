import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "loginUser",
  storage: sessionStorage,
});

export const userState = atom({
  key: "userState",
  default: null,
  effects: [persistAtom], // 플러그인 같은 느낌
});
