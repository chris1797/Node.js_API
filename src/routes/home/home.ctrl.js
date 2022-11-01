"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

/**
 * 밖에서 해당 ctrl 객체들을 콜할 수 있도록 해주는 것
 * key: value 형태이지만 key만 써놓은 것(value는 자동으로 key와 같은 값으로 저장됨) 
 */
module.exports = {
  home,
  login,
};

