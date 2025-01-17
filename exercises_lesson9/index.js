const express = require('express');
require('./models/db');
const bodyparser = require('body-parser');
require('dotenv').config();
const myIpAddress = process.env.MY_IP_ADDRESS;
const expenseController = require('./controllers/expenseController');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send(`
    <h2>Pamela's expense dashboard</h2>
    <h3>Click here to get access to the <b><a href="/expense/list">Database</a></b></h3>
  `);
});

app.use("/expense", expenseController);

app.listen(3000, myIpAddress, () => console.log('Server running at http://127.0.0.1:3000'));
