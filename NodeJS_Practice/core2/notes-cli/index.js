#! /usr/bin/env node

const fs = require("fs");

const command = process.argv[2] || "No command";
const note = process.argv[3] || "Empty Note";
const filePath = "./notes.json";

const loadNotes = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, "utf8");
    console.log("Data retrived Success!");
    return JSON.parse(data);
  } catch (err) {
    console.error(err.message);
  }
};

const saveNotes = (filePath, notes) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
    console.log("Note save success!");
  } catch (err) {
    console.error(err.message);
  }
};

const addNotes = (filePath, note) => {
  const notes = loadNotes(filePath);
  const updatedNotes = [...notes, { id: Date.now(), text: note }];
  console.log("Note add Success!");
  saveNotes(filePath, newNotes);
};

// fs.readFile("./notes.json", "utf8", (err, data) => {
//   if (err) return console.error(err);
//   const notes = JSON.parse(data);
//   console.log(`${notes[0]?.id}: ${notes[0]?.text}`);
//   console.log(data);
// });

if (command == "add") {
  add(filePath, command, note);
}
