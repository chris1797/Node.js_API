"use strict";

// 로컬 포트
const app = require("../server");
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 3306;

app.listen(PORT, () => {
  logger.info(`${PORT} 포트에서 서버 가동`);
});
