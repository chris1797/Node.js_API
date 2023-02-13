const app = require("./app.test.ts");


describe('정규식 테스트', () => {

  it("비밀번호 정규식 테스트", () => {

    // 입력받을 비밀번호
    const password: string = "123456";
    
    // 정규식 - 6자리 숫자
    const RegExp = /^[0-9]{6}$/;

    expect(RegExp.test(password)).toBe(true);
  });

});