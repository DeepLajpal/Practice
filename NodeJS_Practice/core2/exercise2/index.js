const fs = require("fs");

// Practice 2: Create a log file and append timestamps

const timestamp = new Date().toISOString() + "\n";
fs.appendFileSync("./log.txt", timestamp);
