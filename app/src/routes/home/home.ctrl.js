"use strict";

const UserStorage = require("../../models/UserStorage"); // 경로는 현재 이 파일 기준

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

// ---------------------------------------------------------
// ------------------- Controller의 Logic -------------------
// ---------------------------------------------------------

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;

    console.log(UserStorage.getUsers("id", "pw", "name"));

    const response = {}; // 응답하는 Object객체 변수로 선언

    /**
     * 기존 아래 코드에서 json({}) 부분을 빼준 것
     * return res.json({
     *  success: true,
     *  })
     * })
     */
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        response.success = true; // response 응답객체에 key를 success로 주고 true를 value로 줌
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패했습니다.";
    return res.json(response);
  },
};
/**
 * 밖에서 해당 ctrl 객체들을 콜할 수 있도록 해주는 것
 * key: value 형태이지만 key만 써놓은 것(value는 자동으로 key와 같은 값으로 저장됨)
 */
module.exports = {
  output,
  process,
};
