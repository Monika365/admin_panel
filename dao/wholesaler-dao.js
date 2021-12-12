const wholesalerModel = require('../model/wholesaler-model');
const wholesalerDAO = {
    create:(payload)=>{
        console.log('Payload in dao', payload);

        return new wholesalerModel({
           name:payload.name,
           amount:payload.amount,
           retailer:payload.retailer
        }).save();//
    },
    getretailerListById:(id)=>{
        console.log('Payload in dao');

        return wholesalerModel.find({admin:id}).populate("retailer");
    
    }
}

module.exports = wholesalerDAO;