/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var fs = require('fs');

exports.accessibilityTests = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  matchReports: function(test) {

    var actual;
    var expected;

    test.expect(2);

    actual = fs.readFileSync('reports/txt/index.txt', 'utf8');
    expected = fs.readFileSync('test/expected/txt/index.txt', 'utf8');
    test.equal(actual, expected, 'Should produce a TXT report without DOM element for a test file');

    actual = fs.readFileSync('reports/json/index.json', 'utf8');
    expected = fs.readFileSync('test/expected/json/index.json', 'utf8');
    test.equal(actual, expected, 'Should produce a JSON report without DOM element for a test file');

    test.done();
  }
};
