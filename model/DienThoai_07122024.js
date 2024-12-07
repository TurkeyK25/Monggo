const monggoose = require('mongoose');
const CarSchema = new monggoose.Schema({
    ten_dienthoai_ph52718: {
        type: String,
        required: true
    },
    mota_ph52718: {
        type: String,
        required: true
    },
    hinh_anh_ph52718: {
        type: String,
        required: true,
        default: 0
    },
    ngay_nhap_ph52718: {
        type: String,
        required: true,
    },
    trang_thai_ph52718: {
        type: Number,
        required: true,
    }
});

const autoModel = monggoose.model('autos', CarSchema);

module.exports = autoModel;