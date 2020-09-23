const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
  name: String,
  email: String,
  birthDate: String,
  agreeBox: Boolean
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;

