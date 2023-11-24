const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  category: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  
});

const QuestionModel = mongoose.model('Question', questionSchema);

module.exports = QuestionModel;
