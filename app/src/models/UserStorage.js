"use strict";

// ------------------- UserStorage Model -------------------

const db = require("../config/db"); // .promises를 붙여주면 promise를 반환

class UserStorage {
  /**
   * 클래스 안에서 변수를 선언할 때는 선언자 필요 없음 (const, var, let)
  static #users = {
    // # : data 은닉화, ctrl에서 쓸 수 있도록 static 선언
    id: ["jaehun", "chris", "tom"],
    password: ["123", "1234", "12345"],
    name: ["이재훈", "이제훈", "이자홍"],
  };
  */

  // #으로 은닉화, private한 변수나 메소드는 클래스의 최상단에 올려두는게 관례
  static #getUserInfo(data, id) {
    const users = JSON.parse(data); // pakage.json에서 읽어온 파일을 log로 찍은 것
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // -> users의 key들로만 이루어진 list [id, pw, name]
    const userInfo = usersKeys.reduce((newUser, fields) => {
      //   // newUser는 reduce의 return값을 담을 초기화 객체
      newUser[fields] = users[fields][idx];
      //   /**
      //    * info에는 key list요소들이 들어감
      //    * newUser의 infofields(key)에 users[infofields]에서 id의 index에 해당하는 값을 넣어줌
      //    */
      return newUser; // usersKeys.reduce가 돌면서 return받은 값들이 newUser 객체에 쌓임
    }, {});
    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = fields.reduce((newUser, field) => {
      if (users.hasOwnProperty(field)) {
        newUser[field] = users[field];
      }
      return newUser;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {}

  static getUserInfo(id) {
    new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE id = ?", [id], (err, data) => {
        if (err) reject(err);
        console.log(data);
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {}
}

module.exports = UserStorage;
