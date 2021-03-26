
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Application-level middleware to log request method and path
app.use(function(req, res, next) { 
    console.log(req.method, req.path); 
    next();
});

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {    
    res.send("<h1>Demo page Get</h1>");
});
app.post('/', function (req, res) {    
    res.send("<h1>Demo page Post</h1>");
});
app.put('/', function (req, res) {    
    res.send("<h1>Demo page Put</h1>");
});
app.delete('/', function (req, res) {    
    res.send("<h1>Demo page Delete</h1>");
})
app.get('/demo', function (req, res) {
    res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

