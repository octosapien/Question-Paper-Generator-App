const util = require('util');


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

function partitionSubsets(arr, targetSum) {
    const dp = Array.from({ length: arr.length + 1 }, () => Array(targetSum + 1).fill(false));
    const subsets = [];
  
    for (let i = 0; i <= arr.length; i++) {
      dp[i][0] = true;
    }
  
    for (let i = 1; i <= arr.length; i++) {
      for (let j = 1; j <= targetSum; j++) {
        dp[i][j] = dp[i - 1][j];
        if (arr[i - 1].marks <= j) {
          dp[i][j] = dp[i][j] || dp[i - 1][j - arr[i - 1].marks];
        }
      }
    }
  
    const constructSubsets = (i, currentSum, subset, resultList) => {
      if (currentSum === 0) {
        resultList.push(subset.slice());
        return;
      }
  
      if (i === 0 || currentSum < 0 || !dp[i][currentSum]) {
        return;
      }
  
      if (dp[i - 1][currentSum]) {
        constructSubsets(i - 1, currentSum, subset, resultList);
      }
  
      if (currentSum >= arr[i - 1].marks && dp[i - 1][currentSum - arr[i - 1].marks]) {
        subset.push(arr[i - 1]);
        constructSubsets(i - 1, currentSum - arr[i - 1].marks, subset, resultList);
        subset.pop();
      }
    };
  
    constructSubsets(arr.length, targetSum, [], subsets);
  
    return subsets;
  }
  
  function generatePaper(totalMarks, difficultyDistribution) {
    // Your existing code for generating counts of easy, medium, and hard questions
    
    const easyCount = Math.floor((difficultyDistribution.easy / 100) * totalMarks);
    const mediumCount = Math.floor((difficultyDistribution.medium / 100) * totalMarks);
    const hardCount = Math.floor((difficultyDistribution.hard / 100) * totalMarks);

    const easyQuestions = allQuestions.filter(question => question.difficulty === 'Easy');
    const mediumQuestions = allQuestions.filter(question => question.difficulty === 'Medium');
    const hardQuestions = allQuestions.filter(question => question.difficulty === 'Hard');




    const easyPartitions = partitionSubsets(easyQuestions, easyCount);
    const mediumPartitions = partitionSubsets(mediumQuestions, mediumCount);
    const hardPartitions = partitionSubsets(hardQuestions, hardCount);
  
    return { easyPartitions, mediumPartitions, hardPartitions };
  }
  
  // Example usage
  const paperPartitions = generatePaper(200, { easy: 10, medium: 40, hard: 50 });
//   console.dir(paperPartitions);
console.log(util.inspect(paperPartitions.easyPartitions, { showHidden: false, depth: null }));