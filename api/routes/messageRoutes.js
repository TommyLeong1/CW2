const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, messageController.createMessage);
router.get('/', authMiddleware, messageController.getMessages);

module.exports = router;