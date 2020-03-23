const path = require('path');

module.exports = {
  rulesDirectory: [
    path.dirname(require.resolve('tslint-microsoft-contrib')),
    path.dirname(require.resolve('tslint-sonarts')) + '/lib/rules',
  ],
  extends: [
    './tslint-core.json',
    './tslint-microsoft-contrib.json',
    './tslint-sonarts.json'
  ],
};
