"use strict";

// ------------------- UserStorage Model (DB CRUD) -------------------

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

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password],
        (err) => {
          if (err) reject(`${err}`);
          resolve({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;
