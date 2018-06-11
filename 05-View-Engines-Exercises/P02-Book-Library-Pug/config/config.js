const PATH = require('path');

module.exports = {
    development: {
        connectionString: 'mongodb://localhost:27017/BookLibrary',
        rootPath: PATH.normalize(PATH.join(__dirname, '../'))
    },
    production: {

    }
};