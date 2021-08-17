const router = require("express").Router();
const { indexController } = require("../controllers");

router.get('/', indexController);

module.exports = router;