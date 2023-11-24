const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.get('/:difficulty/exact/:marks/:topicPercentages', questionController.getQuestions);

module.exports = router;
    