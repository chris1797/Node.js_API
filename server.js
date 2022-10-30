// express 사용법, 기본으로 해줘야 함
const express = require('express');
const app = express();

// .listen()을 치면 로컬에서 서버를 열 수 있음
app.listen(8080, function(){
  console.log('listening on 8080')
});

/**
 * 서버로 GET요청 처리
 * app.get('경로', function(요청, 응답){});
 */ 
app.get('/home', function(요청, 응답){
  응답.send('home 입니다.')
});

app.get('/', function(요청, 응답){
  응답.sendFile(__dirname + '/index.html')
});