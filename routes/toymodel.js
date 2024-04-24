var express = require('express');
const ToyModelModel = require('../models/ToyModelModel');
const ToyType = require('../models/ToyTypeModel');
const ToyTypeModel = require('../models/ToyTypeModel');
var router = express.Router();

router.get('/', async(req, res) => {
    try {
        // Lấy danh sách các đối tượng ToyModel, populate trường toyType để có thông tin về loại đồ chơi
        var toymodels = await ToyModelModel.find().populate({ path: 'toyType', options: { strictPopulate: false } });
        res.render('toymodel/index', { toymodels: toymodels});
    } catch (error) {
        console.error('Error retrieving Toy Models:', error);
        res.status(500).send('Error retrieving Toy Models');
    }
})


router.get('/list', async(req, res) => {
    var toymodels = await ToyModelModel.find();
    var toyType = await ToyTypeModel.find();
    res.render('toymodel/list', { toymodels : toymodels,toyType:toyType, title : 'Toy Models' } )
})

router.get('/detail/:id', async (req, res) => {
    var toymodel = await ToyModelModel.findById(req.params.id)
    //res.send(phone)
    res.render('toymodel/detail', { toymodel : toymodel } )
})

router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await ToyModelModel.findByIdAndDelete(id);
    console.log('Delete Toy Model succeed');
    res.redirect('/toymodel');
 })

router.get('/add', async (req, res) => {
    var toymodels = await ToyModelModel.find({});
    var types = await ToyTypeModel.find({})
    res.render('toymodel/add',{toymodels,types});
 })
 
// Để thêm đồ chơi mới với loại đồ chơi
router.post('/add', async (req, res) => {
    var toymodel = req.body;
    await ToyModelModel.create(toymodel)
    res.redirect('/toymodel');
});


 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toymodel = await ToyModelModel.findById(id);
    res.render('toymodel/edit', { toymodel: toymodel });
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toymodel = req.body;
    await ToyModelModel.findByIdAndUpdate(id, toymodel);
    console.log('Update Toy Model succeed !');
    res.redirect('/toymodel');
 })


 router.post('/search', async(req, res) => {
    var keyword = req.body.name;
    var toymodels = await ToyModelModel.find({name: new RegExp(keyword, "i")});
    res.render('toymodel/list', {toymodels : toymodels});

})
router.post('/search1', async(req, res) => {
    var keyword = req.body.name;
    var toymodels = await ToyModelModel.find({name: new RegExp(keyword, "i")});
    res.render('toymodel/index', {toymodels : toymodels});

})

module.exports = router;
