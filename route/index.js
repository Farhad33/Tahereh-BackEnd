const express = require('express');
const app = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const uploadPhoto = require('../util/uploadPhoto')
const db = require('../database')


app.get('/login', (req, res) => {
    res.send({ id: 1, name: 'Majid!' })
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
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/collections/:id', (req, res) => {
    db.getCollectionById(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
})

app.put('/collections/:id', upload.single('photo'), (req, res) => {
    const id = req.params.id
    req.body.id = id
    uploadPhoto(req, res, 'aboutme')
})

app.get('/collections/:id/products', (req, res) => {
    db.getProductsCollection(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/aboutme', (req, res) => {
    db.getAboutMe()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/products/:id', (req, res) => {
    db.getProductsById(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
})

app.put('/aboutme', upload.single('photo'), (req, res) => {
    uploadPhoto(req, res, 'aboutme')
})

module.exports = app;