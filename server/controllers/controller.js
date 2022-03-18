const Userdb = require('../models/model');
const getUsers = (req, res) => {
    Userdb.find()
        .then(result => {
            console.log('result:', result);
            res.send(result.length > 0 ? result : "No users");
        })
        .catch(err => {
            console.log(err);
        })
}
module.exports = { getUsers };
