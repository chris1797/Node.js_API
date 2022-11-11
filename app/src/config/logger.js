const { createLogger, transports, format } = require("winston");
const { combine, timestamp, json, label, printf, simple, colorize } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  // 파라미터를 받아와서 return
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = combine(
  label({
    label: "WDL",
  }),
  // colorize(),
  timestamp({
    format: "YYYY-MM-DD HH:mm:dd",
  }),
  printFormat
);

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "info",
      format: printLogFormat,
    }),
  ],
});

module.exports = logger;
