const retailerModel = require('../model/retailer-model');
const retailerDAO = {
    register:(payload)=>{
        console.log('Payload in dao', payload);

        return new retailerModel ({
             id:payload.id,
             name:payload.name,
             phoneNumber:payload.phoneNumber
        }).save();
    },
}

module.exports =  retailerDAO;