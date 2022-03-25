const port = 3000;
const express = require('express')
const chalk = require('chalk');
const path = require('path');
const basePath = path.join(__dirname, 'pages');
const { addNote, getNotes, removeNote, renameNotes } = require('./notes.controller')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'pages')

app.use(express.urlencoded({
  extended: true,
}))

app.use(express.static(path.join(__dirname, 'public') ));
app.use(express.json())

app.get('/', async (req,res) => {
  res.render('index', {
    title: 'Title Ejs',
    notes: await getNotes(),
    createPopup: false,
  })
})

app.post('/', async (req, res) => {
  await addNote(req.body.title)
  res.render('index', {
    title: 'Title Ejs',
    notes: await getNotes(),
    createPopup: true,
  })
});

app.delete('/:id', async (req,res) => {
  await removeNote(req.params.id)
  res.render('index', {
    title: 'Title Ejs',
    notes: await getNotes(),
    createPopup: false,
  })
})

app.put('/:testArr', async (req,res) => {
  // const newTitle = req.params.testArr.split(',')
  // console.log(newTitle)
  await renameNotes(req.params.testArr)
  res.render('index', {
    title: 'Title Ejs',
    notes: await getNotes(),
    createPopup: false,
  })
})

app.listen(port, () => {
  console.log(chalk.bgBlue('server has started...'), `http://localhost:${port}/`)
})