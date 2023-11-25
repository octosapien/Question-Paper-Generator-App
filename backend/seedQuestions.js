  const QuestionModel = require('./models/questionModel'); // Import your Question model

  // Function to get a random category from an array of options
  function getRandomCategory() {
      const categories = ['CategoryA', 'CategoryB', 'CategoryC'];
      const randomIndex = getRandomInt(0, categories.length - 1);
      return categories[randomIndex];
    }
    
    // Function to get a random difficulty level from an array of options
    function getRandomDifficulty() {
      const difficulties = ['Easy', 'Medium', 'Hard'];
      const randomIndex = getRandomInt(0, difficulties.length - 1);
      return difficulties[randomIndex];
    }
    
    // Function to generate a random integer within a range
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Function to seed the database with 100 random questions
    async function seedQuestions() {
      try {
        for (let i = 1; i <= 10; i++) {
          const newQuestion = {
            questionText: `Question ${i} - Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
            tags: [`Tag${getRandomInt(1, 5)}`, `Tag${getRandomInt(1, 5)}`],
            category: getRandomCategory(),
            difficulty: getRandomDifficulty(),
            marks: getRandomInt(10, 30),
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
    