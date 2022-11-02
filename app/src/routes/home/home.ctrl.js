"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["jaehun", "chris", "tom"],
  pw: ["123", "1234", "12345"],
};

// , 쉼표 붙여주는 것 주의
const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패했습니다.",
    });
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
