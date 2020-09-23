const Form = require('../models/form.js');

const updateForm = (newForm,callback) => {
  Form.create(newForm, function(err, data) {
  if (err) {
    callback(err, null);
  } else {
    callback(null, data);
  }
 });
};


module.exports.updateForm = updateForm;