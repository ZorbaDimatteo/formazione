let qhttp = require('q-io/http');
let cos = qhttp.read("http://localhost:7000").then(function (id) {
    return id;
})
console.log(cos);
