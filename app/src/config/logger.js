const { createLogger, transports, format } = require("winston");
const { combine, timestamp, label, printf, simple } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  // 파라미터를 받아와서 return
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = {
  file: combine(
    label({
      label: "WDL",
    }),
    timestamp({
      format: "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat
  ),
  console: combine(simple()),
};

const opts = {
  file: new transports.File({
    filename: "access.log",
    dirname: "./logs",
    level: "info",
    format: printLogFormat.file,
  }),
  console: new transports.Console({
    level: "info",
    format: printLogFormat.console,
  }),
};

const logger = createLogger({
  transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") {
  /**
   * .env 파일의  NODE_ENV에 따라 console ON/OFF
   * 개발버전 : dev (console ON)
   * 상용버전 : production (console OFF)
   */
  logger.add(opts.console);
}

module.exports = logger;
