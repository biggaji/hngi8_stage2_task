const router = require("express").Router();
const { indexController } = require("../controllers");
const { processForm } = require("../controllers/resumeContact");

router.get('/', indexController);
router.post('/submit', processForm);

module.exports = router;