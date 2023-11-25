const { generatePaper } = require('../../single_subsets_FIsherYatesShuffling');
const QuestionModel = require('../models/questionModel');
// const generateQuiz = async (req, res) => {
//   try {
//     const formData = req.body; 
//     const newQuiz = generatePaper(formData);

//     res.json(newQuiz);
//   } catch (error) {
//     console.error('Error generating quiz:', error);
//     res.status(500).json({ message: 'Error generating quiz' });
//   }
// };  

const createNewQuiz = async (req, res) => {
  // console.dir(req);
    try {
      const formData = req.body;
      formData["allQuestions"]=await QuestionModel.find();
      // console.log(formData);
      const newPaper = generatePaper(formData);
      res.status(201).json({ paper: newPaper });
    } catch (error) {
      console.error('Error generating quiz:', error);
      res.status(500).json({ message: 'Error generating quiz' });
    }
  };
const getQuizById = async (req, res) => {
    try {
      const quizId = req.params.id;
      const quiz = await QuizModel.findById(quizId); 
  
      if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
  
      res.json(quiz);
    } catch (error) {
      console.error('Error fetching quiz by ID:', error);
      res.status(500).json({ message: 'Error fetching quiz' });
    }
  };
  
  const saveQuiz = (req, res) => {
    
    const quizId = req.params.id;
    
    
    res.send(`Quiz ${quizId} saved successfully`);
  };
module.exports = {

  createNewQuiz,
  getQuizById,
  saveQuiz
};
