const fs = require('fs')
const path = require('path')
const db = require('../database')

async function uploadPhoto(req, res, dirctory) {
  if (req.file) {
    const newPath = path.join(global.appRoot, `./public/${dirctory}/${req.file.originalname}`);
    const oldPath = path.join(global.appRoot, req.file.path);
    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(oldPath, newPath, err => {
        if (err) {
          res.send({ status: 500, message: "Oops! Something went wrong!!", err })
        } else {
          const { name, photo_alt, description } = req.body
          const photo_src = `${dirctory}/${req.file.originalname}`
          db.editAboutMe(name, photo_alt, photo_src, description)
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
    const { name, photo_alt, description } = req.body
    db.editAboutMe(name, photo_alt, false, description)
    .then(result => {
      res.send({ status: 200, message: "Photo was uploaded.", result })
    })
    .catch(err => {
      res.send({status: 400, message: "We couldn't save it in DB", err})
    })
  }

}




module.exports = uploadPhoto