//If you want to add additional keys later, use the Schema#add method.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    asteroid: {
      type: String,
      required: true },
     orbit: { 
        type: String,
        required: true },
    comment: {
    type: String,
    validate: [
      function(input) {
        return input.length >= 10;
      },
      "Typing notes may prevent information blackholes."
    ],
    trim: true,
    required: false
  },
  user: String,
  date: { type: Date, default: Date.now }
});
const Entry = mongoose.model("Entry", entrySchema);
module.exports = Entry;
