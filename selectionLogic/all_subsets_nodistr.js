const allQuestions = [];

const difficultyLevels = ['Easy', 'Medium', 'Hard'];
const categories = ['CategoryA', 'CategoryB', 'CategoryC'];
const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'];

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

for (let i = 1; i <= 100; i++) {
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

function findAllValidPapers(allQuestions, totalMarks, difficultyDistribution) {
    const dp = Array.from({ length: totalMarks + 1 }, () => Array(allQuestions.length + 1).fill(false));
    const subsets = [];
  
    for (let i = 0; i <= allQuestions.length; i++) {
      dp[0][i] = true;
    }
  
    for (let i = 1; i <= totalMarks; i++) {
      for (let j = 1; j <= allQuestions.length; j++) {
        dp[i][j] = dp[i][j - 1];
        if (allQuestions[j - 1].marks <= i) {
          dp[i][j] = dp[i][j] || dp[i - allQuestions[j - 1].marks][j - 1];
        }
      }
    }
  
    const constructPapers = (total, idx, currentPapers) => {
      if (total === 0) {
        subsets.push(currentPapers.slice());
        return;
      }
  
      if (idx === 0 || total < 0 || !dp[total][idx]) {
        return;
      }
  
      if (dp[total][idx - 1]) {
        constructPapers(total, idx - 1, currentPapers);
      }
  
      if (total >= allQuestions[idx - 1].marks && dp[total - allQuestions[idx - 1].marks][idx - 1]) {
        currentPapers.push(allQuestions[idx - 1]);
        constructPapers(total - allQuestions[idx - 1].marks, idx - 1, currentPapers);
        currentPapers.pop();
      }
    };
  
    constructPapers(totalMarks, allQuestions.length, []);
  
    return subsets;
  }
  
  // Example usage
//   const allQuestions = [
//     { questionText: 'Q1', marks: 5, difficulty: 'Easy' },
//     { questionText: 'Q2', marks: 8, difficulty: 'Medium' },
//     { questionText: 'Q3', marks: 10, difficulty: 'Hard' },
//    
//   ];
  
  const totalMarks = 100;
  const difficultyDistribution = { easy: 20, medium: 50, hard: 30 };
  
  const result = findAllValidPapers(allQuestions, totalMarks, difficultyDistribution);
  console.log(result); 
  