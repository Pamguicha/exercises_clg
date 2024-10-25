require('./models/db');


const express = require('express');
const bodyparser = require('body-parser');

//it's better to add controller before express app
const expenseController = require('./controllers/expenseController');
const savingController = require('./controllers/savingController');
var cors = require('cors');  //cross origins resource sharing
const app = express();
app.use(cors);


app.use(bodyparser.urlencoded({extended: false})); // allow values such as strings or arrays
app.use(bodyparser.json());




app.get('/', (req, res) => {
 res.send(`
  <h2> Pamela's expense dashboard </h2>
  <h3> Click here to get access to the <b> <a href="/expense/list"> Database </a> <b> </h3>
  `);
})


app.listen(3000, () => console.log('server started at 3000'));

app.use("/expense", expenseController);
app.use("/saving", savingController);