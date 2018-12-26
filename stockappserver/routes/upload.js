const csv = require('csvtojson');
const mongoClient = require('mongodb').MongoClient,
assert = require('assert');
const url = process.env.URL || 'mongodb://localhost:27017';
const IncomingForm = require('formidable').IncomingForm;

module.exports = function upload(req, res) {
    var form = new IncomingForm();
    form.keepExtensions = true;
    form.on('file', (field, file) => {
        // Do something with the file
        // e.g. save it to the database
        // you can access it using file.path
        //https://github.com/tithi021/node-mongodb-csv/blob/master/server.js
        //console.log(file);
        importData(file)
        .then(()=>{
                res.send("Great!")
        })
        .catch(err=>{
            res.send(err);
        });
    });
    form.on('end', () => {
        res.json();
    });
    form.parse(req);
};

function importData(file){
    return new Promise((reject,resolve)=>{
        mongoClient.connect(url, (err, client) => {
            if(err){
                reject(err);
            }else{
                console.log("Connected correctly to server");
                let db = client.db('stocksapp');
                insertDocuments(db,file.path, function () {
                  resolve();
                });
            }
          
           
          });
    });
}
const insertDocuments = (db,filePath, callback) => {

    //console.log(db);
    const csvFilePath = filePath;
    //console.log(filePath);
    let collection = db.collection('stocksdetails');
    csv()
    .fromFile(csvFilePath)
    .subscribe((jsonObj)=>{
            //console.log(jsonObj);
            return new Promise((resolve,reject)=>{
            collection.insertOne(jsonObj, (err, result) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else{
                   // console.log('done');
                    resolve(result);
                }
            });
        });
    })
    .on('error',(err)=>{
        console.log(err)
    })
    .on('done',(error)=>{
        //do some stuff
        console.log('finished!')
    })
  }