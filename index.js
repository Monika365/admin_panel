const express = require('express')
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./db');

app.use('/retailer', require('./controller/retailer-controller'));
app.use('/wholesaler', require('./controller/wholesaler-controller'));




// http://localhost:3000/users/register

app.listen(3000, () => {
  console.log('App listening at http://localhost:3000')
})




