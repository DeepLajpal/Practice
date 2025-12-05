const fs = require("fs");
const util = require("util");

// reading file

// A) Asynchronous args(file path, charactor encoding from hexa byte to human readable, callback - runs when the file reading finishes., )
// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) return console.error(err);
//   if (err) return console.log(err);
//   if (err) return console.error(`Error: ${err}`);
//   console.log(data);
// });

//B Synchronous (with error handling)
// try {
//   const data = fs.readFileSync("input.txt", "utf8");
//   console.log(data);
// } catch (err) {
//   console.log(`Error Reading File: ${err.message}`);
// }

// Why you don’t see "err.message" inside the printed object "err"

// in Node.js, the message property is not enumerable.
// console.log(err); // shows enumerable properties only.
// If you want every property, including non-enumerable ones:
// console.log(util.inspect(err, { showHidden: true, depth: null }));

// Writing file - by replacing whole file content with the given one

// A) Async
// fs.writeFile("output.txt", "hello world", (error) => {
//   if (error) return console.log(error);
// });

// B) Sync
// fs.writeFileSync("output.txt", "hello world");

// Appending files
// A) Async
// fs.appendFile("output.txt", "\nHeyIamAppended", (err) => {
//   if (err) return console.error(err);
// });

// B) Sync
// fs.appendFileSync("output.txt", "\nHeyIamAppended2\n");

// Deleting files (unlink will permanentely without recycle bin)
// A) Async
// fs.unlink("output.txt", (err) => {
//   if (err) return console.error(err);
// });

// B) Sync
// fs.unlinkSync("output.txt");
