const path = require('path');

module.exports = {
  rulesDirectory: [
    path.dirname(require.resolve('codelyzer'))
  ],
  extends: [
    './tslint-codelyzer.json'
  ]
};
