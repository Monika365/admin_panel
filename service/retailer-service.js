const retailerDAO = require('../dao/reatiler-dao');

const retailerService = {
    register: (payload) => {
        console.log('Payload in service', payload);
        return new Promise(async (resolve, reject) => {
            
            retailerDAO.register(payload).then(result => {
                    resolve({ response: result, status: 201 });
                }).catch(error => {
                    reject({ status: 401, response: error });
                })


        })
    },
    
}

module.exports = retailerService;


