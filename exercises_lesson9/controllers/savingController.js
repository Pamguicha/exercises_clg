const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Saving = mongoose.model('Saving');

router.get('/', (req, res) => {
//homepage
console.log('Welcome to my home page!');
});

router.get('/list', async (req, res) => {
  try {
    const docs = await Expense.find();  // No callback, using async/await
    res.send(docs);
  } catch (err) {
    console.log('Error in retrieval: ' + err);
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

  var newSaving = new Saving ( {
  savings: req.body.savings,
  amount: req.body.amount,
  date: req.body.date,
  owner: req.body.owner,
  notes:  req.body.notes
  });

  const savedSaving = await newSaving.save();
  res.status(200).json(savedSaving);
} catch(error) {
res.status(500).json({message: error.message});
}
};


async function updateRecord(req, res){
  try{
    const updatedSaving = await Saving.findOneAndUpdate(
    {_id: req.body._id},
    req.body,
    {new: true},
    );
      if(updatedSaving) {
        res.redirect('saving/list');
      } else {
        console.log('Error during update');
        res.status(404).send('Saving not found');
      }
    } catch (err) {
      console.log('Error during update' + err);
      res.status(500).send('Error updating expense');
    }
  }

router.delete('/delete/:id', async (req, res) => {
  try {
    await Saving.findOneAndDelete({ _id: req.params.id });
    res.redirect('saving/list');
  } catch (err) {
    console.log('Error during deletion: ' + err);
    res.status(500).send('Error occurred during deletion');
  }
});




module.exports = router;