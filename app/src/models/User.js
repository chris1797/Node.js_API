"use strict";

// import UserStorage
const UserStorage = require("./UserStorage");

/**
 * User 인스턴스를 만들어서 관리할 예정
 * 생성자에 req.body를 기본적으로 갖고 있게끔
 */
class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    // id,pw를 지역변수로 쓰기 위한 getUsers
    // getUsers(id)를 통해 return받은 값들이 id, pw에 매칭
    const { id, pw } = UserStorage.getUserInfo(this.body.id);

    if (id) {
      if (id === this.body.id && pw === this.body.pw) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다." };
  }
}

module.exports = User;
