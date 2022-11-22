"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

/**
 * output은 get request
 */
const output = {
  home: (req, res) => {
    loggers.info(`GET / 200 "홈 화면으로 이동"`);
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },

  save: async (req, res) => {
    const board = new Board(req.body);
    const response = await board.save();
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
