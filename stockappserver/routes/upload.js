const IncomingForm = require('formidable').IncomingForm;

module.exports = function upload(req, res) {
    var form = new IncomingForm();
    form.on('file', (field, file) => {
        // Do something with the file
        // e.g. save it to the database
        // you can access it using file.path
        //https://github.com/tithi021/node-mongodb-csv/blob/master/server.js
        console.log(file);
    });
    form.on('end', () => {
        res.json();
    });
    form.parse(req);
};