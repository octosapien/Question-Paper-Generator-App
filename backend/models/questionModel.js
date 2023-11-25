const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  tags: {
    type: [{
      type: String,
      enum: ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5'],
    }],
    default: [],
  },
  category: {
    type: String,
    // required: true,
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
  alternatives:  {
    type: [String], 
    default: [],
  }

  
});

const QuestionModel = mongoose.model('Question', questionSchema);

module.exports = QuestionModel;
