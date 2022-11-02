"use strict";

// 이  ""는 HTML의 id
const id = document.querySelector("#id"),
  pw = document.querySelector("#pw"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };
  // 어떤 경로로 데이터를 주고받을지 정해줘야 함
  fetch("/login", {
    // body라는 key값으로 req 데이터를 JSON형태로 감싸서 전달
    method: "POST",
    headers: {
      "Content-Type": "application/json", // 내가 보내는 데이터 타입은 JSON이다.
    },
    body: JSON.stringify(req),
  });
}
