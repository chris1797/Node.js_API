"use strict";

const express = require("express");
const router = express.Router();

/**
 * ctrl 파일을 불러와서 그 안에 있는 home, login객체 콜한 것
 * 이게 가능하려면 ctrl에서 module.exports를 통해 외부에서 불러올 수 있도록 세팅해놔야 함
 */
const ctrl = require("./home.ctrl");

// {} 로직 부분이 Controller로 보면 됨
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login); // Front login.js의 function login()으로 감

// 외부에서 이 router를 외부파일에서 사용할 수 외부로 내보내기 해주는 것
module.exports = router;
