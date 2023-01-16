module.exports = app => {
    const test = require("../controllers/data.controller");
    var router = require("express").Router()

    router.post("/test", test.testWallet);
    app.use('', router)
}