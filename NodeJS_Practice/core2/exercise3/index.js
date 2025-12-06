const fs = require("fs");

// Practice 3: Copy one file to another

// shortcut method
// fs.copyFileSync("./source.txt", "./target.txt");

// manual method
const sourceFileText = fs.readFileSync("./source.txt", "utf8");
fs.writeFileSync("./target.txt", sourceFileText);
