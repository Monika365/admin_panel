const SettleExpenseModel = require('../model/settle-expense-model');
const SettleExpenseDAO = {
    create:(payload)=>{
        console.log('Payload in dao', payload);

        return new SettleExpenseModel({
           groupId:payload.groupId,
           members:payload.members,
           totalExpense:payload.totalExpense
        }).save();//
    },
    
}

module.exports = SettleExpenseDAO;





