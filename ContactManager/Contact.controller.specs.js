const sinon = require('sinon');
const Controller = require('./ContactController')
const Contact = require('./ContactModel')
describe('Contacts Controller', function () {
    let req = {
        body: {
                "fname":"carry",
                "email":"carry@gmail.com",
                "phone":"293829382"
        },
        params: {
            id: "62bec379b9715e7f51a0b58b", 
        }
    },
        error = new Error({ error: "blah blah" }),
        res = {}, expectedResult;
describe('create', function () {
        beforeEach(function () {
            res = {
                json: sinon.spy(),
                status: sinon.stub().returns({ end: sinon.spy() })
            };
        });
        it('should return created vehicle obj', function () {
            expectedResult = req.body
            sinon.stub(Contact, 'create').yields(null, expectedResult);
            Controller.create(req, res);
            sinon.assert.calledWith(Contact.create, req.body);
            sinon.assert.calledWith(res.json, sinon.match({ fname: req.body.fname }));
            sinon.assert.calledWith(res.json, sinon.match({ email: req.body.email }));
        });
      
    });

/*describe('get', function () {
    beforeEach(function () {
        res = {
            json: sinon.spy(),
            status: sinon.stub().returns({ end: sinon.spy() })
        };
        expectedResult = req.body
    });
    it('should return vehicle obj',function () {
        sinon.stub(Vehicle, 'findById').yields(null, expectedResult);
        Controller.get(req, res);
        sinon.assert.calledWith(Vehicle.findById, req.params.id);
        sinon.assert.calledWith(res.json, sinon.match({ model: req.body.model }));
        sinon.assert.calledWith(res.json, sinon.match({ manufacturer: req.body.manufacturer }));
    });
    
});*/

describe('error', function () {
    beforeEach(function () {
        res = {
            json: sinon.spy(),
            status: sinon.stub().returns({ end: sinon.spy() })
        };
        expectedResult = req.body
    });
    it('should return 404 for non-existing vehicle id', function () {
        sinon.stub(Contact,'findById').yields(null, null);
        Controller.get(req, res);
        sinon.assert.calledWith(Contact.findById, req.params.id);
        sinon.assert.calledWith(res.status, 404);
        sinon.assert.calledOnce(res.status(404).end);
    });
    
});
});
