// Schema

const mongoose = require('mongoose');

var expenseSchema = new mongoose.Schema({
    Expense: {
      type: String,
      required: 'This field is required'
    },
    Amount: {
      type: String,
      required: 'This field is required'
    },
     Date: {
      type: String,
      required: 'This field is required'
    },
     Notes: {
      type: String,
      required: 'This field is required'
    }
    
});

mongoose.model('Expense', expenseSchema);