"use strict";

// ---------------------------------------------------------
// ------------------- UserStorage Model -------------------
// ---------------------------------------------------------

class UserStorage {
  // class 안에서 변수를 선언할 때는 선언자 필요 없음
  static #users = {
    // # : data 은닉화, ctrl에서 쓸 수 있도록 static 선언
    id: ["jaehun", "chris", "tom"],
    pw: ["123", "1234", "12345"],
    name: ["이재훈", "이제훈", "이자홍"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUser, field) => {
      if (users.hasOwnProperty(field)) {
        newUser[field] = users[field];
      }
      return newUser;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
