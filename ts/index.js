const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
    path.join(path.dirname(require.resolve('tslint-sonarts')), 'lib/rules'),
  ],
  extends: [
    './tslint-core.json',
    './tslint-microsoft-contrib.json',
    './tslint-sonarts.json'
  ],
};
