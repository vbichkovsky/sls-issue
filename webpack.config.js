const slsw = require('serverless-webpack');

module.exports = {
    target: 'node',
    entry: slsw.lib.entries,
    mode: 'production',
//    devtool: 'source-map'
};
