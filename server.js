const express = require('express');
const app = express();
const port = 3004;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
const COMMON = require('./COMMON');
const uri = COMMON.uri;
const mongoose = require('mongoose');
const autoModel = require('./model/DienThoai_07122024');
const apiMobile = require('./api');
app.use('/api', apiMobile);
app.get('/', async(req, res) => {
    await mongoose.connect(uri)
    let autos = await autoModel.find();
    console.log(autos);
    res.send(autos);
});
app.post('/add_xe', async(req, res) => {
    await mongoose.connect(uri);
    // let auto = {
    //     ten: 'PKL 1',
    //     namSx: '2000',
    //     hangsx: 'Ducati 1',
    //     gia: '5000',
    // }
    let auto = req.body;
    console.log(auto);
    let kq = await autoModel.create(auto);
    console.log(kq);
    let autos = await autoModel.find();

    res.send(autos);
});
app.delete('/delete_xe/: id', async(req, res) => {
    await mongoose.connect(COMMON.uri);
    let id = req.params.id;
    console.log(id);
    await autoModel.deleteOne({ _id: id });
    res.redirect('../');
});
app.put('/update_xe/:id', async(req, res) => {
    await mongoose.connect(uri);
    console.log('Ket noi DB thanh cong');
    let tenXe = req.params.ten;
    console.log(tenXe);
    let tenxeMoi = tenXe + 'Phien ban moi 2024';
    await autoModel.updateOne({ ten: tenXe }, { ten: tenxeMoi });
    let xehois = await autoModel.find({});
    res.send(xehois);
})