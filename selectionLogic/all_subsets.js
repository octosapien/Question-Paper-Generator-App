const allQuestions = [];

const difficultyLevels = ['Easy', 'Medium', 'Hard'];
const categories = ['CategoryA', 'CategoryB', 'CategoryC'];
const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'];

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

for (let i = 1; i <= 50; i++) {
  const question = {
    questionText: `Question ${i}`,
    tags: [getRandomElement(tags), getRandomElement(tags)],
    category: getRandomElement(categories),
    difficulty: getRandomElement(difficultyLevels),
    marks: Math.floor(Math.random() * 30) // Random marks between 1 to 10
  };
//   console.dir(question);
  allQuestions.push(question);
}

function findAllValidSubsets(allQuestions, totalMarks, difficultyDistribution) {
    const validSubsets = [];
    const currentSubset = [];
  
    const generateValidSubsets = (idx, marksLeft, difficultyCount) => {
      if (marksLeft === 0 && Object.values(difficultyCount).every(count => count === 0)) {
        validSubsets.push([...currentSubset]);
        return;
      }
  
      if (idx === allQuestions.length || marksLeft < 0) {
        return;
      }
  
      const question = allQuestions[idx];
  
      // If the current question can be included
      if (question.marks <= marksLeft && difficultyCount[question.difficulty] > 0) {
        currentSubset.push(question);
        difficultyCount[question.difficulty]--;
        generateValidSubsets(idx + 1, marksLeft - question.marks, difficultyCount);
        currentSubset.pop();
        difficultyCount[question.difficulty]++;
      }
  
      // Move to the next question
      generateValidSubsets(idx + 1, marksLeft, difficultyCount);
    };
  
    generateValidSubsets(0, totalMarks, { Easy: difficultyDistribution.easy, Medium: difficultyDistribution.medium, Hard: difficultyDistribution.hard });
  
    return validSubsets;
  }
  
  // Example usage
  const allValidSubsets = findAllValidSubsets(allQuestions, 200, { easy: 10, medium: 40, hard: 50 });
  console.log(allValidSubsets);
  