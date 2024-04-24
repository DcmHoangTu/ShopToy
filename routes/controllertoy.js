var express = require('express');
const ControllerToyModel = require('../models/ControllerToyModel');
var router = express.Router();


// localhost:3001/controllertoy
router.get('/', async(req, res) => {
    var controllertoys = await ControllerToyModel.find();
    //res.send(students)
    //render ra file view: view/student/index.hbs 
    res.render('controllertoy/index', { controllertoys : controllertoys }); //
})

router.get('/list', async(req, res) => {
    var controllertoys = await ControllerToyModel.find();
    res.render('controllertoy/list', { controllertoys : controllertoys, title: 'Controller Toys' })
})


router.get('/detail/:id', async (req, res) => {
    var controllertoy = await ControllerToyModel.findById(req.params.id)
    //res.send(phone)
    res.render('controllertoy/detail', { controllertoy : controllertoy } )
})

router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await ControllerToyModel.findByIdAndDelete(id);
    console.log('Delete Controller Toy succeed');
    res.redirect('/controllertoy');
 })

router.get('/add', (req, res) => {
    res.render('controllertoy/add');
 })
 
 router.post('/add', async (req, res) => {
    var controllertoy = req.body;
    await ControllerToyModel.create(controllertoy);
    console.log('Add Controller Toy succeed !');
    res.redirect('/controllertoy');
 })

 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var controllertoy = await ControllerToyModel.findById(id);
    res.render('controllertoy/edit', { controllertoy : controllertoy });
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var controllertoy = req.body;
    await ControllerToyModel.findByIdAndUpdate(id, controllertoy);
    console.log('Update Controller Toy succeed !');
    res.redirect('/controllertoy');
 })

 router.post('/search', async(req, res) => {
    var keyword = req.body.name;
    var controllertoys = await ControllerToyModel.find({name: new RegExp(keyword, "i")});
    res.render('controllertoy/list', {controllertoys : controllertoys});

})
router.post('/search1', async(req, res) => {
    var keyword = req.body.name;
    var controllertoys = await ControllerToyModel.find({name: new RegExp(keyword, "i")});
    res.render('controllertoy/index', {controllertoys : controllertoys});

})


module.exports = router;