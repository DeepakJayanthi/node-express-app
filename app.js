const express = require('express')
const app = express()

const hostname = '0.0.0.0'    // allows access from remote computers
const port = 3002
const path = require('path'); 
app.use(express.static(__dirname + '/static')); 
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    }) 
    app.get('/contact', function (req, res) {
      res.sendFile(path.join(__dirname + '/contact.html'));
      }) 
      app.get('/gallery', function (req, res) {
        res.sendFile(path.join(__dirname + '/gallery.html'));
        }) 
      

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

