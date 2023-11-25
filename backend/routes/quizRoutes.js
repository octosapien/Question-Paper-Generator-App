    const express = require('express');
    const router = express.Router();
    const quizController = require('../controllers/quizController');

    // router.get('/new', quizController.generateQuiz);
    router.post('/new', quizController.createNewQuiz);

    router.get('/:id', quizController.getQuizById);
    router.post('/:id', quizController.saveQuiz);

    // router.post('/:id', quizController.saveQuiz);

    module.exports = router;
