let test = require('tape');
let repeatCallback = require(process.argv[2]);

test('repeatCallback', function (t) {
    t.plan(10)
    repeatCallback(10, function () {
        t.pass('callback called')
    })
})