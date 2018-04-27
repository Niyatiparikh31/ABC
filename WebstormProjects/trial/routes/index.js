var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;




//require the Express module and call expressA
//var express = require('express');
var app = express()
//Following declares URI path / will cause the message Hello World to be sent
app.get('/', function (req, res) {res.send('Hello World!')})

//application will listen for requests on port number 300
app.listen(3000, function () {console.log('Example app listening on port 3000!')})
