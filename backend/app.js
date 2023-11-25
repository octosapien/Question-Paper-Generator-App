  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  const helmet = require('helmet');
  const path = require('path');

  const questionRoutes = require('./routes/questionRoutes');
  const userRoutes = require('./routes/userRoutes');
  const quizRoutes = require('./routes/quizRoutes');

  const QuestionModel = require('./models/questionModel');
  const QuizModel = require('./models/quizModel');
  const UserModel = require('./models/userModel');

  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  app.use(cors());
  app.use(helmet());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  mongoose.connect('mongodb://localhost:27017/questionPaperGenerator', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });

  app.use('/api/quiz', quizRoutes);
  app.use('/api/questions', questionRoutes);
  app.use('/api/users', userRoutes);


  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  //-------------------------------------
  function getRandomCategory() {
    const categories = ['CategoryA', 'CategoryB', 'CategoryC'];
    const randomIndex = getRandomInt(0, categories.length - 1);
    return categories[randomIndex];
  }

  function getRandomDifficulty() {
    const difficulties = ['Easy', 'Medium', 'Hard'];
    const randomIndex = getRandomInt(0, difficulties.length - 1);
    return difficulties[randomIndex];
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to seed the database with 100 random questions
  async function seedQuestions() {
    try {
      const deletionResult = await QuestionModel.deleteMany({});
      for (let i = 1; i <= 200; i++) {
        const newQuestion = {
          questionText: `Question ${i} - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa delectus, ducimus consequatur aspernatur ad voluptatum dicta, quisquam accusamus eius adipisci rerum excepturi unde aliquam dolor, aut ea eligendi suscipit.`,
          tags: [`Tag${getRandomInt(1, 5)}`, `Tag${getRandomInt(1, 5)}`],
          category: getRandomCategory(),
          difficulty: getRandomDifficulty(),
          marks: getRandomInt(1, 15),
          alternatives: [
            'A : Option A',
            'B : Option B',
            'C : Option C',
            'D : Option D'
          ],
        };
        await QuestionModel.create(newQuestion);
      }
      console.log('Seeding completed!');
    } catch (err) {
      console.error('Error seeding:', err);
    }
  }
  
  seedQuestions();
  