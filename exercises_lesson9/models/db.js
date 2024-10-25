const  mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MyExpenseTracker')
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

require('./expense.model');
require('./saving.model');