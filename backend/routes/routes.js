module.exports = app => {
    const examples = require("../controllers/data.controller");
    var router = require("express").Router()

    router.post("/findOne", examples.findOneExample);
    router.post("/findAll", examples.findAllExample);
    router.post("/createUser", examples.createExample);
    router.post('/createEntry', examples.createExampleE);
    router.post('/updateEntry', examples.updateExample);

    app.use('', router)
}