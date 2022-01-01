const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
global.appRoot = path.resolve(__dirname);
const routes = require('./route')
const port = 4001

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }))
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use("/public", express.static(path.join(__dirname, 'public')));



app.use(function (req, res, next) {
    
  if (req.method === 'OPTIONS') {
      console.log('!OPTIONS');
      var headers = {};
      // IE8 does not allow domains to be specified, just the *
      // headers["Access-Control-Allow-Origin"] = req.headers.origin;
      headers["Access-Control-Allow-Origin"] = "*";
      headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
      headers["Access-Control-Allow-Credentials"] = false;
      headers["Access-Control-Max-Age"] = '86400'; // 24 hours
      headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
      res.writeHead(200, headers);
      res.end();
  } else {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
      next()
  }
})

app.use(routes)

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})