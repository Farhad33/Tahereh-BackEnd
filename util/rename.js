const fs = require('fs')
const path = require('path')
const db = require('../database')

async function renamePhoto(req, res, dirctory) {
    const result = {
      status: 200,
      message: '',
      UrlEndPoint: `./public/${dirctory}/${req.file.originalname}`
    }

    const newPath = path.join(global.appRoot, `./public/${dirctory}/${req.file.originalname}`);
    const oldPath = path.join(global.appRoot, req.file.path);
    
    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(oldPath, newPath, err => {
        if (err) {
          res.send({ status: 500, message: "Oops! Something went wrong!", err })
        } else {
          const {name, photo_alt, id} = req.body
          const photo_src = `/public/${dirctory}/${req.file.originalname}`
          console.log('db %%%%');
          db.editCollection(name, photo_alt, photo_src, id)
          .then(result => {
            res.send({ status: 200, message: "Photo was uploaded.", result })
          })
        }
      })
    } else {
      fs.unlink (oldPath, err => {
        if (err) {
          res.send({ status: 500, message: "Oops! Something went wrong!", err })
        } else {
          res.send({ status: 403, message: "Only .png files are allowed!"})
        }
      })
    }

  }




module.exports = renamePhoto