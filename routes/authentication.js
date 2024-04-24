var express = require('express');
const UserModel = require('../models/UserModel');
const RegisterModel = require('../models/RegisterModel');
var router = express.Router();


router.get('/login', function(req, res) {
    res.render('authentication/login');
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
        res.redirect('login');
      }
})

router.get('/register', (req, res) => {
    res.render('authentication/register');
} )

router.post('/register', async (req, res) => {
  try {
    const { username, name, email, password } = req.body;
    // Create a new document using the RegisterModel
   const register = await RegisterModel.create({ username, name, email, password });
    res.redirect('login');
    console.log('Add New User successfully !');
  } catch (error) {
      console.error(error);
      res.status(500).send('Registration failed. Please try again later.');
  }


})

module.exports = router;