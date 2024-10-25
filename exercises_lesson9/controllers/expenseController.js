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


const insertRecord = async (req, res) => {
  try{

  var newExpense = new Expense ( {
  expense: req.body.expense,
  amount: req.body.amount,
  date: req.body.date,
  notes:  req.body.notes
  });

  const savedExpense = await newExpense.save();
  res.status(200).json(savedExpense);
} catch(error) {
res.status(500).json({message: error.message});
}
};

async function updateRecord(req, res){
  try{
    const updatedExpense = await Expense.findOneAndUpdate(
    {_id: req.body._id},
    req.body,
    {new: true},
    );
      if(updatedExpense) {
        res.redirect('expense/list');
      } else {
        console.log('Error during update');
        res.status(404).send('Expense not found');
      }
    } catch (err) {
      console.log('Error during update' + err);
      res.status(500).send('Error updating expense');
    }
  }

router.delete('/delete/:id', async (req, res) => {
  try {
    await Expense.findOneAndDelete({ _id: req.params.id });
    res.redirect('expense/list');
  } catch (err) {
    console.log('Error during deletion: ' + err);
    res.status(500).send('Error occurred during deletion');
  }
});




module.exports = router;