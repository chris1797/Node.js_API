"use strict";

/* http 사용
// http를 쓰면 if문으로 url별 로직을 구현해줘야 되는데 때문에 express를 쓰는 것
const http = require("http");
const app = http.createServer((req, res) => {
  // console.log(req.url); // localhost:3001 다음의 url이 찍힘
  if(req.url === "/") {
    res.end("here is free");
  } else if (req.url === "/login") {
    res.end("here is login page");
  }
});

app.listen(3001, () => {
  console.log("http server on");
});
*/
//--------------------------------------------------------------------
// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 정적 경로를 추가해주는 것
app.use(express.static(`${__dirname}/src/public`));
app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;
// .listen()을 치면 로컬에서 서버를 열 수 있음
// app.listen(PORT, () => {
//   console.log('listening on 8080')
// });
