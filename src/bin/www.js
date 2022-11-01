"use strict";

// 로컬 포트
const app = require("../../server");
const PORT = 8080;

app.listen(PORT, () => {
  console.log("listening on 8080");
});
