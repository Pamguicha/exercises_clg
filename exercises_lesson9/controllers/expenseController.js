const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Expense = mongoose.model('Expense');

router.get('/', (req, res) => {
//homepage
});


/* older pattern not longer supported by mongodb
router.get('/list', (req, res) => {
  Expense.find((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      console.logs('Error in retrieval:' + err); 
    }
    })
  })


*/


router.get('/list', async (req, res) => {
  try {
    const docs = await Expense.find();  // No callback, using async/await
    res.send(docs);
  } catch (err) {
    console.log('Error in retrieval: ' + err);
  }
});


//older pattern not longer supported by mongodb
/*router.get('/:id' , (req, res) => {
  Expense.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc)
    }
  })
})
  */

router.get('/:id', async (req, res, next) => {
  try {
    const doc = await Expense.findById(req.params.id); 
    if(!doc) {
      return res.status(404).send('Document not found');
    }
      res.send(doc);
    } catch (err) {
      console.log('error in retrieval: '  + err );
    }
  });
  

//function to insert or update values to the mongo database

router.post('/' , (req, res) => {
  if(!req.body._id || req.body._id == '') {
    insertRecord(req, res);
  } else {
    updateRecord(req,res);
  }
})


function insertRecord(req, res) {
  var expenseObj = new Expense();
  expenseObj.Expense = req.body.expense;
  expenseObj.Amount = req.body.amount;
  expenseObj.Date = req.body.date;
  expenseObj.Notes = req.body.notes;
  expenseObj.save((err, doc) => {
    if(!err) {
      res.redirect('expense/list');
    } else {
      console.log('Error during insert:' + err);
    }
  })
}

function updateRecord(req, res) {
   Expense.findOneAndUpdate(
    {_id: req.body._id},
    req.body,
    {new: true},
    (err, doc) => {
      if(!err) {
        res.redirect('expense/list');
      } else {
        console.log('Error during update:' + err);
      }
    }
   )
}

//I got an error when I try to insert data in postman Error: socket hang up


module.exports = router;