const fs = require('fs')
const path = require('path')
const db = require('../database')

async function uploadPhoto(req, res, dirctory) {
  const { name, photo_alt, description, id } = req.body
  if (req.file) {
    const newPath = path.join(global.appRoot, `./public/${dirctory}/${req.file.originalname}`);
    const oldPath = path.join(global.appRoot, req.file.path);
    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(oldPath, newPath, err => {
        if (err) {
          res.send({ status: 500, message: "Oops! Something went wrong!!", err })
        } else {
          const photo_src = `${dirctory}/${req.file.originalname}`
          db.editProduct(name, photo_alt, photo_src, description, id)
            .then(result => {
              res.send({ status: 200, message: "Photo was uploaded.", result })
            })
            .catch(err => {
              res.send({status: 400, message: "We couldn't save it in DB", err})
            })
        }
      })
    } else {
      fs.unlink(oldPath, err => {
        if (err) {
          res.send({ status: 500, message: "Oops! Something went wrong!", err })
        } else {
          res.send({ status: 403, message: "Only .png files are allowed!" })
        }
      })
    }
  } else {
    db.editProduct(name, photo_alt, false, description, id)
    .then(result => {
      res.send({ status: 200, message: "Photo was uploaded.", result })
    })
    .catch(err => {
      res.send({status: 400, message: "We couldn't save it in DB", err})
    })
  }

}




module.exports = uploadPhoto