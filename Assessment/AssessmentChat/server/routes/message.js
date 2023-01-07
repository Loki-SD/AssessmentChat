const router = require("express").Router();
const { addMessage, getMessages } = require("../controllers/messageController");

router.post("/addMessage/", addMessage);
router.post("/getMessages/", getMessages);

module.exports = router;
