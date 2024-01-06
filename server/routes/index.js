var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.status(200).json({ message: 'Received data' });
});
module.exports = router;
