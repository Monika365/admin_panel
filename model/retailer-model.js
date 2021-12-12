// user - name, age, address
const mongoose = require('../db');
const Schema = mongoose.Schema;

const retailerSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
    
});


module.exports = mongoose.model('retailer', retailerSchema);