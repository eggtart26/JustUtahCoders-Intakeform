const express = require('express');
const bodyParser = require('body-parser');
const controller = require("../database/controllers/form.js");

const app = express();
const PORT = 3038;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));


app.post('/form', (req, res) => {
  controller.updateForm(req.body, (err, newData) => {
    if (err) {
      res.json(err);
    } else {
      console.log("new data added");
      res.json(newData);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
