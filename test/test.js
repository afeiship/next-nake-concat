var nx = require('next-js-core2');
require('../src/next-nake-concat');

test('nx.nakeConcat', function() {
  nx.nakeConcat(['test/files/*.css'], 'dist/test.css');
});
