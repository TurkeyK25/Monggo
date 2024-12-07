const express = require('express');
const router = express.Router();
module.exports = router;
router.get('/', (req, res) => {
    res.send('vao api mobile')
});
const mongoose = require('mongoose');
const autoModel = require('./model/DienThoai_07122024');
const COMMON = require('./COMMON');
router.get('/list', async(req, res) => {
    await mongoose.connect(COMMON.uri);
    let autos = await autoModel.find();
    console.log(autos);
    res.send(autos);
});
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.post('/add_dienthoai', async(req, res) => {
    await mongoose.connect(COMMON.uri);
    // let auto = {
    //     ten: 'PKL 1',
    //     namSx: '2000',
    //     hangsx: 'Ducati 1',
    //     gia: '5000',
    // }
    let auto = req.body;
    // console.log(auto);
    let kq = await autoModel.create(auto);
    console.log(kq);
    let autos = await autoModel.find();

    res.send(autos);
});
router.delete('/delete_dienthoai/:id', async(req, res) => {
    await mongoose.connect(COMMON.uri);
    let id = req.params.id;
    console.log(id);
    await autoModel.deleteOne({ _id: id });
    let autos = await autoModel.find();
    res.send(autos);
});
router.put('/update_dienthoai/:id', async(req, res) => {
    await mongoose.connect(COMMON.uri);
    console.log('Ket noi DB thanh cong');
    let id = req.params.id;
    let car = req.body;
    console.log(id);
    await autoModel.updateOne({ _id: id }, car);
    let xehois = await autoModel.find({});
    res.send(xehois);
})