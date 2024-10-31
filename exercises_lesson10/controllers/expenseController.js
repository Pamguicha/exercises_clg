const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Expense = mongoose.model('Expense');


// Root route for `/expense`
router.get('/', (req, res) => {
  res.send("Welcome to my homepage!");
  console.log("Accessed the Expense API root");
});

// List all expenses
router.get('/list', async (req, res) => {
  try {
    const docs = await Expense.find();
    res.send(docs);
    console.log("Retrieved expense list");
  } catch (err) {
    console.log('Error in retrieval: ' + err);
    res.status(500).send('Error in retrieval');
  }
});

// Get expense by ID
router.get('/:id', async (req, res) => {
  try {
    const doc = await Expense.findById(req.params.id);
    if (!doc) {
      return res.status(404).send('Document not found');
    }
    res.send(doc);
    console.log(`Retrieved expense with ID: ${req.params.id}`);
  } catch (err) {
    console.log('Error in retrieval: ' + err);
    res.status(500).send('Error retrieving document');
  }
});

// Create or update an expense
router.post('/', (req, res) => {
  if (!req.body._id || req.body._id === '') {
    insertRecord(req, res);
  } else {
    updateRecord(req, res);
  }
});

// Insert a new expense record
const insertRecord = async (req, res) => {
  try {
    const newExpense = new Expense({
      expense: req.body.expense,
      amount: req.body.amount,
      date: req.body.date,
      notes: req.body.notes
    });
    const savedExpense = await newExpense.save();
    res.status(200).json(savedExpense);
    console.log("Inserted new expense record");
  } catch (error) {
    console.log("Error inserting record: " + error);
    res.status(500).json({ message: error.message });
  }
};

// Update an existing expense record
const updateRecord = async (req, res) => {
  try {
    const updatedExpense = await Expense.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    if (updatedExpense) {
      console.log("Updated expense record");
      res.redirect('/expense/list');
    } else {
      console.log('Error: Expense not found during update');
      res.status(404).send('Expense not found');
    }
  } catch (err) {
    console.log('Error during update: ' + err);
    res.status(500).send('Error updating expense');
  }
};

// Delete an expense by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedExpense = await Expense.findOneAndDelete({ _id: req.params.id });
    if(!deletedExpense) {
      return res.status(404).json({message: 'Expense not found'});
    }
   console.log(`Deleted expense with id: ${req.params.id}`);
   res.status(200).json({message: 'Expense deleted successfully', id: req.params.id });
  } catch (err) {
    console.log('Error during deletion: ' + err);
    res.status(500).send('Error occurred during deletion');
  }
});

module.exports = router;
