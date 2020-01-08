var express = require('express');
var router = express.Router();
const connection = require('../../helpers/db');

// router.post('/signup', function(req, res, next) {
//     res.send('I am in POST signup');
//   });
  
router.post('/signup', (req, res) => {
    // this is a const that changes the user's inputs into something right for database
    let usersData={
        email: req.body.email,
        password: req.body.password,
        name: req.body.firstName,
        lastname: req.body.lastName
    };
    console.log(usersData)
     
    connection.query('INSERT INTO users SET ?', usersData, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error saving user");
          } else {
            res.sendStatus(200);
          }
      });
  });

module.exports = router;