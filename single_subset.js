const allQuestions = [];

const difficultyLevels = ['Easy', 'Medium', 'Hard'];
const categories = ['CategoryA', 'CategoryB', 'CategoryC'];
const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'];

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

for (let i = 1; i <= 1000; i++) {
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
/*
function generatePaper(totalMarks, difficultyDistribution) {
    const { easy: easyPercent, medium: mediumPercent, hard: hardPercent } = difficultyDistribution;
  
    const easyCount = Math.floor((easyPercent / 100) * totalMarks);
    const mediumCount = Math.floor((mediumPercent / 100) * totalMarks);
    const hardCount = Math.floor((hardPercent / 100) * totalMarks);
  
    const easyQuestions = allQuestions.filter(question => question.difficulty === 'Easy');
    const mediumQuestions = allQuestions.filter(question => question.difficulty === 'Medium');
    const hardQuestions = allQuestions.filter(question => question.difficulty === 'Hard');
  
    const selectedQuestions = [];
  
    const selectQuestionsStrict = (questions, total) => {
      const dp = Array(total + 1).fill(0).map(() => Array(questions.length + 1).fill(false));
  
      for (let i = 0; i <= questions.length; i++) {
        dp[0][i] = true;
      }
  
      for (let i = 1; i <= total; i++) {
        for (let j = 1; j <= questions.length; j++) {
          dp[i][j] = dp[i][j - 1];
          if (i >= questions[j - 1].marks) {
            dp[i][j] = dp[i][j] || dp[i - questions[j - 1].marks][j - 1];
          }
        }
      }
  
      if (!dp[total][questions.length]) {
        return [];
      }
  
      let i = total;
      let j = questions.length;
      while (i > 0 && j > 0) {
        if (dp[i][j] && !dp[i][j - 1]) {
          selectedQuestions.push(questions[j - 1]);
          i -= questions[j - 1].marks;
        }
        j--;
      }
      return selectedQuestions.reverse();
    };
  
    const selectedEasy = selectQuestionsStrict(easyQuestions, easyCount);
    const selectedMedium = selectQuestionsStrict(mediumQuestions, mediumCount);
    const selectedHard = selectQuestionsStrict(hardQuestions, hardCount);
  
    if (
      selectedEasy.length === easyCount &&
      selectedMedium.length === mediumCount &&
      selectedHard.length === hardCount &&
      selectedEasy.length + selectedMedium.length + selectedHard.length === totalMarks
    ) {
      return [...selectedEasy, ...selectedMedium, ...selectedHard];
    }
  
    return [];
  }
  
  // Example usage
  const paper = generatePaper(100, { easy: 20, medium: 50, hard: 30 });
  */
  //-----------------------------------------------------------------------------------
  function generatePaper(totalMarks, difficultyDistribution) {
  const { easy: easyPercent, medium: mediumPercent, hard: hardPercent } = difficultyDistribution;

  const easyCount = Math.floor((easyPercent / 100) * totalMarks);
  const mediumCount = Math.floor((mediumPercent / 100) * totalMarks);
  const hardCount = Math.floor((hardPercent / 100) * totalMarks);

  const easyQuestions = allQuestions.filter(question => question.difficulty === 'Easy');
  const mediumQuestions = allQuestions.filter(question => question.difficulty === 'Medium');
  const hardQuestions = allQuestions.filter(question => question.difficulty === 'Hard');

  const selectedQuestions = [];

  const selectQuestionsStrict = (questions, total) => {
    const dp = Array(total + 1).fill(0).map(() => Array(questions.length + 1).fill(false));
    const selectedQuestions = []; 
    for (let i = 0; i <= questions.length; i++) {
      dp[0][i] = true;
    }

    for (let i = 1; i <= total; i++) {
      for (let j = 1; j <= questions.length; j++) {
        dp[i][j] = dp[i][j - 1];
        if (i >= questions[j - 1].marks) {
          dp[i][j] = dp[i][j] || dp[i - questions[j - 1].marks][j - 1];
        }
      }
    }

    if (!dp[total][questions.length]) {
      return [];
    }

    let i = total;
    let j = questions.length;
    while (i > 0 && j > 0) {
      if (dp[i][j] && !dp[i][j - 1]) {
        selectedQuestions.push(questions[j - 1]);
        i -= questions[j - 1].marks;
      }
      j--;
    }
    return selectedQuestions.reverse();
  };

  const selectedEasy = selectQuestionsStrict(easyQuestions, easyCount);
  const selectedMedium = selectQuestionsStrict(mediumQuestions, mediumCount);
  const selectedHard = selectQuestionsStrict(hardQuestions, hardCount);

  if (
    selectedEasy.length === easyCount &&
    selectedMedium.length === mediumCount &&
    selectedHard.length === hardCount &&
    selectedEasy.length + selectedMedium.length + selectedHard.length === totalMarks
  ) {
    return [...selectedEasy, ...selectedMedium, ...selectedHard];
  }

  return [...selectedEasy, ...selectedMedium, ...selectedHard];
}

// Example usage
const paper1 = generatePaper(200, { easy: 10, medium: 40, hard: 50 });
console.dir(paper1);