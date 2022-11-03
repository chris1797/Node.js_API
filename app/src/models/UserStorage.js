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

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // -> users의 key들로만 이루어진 list [id, pw, name]
    const userInfo = usersKeys.reduce((newUser, infofields) => {
      // newUser는 reduce의 return값을 담을 초기화 객체
      newUser[infofields] = users[infofields][idx];
      /**
       * info에는 key list요소들이 들어감
       * newUser의 infofields(key)에 users[infofields]에서 id의 index에 해당하는 값을 넣어줌
       */
      return newUser; // usersKeys.reduce가 돌면서 return받은 값들이 newUser 객체에 쌓임
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
