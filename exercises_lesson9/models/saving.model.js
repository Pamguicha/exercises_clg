// Schema

const mongoose = require('mongoose');

var savingSchema = new mongoose.Schema({
    savings: {
      type: String,
      required: 'This field is required'
    },
    amount: {
      type: String,
      required: 'This field is required'
    },
     date: {
      type: String,
      required: 'This field is required'
    },
     owner: {
      type: String,
      required: 'This field is required'
    },
    note: {
      type: String,
      required: 'This field is required'
    }
  }, {
    versionKey: false
  });

mongoose.model('Saving', savingSchema);

/*

savings
"rigging salary"
amount
"1000"
date
"11/10/24"
owner
"Sean"
note
"weekly saving full-time job october"

*/