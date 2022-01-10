const express = require('express');
const app = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads' })
const renamePhoto = require('../util/rename')
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


app.get('/collections', (req, res) => {
    db.getAllCollections()
    .then(result => {
        console.log('result => ', result)
        res.send(result)
    })
    .catch(err => {
        console.log('err => ', err)
        res.send(err)
    })
})

app.get('/collections/:id', (req, res) => {
    db.getProductsCollection(req.params.id)
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.send(err)
    })
})

app.put('/collections', upload.single('photo'), (req, res) => {
    renamePhoto(req, res, 'collections')
})

module.exports = app;