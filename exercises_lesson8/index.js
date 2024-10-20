require('./models/db');


const express = require('express');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.json());


app.get('/', (req, res) => {
 res.json(req.body);
})




app.listen(3000, () => console.log('server started'));

