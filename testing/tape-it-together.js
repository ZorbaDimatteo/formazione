

var test = require('tape')
var fancify = require(process.argv[2])

test('fancify', function (t) {
  t.equal(fancify('Oh no'), '~*~Oh no~*~', 'Wraps a string in ~*~')
  t.equal(fancify('Oh no', true), '~*~OH NO~*~', 'Optionally makes it allcaps')
  t.equal(fancify('Oh no', false, '%'), '~%~Oh no~%~', 'Optionally allows to set the character')
  t.end()
})

