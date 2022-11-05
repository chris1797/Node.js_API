"use strict";

// ------------------- UserStorage Model -------------------

const fs = require("fs").promises; // .promises를 붙여주면 promise를 반환

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

  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/db/users.json")
      .then((data) => {
        // 위 코드가 성공했을때 실행
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error);
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/db/users.json")
      .then((data) => {
        // 위 코드가 성공했을때 실행
        return this.#getUserInfo(data, id);
      })
      .catch(console.error); // 실패했을 때 실행
  }

  static async save(userInfo) {
    const users = await this.getUsers(true);

    if (users.id.includes(userInfo.id)) {
      /**
       * Error("~")에서 그냥 문자열을 throw,
       * 그래야 User.register()에서 response msg가 Object가 아닌 문자열이 됨
       * */
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.password.push(userInfo.password);
    users.name.push(userInfo.name);
    fs.writeFile("./src/db/users.json", JSON.stringify(users)); // 파일에 데이터 쓰기

    return { success: true };
  }
}

module.exports = UserStorage;
