const model = require('../models/user.model');
const getInfo = (req, res) => {
  model.find()
    .then(result => {
      console.log('result:', result);
      res.send(result.length > 0 ? result : "No users");
    })
    .catch(err => {
      console.log(err);
    })
}
module.exports = { getInfo };