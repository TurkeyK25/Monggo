const monggoose = require('mongoose');
const CarSchema = new monggoose.Schema({
    ten: {
        type: String,
        required: true
    },
    namSx: {
        type: Number,

    },
    hangsx: {
        type: String,
        required: true
    },
    gia: {
        type: Number,
    }
});

const autoModel = monggoose.model('auto', CarSchema);

module.exports = autoModel;