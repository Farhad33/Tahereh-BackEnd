const express = require('express');
const app = express.Router();
const fs = require('fs')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const db = require('../database')


app.get('/majid', (req, res) => {
    res.send({id: 1, name: 'Majid!'})
})

app.post('/signup', (req, res) => {
    db.signup(req.body)
    .then(result => {
        res.send(result)
    })
})

app.get('/collection', (req, res) => {
    db.getAllCollections()
    .then(result => {
        res.send(result)
    })
})

app.post('/collection', upload.single('avatar'), (req, res) => {
    console.log("req.file", req.file);
    // fs.writeFileSync('11.jpg', photo);
    res.send({result: 'bla bla'})
})

module.exports = app;