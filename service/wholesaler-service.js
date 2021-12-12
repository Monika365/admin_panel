const wholesalerDAO = require('../dao/wholesaler-dao');
const wholesalerService = {
    create:(payload)=>{
        console.log('Payload in service', payload);
       return new Promise((resolve,reject)=>{

        wholesalerDAO.create(payload).then(result=>{
                resolve({response:result, status:201});
            }).catch(error=>{
                reject({status:401,response:error});
            })

        })
    },
    getretailerListById:(payload)=>{
        console.log('Payload in service', payload);
       return new Promise((resolve,reject)=>{

        wholesalerDAO.getretailerListById(payload.id).then(result=>{
                resolve({response:result, status:200});
            }).catch(error=>{
                reject({status:401,response:error});
            })

        })
    }

}

module.exports = wholesalerService;