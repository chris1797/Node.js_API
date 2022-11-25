"use strict";

const db = require("../config/db");

class BoardStorage {
  /**
   * 글 상세보기
   * @param {*} id
   * @returns
   */
  static getBoardDetail(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM board WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        resolve(data[0]);
      });
    });
  }

  static async save(board) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO board(id, name, title, content) VALUES(?, ?, ?, ?);";
      db.query( 
        query, 
        [board.id, board.name, board.title, board.content],
        (err) => {
          if (err) reject(`${err}`);
          resolve({ success: true });
        }
      );
    });
  }
}

module.exports = BoardStorage;
