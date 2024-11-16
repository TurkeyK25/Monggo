const express = require('express');

const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
const uri = 'mongodb+srv://Kien3:c6vlxRujPnPdKNSs@cluster0.0oqow.mongodb.net/Moto88';
const mongoose = require('mongoose');
const motoModel = require('./autoModel');
const autoModel = require('./autoModel');
app.get('/', async(req, res) => {
    await mongoose.connect(uri)
    let autos = await autoModel.find();
    console.log(autos);
    res.send(autos);
})
app.get('/add_xe', async(req, res) => {
    await mongoose.connect(uri);
    let auto = {
        ten: 'PKL 1',
        namSx: '2000',
        hangsx: 'Ducati 1',
        gia: '5000',
    }
    let kq = await autoModel.create(auto);
    console.log(kq);
    let autos = await autoModel.find();
    console.log(autos);
    res.send(autos);
})
app.get('/delete_xe/:id', async(req, res) => {
    await mongoose.connect(uri);
    let id = req.params.id;
    console.log(id);
    await autoModel.deleteOne({ _id: id });
    res.redirect('../')
})
app.get('/update_xe/:ten', async(req, res) => {
    await mongoose.connect(uri);
    console.log('Ket noi DB thanh cong');
    let tenXe = req.params.ten;
    console.log(tenXe);
    let tenxeMoi = tenXe + 'Phien ban moi 2024';
    await autoModel.updateOne({ ten: tenXe }, { ten: tenxeMoi });
    let xehois = await autoModel.find({});
    res.send(xehois);
})