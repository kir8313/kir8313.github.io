const fs = require('fs/promises');
const path = require('path');
const notesPath = path.join(__dirname, 'notes.json');
const chalk = require('chalk');

async function addNote(title) {
  const notes = await getNotes();
    const note = {
    title,
    id: Date.now().toString()
  };

  notes.push(note)

  await fs.writeFile(notesPath, JSON.stringify(notes))
}

async function removeNote(element) {
  const notes = await getNotes();
  const index = notes.findIndex(item => Number(item.id) === Number(element.id));
  notes.splice(index, 1);
  await fs.writeFile(notesPath, JSON.stringify(notes))
}

async function getNotes() {
  const notes = await fs.readFile(notesPath, {encoding: 'utf8'});
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

function showNotes() {
  const notes = require(notesPath);
  console.group('Here is the list of notes:');
  notes.forEach(item => console.log(`${chalk.green(item.id)} ${chalk.blue(item.title)}`));
  console.groupEnd();
}

async function renameNotes(newTitle) {
  const arrInfo = newTitle.split(',');
  const notes = await getNotes();
  const index = notes.findIndex(item => Number(item.id) === Number(arrInfo[0]));
  notes[index].title = arrInfo[1];
  await fs.writeFile(notesPath, JSON.stringify(notes))
}

module.exports = { addNote, removeNote, getNotes, renameNotes }