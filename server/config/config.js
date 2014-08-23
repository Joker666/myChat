var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: '',
        rootPath: rootPath,
        port: process.env.PORT || 8000
    },
    production: {
        db: '',
        rootPath: rootPath,
        port: process.env.PORT || 5000
    }
};