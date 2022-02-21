const express = require('express');
const app = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const uploadPhoto = require('../util/uploadPhoto')
const db = require('../database')


app.post('/signin', (req, res) => {
    const { email, password } = req.body
    db.findUserByEmail(email)
    .then(result => {
        if (result.length === 1) {
            if (result[0].password === password) {
                res.send({status: 200, message: "You have succesfully logged in"})    
            } else {
                res.send({status: 404, message: "We cound't login"})
            }
        } else {
            res.send({status: 404, message: "We cound't login"})
        }
    })
    .catch(err => {
        res.send({message: 'something went wrong!'})
    })
})

app.post('/signup', (req, res) => {
    db.createUser(req.body)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send({message: err.detail})
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

app.put('/collections/:id/products/:id', upload.single('photo'), (req, res) => {
    const id = req.params.id
    console.log('req.params => ', req.params)
    req.body.id = id
    uploadPhoto(req, res, 'product')
})

module.exports = app;