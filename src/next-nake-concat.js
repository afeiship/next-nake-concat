(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var globby = require('globby');
  var path = require('path');
  var fs = require('fs');
  var concat = require('concat');

  nx.nakeConcat = function(inPatterns, inDest, inOptions) {
    var files = globby.sync(inPatterns, inOptions);
    fs.mkdirSync(path.dirname(inDest), { recursive: true });
    return concat(files, inDest);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.nakeConcat;
  }
})();
