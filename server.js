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

// express 사용법, 기본으로 해줘야 함
const express = require('express');
const app = express();

/** 
 * 서버 재시동 자동화
 * 터미널에서 nodemon server.js
 */

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

// .listen()을 치면 로컬에서 서버를 열 수 있음
app.listen(8080, () => {
  console.log('listening on 8080')
});

/**
 * 서버로 GET요청 처리
 * app.get('경로', function(요청, 응답){});
 */ 
app.get('/home', function(req, res){
  res.send('home 입니다.')
});

app.get('/login', function(req, res){
  res.sendFile(__dirname + '/index.html')
});