//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "류채영",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.Korean,
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 1 <- 일반 유저
    language: Language.english,
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 2 <- 게스트
    language: Language.english,
};
console.log(user1, user2, user3);
export {};
