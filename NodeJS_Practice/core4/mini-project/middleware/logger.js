const fs = require("fs");

const logger = (req, res, next) => {
  const logTime = new Date().toLocaleDateString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const logData = `[${req?.method}] ${req?.path} at ${logTime}\n`;
  fs.appendFileSync("./log.txt", logData);

  next();
};

module.exports = logger;
