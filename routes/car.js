var express = require('express');
const CarToyModel = require('../models/CarToyModel');
var router = express.Router();


// localhost:3001/controllertoy
router.get('/', async(req, res) => {
    var car = await CarToyModel.find();
    //res.send(students)
    //render ra file view: view/student/index.hbs 
    res.render('car/index', { car : car }); //
})

router.get('/list', async(req, res) => {
    var car = await CarToyModel.find();
    res.render('car/list', { car : car, title: 'car' })
})


router.get('/detail/:id', async (req, res) => {
    var car = await CarToyModel.findById(req.params.id)
    //res.send(phone)
    res.render('car/detail', { car : car } )
})

router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await CarToyModel.findByIdAndDelete(id);
    console.log('Delete Car Toy succeed');
    res.redirect('/car');
 })

router.get('/add', (req, res) => {
    res.render('car/add');
 })
 
 router.post('/add', async (req, res) => {
    var car = req.body;
    await CarToyModel.create(car);
    console.log('Add Car Toy succeed !');
    res.redirect('/car');
 })

 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var car = await CarToyModel.findById(id);
    res.render('car/edit', { car : car });
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var car = req.body;
    await CarToyModel.findByIdAndUpdate(id, car);
    console.log('Update Car Toy succeed !');
    res.redirect('/car');
 })

 router.post('/search', async(req, res) => {
    var keyword = req.body.name;
    var car = await CarToyModel.find({name: new RegExp(keyword, "i")});
    res.render('car/list', {car : car});

})
router.post('/search1', async(req, res) => {
    var keyword = req.body.name;
    var car = await CarToyModel.find({name: new RegExp(keyword, "i")});
    res.render('car/index', {car : car});

})


module.exports = router;