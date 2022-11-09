"use strict";

// 로컬 포트
const app = require("../server");
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("8080 서버 작동");
});
