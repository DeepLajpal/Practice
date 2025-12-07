#! /usr/bin/env node

const fs = require("fs");

const command = process.argv[2] || "No command";
const note = process.argv[3] || "Empty Note";
const filePath = "./core2/notes-cli/notes.json";

const loadNotes = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err.message);
  }
};

const saveNotes = (filePath, notes) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
  } catch (err) {
    console.error(err.message);
  }
};

const addNotes = (filePath, note) => {
  const notes = loadNotes(filePath);
  const newNoteId = Date.now();
  const updatedNotes = [...notes, { id: newNoteId, text: note }];
  saveNotes(filePath, updatedNotes);
  console.log(`New Note added with id ${newNoteId}`);
};

const listNotes = (filePath) => {
  const notes = loadNotes(filePath);
  notes.map((note) => {
    console.log(`${note.id}: ${note.text}`);
  });
};

const deleteNotes = (filePath, id) => {
  const notes = loadNotes(filePath);
  const deletedNote = notes?.filter((note) => note?.id == id);
  if (deletedNote.length == 0) return console.log(`Note With ${id} not found!`);
  const updatedNotes = notes?.filter((note) => note?.id != id);
  saveNotes(filePath, updatedNotes);
  console.log(`Note id: ${deletedNote[0]?.id} delete success!`);
};

if (command == "add") {
  addNotes(filePath, note);
} else if (command == "list") {
  listNotes(filePath);
} else if (command == "delete") {
  deleteNotes(filePath, Number(note));
}
