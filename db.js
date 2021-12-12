const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/wholesaler', ()=>{
    console.log('Connected to database successfully');
});

module.exports = mongoose;
