var express = require('express');
var router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const url = process.env.URL || 'mongodb://localhost:27017';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getAllStocks/:limit/:skip', function(req,res,next){
  if(req.params){
    limit = req.params.limit;
    skip = req.params.skip;
  }
  if(req.body){
    query = req.body;
  }
  connect(url)
  .then((client)=>{
    getDetails(client, query, limit, skip )
    .then((data) =>{
      res.send(data);
    }, (err)=>{ 
      console.log('one'+err);
      res.sendStatus(400).send(err)
    })
  },(err)=>{
    console.log('two'+err);
    res.sendStatus(400).json(err);
  })
});

router.get('/getCount',function(req,res,next){
  connect(url)
  .then((client)=>{
    getDetails(client, '{}', 0, 0 )
    .then((data) =>{
      sData = {
        'length':data.length
      }
      res.send(sData);
    }, (err)=>{ 
      console.log('one'+err);
      res.sendStatus(400).send(err)
    })
  },(err)=>{
    console.log('two'+err);
    res.sendStatus(400).json(err);
  })
});
function connect(url){
      return new Promise((resolve,reject)=>{
        mongoClient.connect(url,{useNewUrlParser:true}, (err,client)=>{
             if(err){
               reject(err);
             }
             else{
                resolve(client);
             }
        })
      });
}
function getDetails(client , query , limit, skip){
  return new Promise((resolve,reject)=>{
    let db = client.db('stocksapp');
    let collection = db.collection('stocksdetails');
    collection.find(query).skip(Number(skip)).limit(Number(limit)).toArray(function(error,document){
      if (error || !document) {
        console.log(error);
        reject(error);
      } else {
        resolve(document);
      }
    });
  })
}
function sendJSONResponse(code, json, res){
  res.sendStatus(code).json(json);
}
module.exports = router;
