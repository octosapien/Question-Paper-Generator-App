const addQuestion = async (req, res) => {
  try {

    const { questionText, options, correctAnswer } = req.body;
    const newQuestion = await QuestionModel.create({
      questionText,
      options,
      correctAnswer,
    });

    res.status(201).json({ question: newQuestion });
  } catch (error) {
    console.error('Error creating new question:', error);
    res.status(500).json({ message: 'Error creating new question' });
  }
};


module.exports = {
  addQuestion,
 
};
