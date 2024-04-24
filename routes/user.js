var express = require('express');
const UserModel = require('../models/UserModel');
//const RegisterModel = require('../models/RegisterModel');
var router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', async (req, res) => {
    var login = await UserModel.findOne(
        {
          username: req.body.username,
          password: req.body.password
        }
      )
    
      //dieu huong web khi login success hoac login fail
      if(login) {
        res.redirect('/toymodel')
      } else {
        res.redirect('/login');
      }
})


router.get('/register', (req, res) => {
  res.render('/');
})



// router.post('/register', async(req, res) => {
//   var user = req.body;
//   await RegisterModel.create(user);
//   console.log('Add student success');
//   res.redirect('/login');
// })


module.exports = router;