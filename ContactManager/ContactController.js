
const Contact = require('./ContactModel');

const Controller = {};
Controller.get = function (req, res, next) {
    return Contact.findById(req.params.id, function (err, contact) {
        if (err) {
            return res.status(500).end();
        }
        else if (!contact) {
            return res.status(404).end();
        }
        else {
            return res.json(contact);
        }
    })
};
Controller.create = function (req, res) {
    console.log(req.body)
    return Contact.create(req.body, function (err, contact) {
        if (err) {
            return res.status(500).end();
        }
        else {
            return res.json(contact);
        }
    })
};
module.exports = Controller;