const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question', 
  }],
});

const QuizModel = mongoose.model('Quiz', quizSchema);

module.exports = QuizModel;
