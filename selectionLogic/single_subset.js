
const allQuestions = [
  {
      "questionText": "Question 1",
      "tags": [
          "tag3",
          "tag5"
      ],
      "category": "CategoryC",
      "difficulty": "Easy",
      "marks": 11
  },
  {
      "questionText": "Question 2",
      "tags": [
          "tag4",
          "tag4"
      ],
      "category": "CategoryB",
      "difficulty": "Hard",
      "marks": 20
  },
  {
      "questionText": "Question 3",
      "tags": [
          "tag3",
          "tag4"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 24
  },
  {
      "questionText": "Question 4",
      "tags": [
          "tag4",
          "tag5"
      ],
      "category": "CategoryC",
      "difficulty": "Hard",
      "marks": 2
  },
  {
      "questionText": "Question 5",
      "tags": [
          "tag3",
          "tag3"
      ],
      "category": "CategoryC",
      "difficulty": "Easy",
      "marks": 9
  },
  {
      "questionText": "Question 6",
      "tags": [
          "tag3",
          "tag5"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 2
  },
  {
      "questionText": "Question 7",
      "tags": [
          "tag1",
          "tag5"
      ],
      "category": "CategoryC",
      "difficulty": "Medium",
      "marks": 29
  },
  {
      "questionText": "Question 8",
      "tags": [
          "tag5",
          "tag3"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 29
  },
  {
      "questionText": "Question 9",
      "tags": [
          "tag5",
          "tag1"
      ],
      "category": "CategoryC",
      "difficulty": "Medium",
      "marks": 9
  },
  {
      "questionText": "Question 10",
      "tags": [
          "tag5",
          "tag4"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 12
  },
  {
      "questionText": "Question 11",
      "tags": [
          "tag3",
          "tag1"
      ],
      "category": "CategoryC",
      "difficulty": "Easy",
      "marks": 12
  },
  {
      "questionText": "Question 12",
      "tags": [
          "tag2",
          "tag3"
      ],
      "category": "CategoryC",
      "difficulty": "Medium",
      "marks": 11
  },
  {
      "questionText": "Question 13",
      "tags": [
          "tag4",
          "tag3"
      ],
      "category": "CategoryC",
      "difficulty": "Medium",
      "marks": 1
  },
  {
      "questionText": "Question 14",
      "tags": [
          "tag1",
          "tag5"
      ],
      "category": "CategoryB",
      "difficulty": "Hard",
      "marks": 23
  },
  {
      "questionText": "Question 15",
      "tags": [
          "tag4",
          "tag5"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 7
  },
  {
      "questionText": "Question 16",
      "tags": [
          "tag5",
          "tag2"
      ],
      "category": "CategoryC",
      "difficulty": "Easy",
      "marks": 11
  },
  {
      "questionText": "Question 17",
      "tags": [
          "tag1",
          "tag2"
      ],
      "category": "CategoryB",
      "difficulty": "Hard",
      "marks": 11
  },
  {
      "questionText": "Question 18",
      "tags": [
          "tag2",
          "tag1"
      ],
      "category": "CategoryC",
      "difficulty": "Hard",
      "marks": 3
  },
  {
      "questionText": "Question 19",
      "tags": [
          "tag1",
          "tag3"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 19
  },
  {
      "questionText": "Question 20",
      "tags": [
          "tag1",
          "tag4"
      ],
      "category": "CategoryC",
      "difficulty": "Easy",
      "marks": 16
  },
  {
      "questionText": "Question 21",
      "tags": [
          "tag1",
          "tag3"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 9
  },
  {
      "questionText": "Question 22",
      "tags": [
          "tag4",
          "tag4"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 22
  },
  {
      "questionText": "Question 23",
      "tags": [
          "tag1",
          "tag4"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 24
  },
  {
      "questionText": "Question 24",
      "tags": [
          "tag4",
          "tag3"
      ],
      "category": "CategoryC",
      "difficulty": "Medium",
      "marks": 9
  },
  {
      "questionText": "Question 25",
      "tags": [
          "tag5",
          "tag4"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 1
  },
  {
      "questionText": "Question 26",
      "tags": [
          "tag3",
          "tag2"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 1
  },
  {
      "questionText": "Question 27",
      "tags": [
          "tag1",
          "tag3"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 16
  },
  {
      "questionText": "Question 28",
      "tags": [
          "tag4",
          "tag3"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 5
  },
  {
      "questionText": "Question 29",
      "tags": [
          "tag2",
          "tag5"
      ],
      "category": "CategoryC",
      "difficulty": "Medium",
      "marks": 27
  },
  {
      "questionText": "Question 30",
      "tags": [
          "tag3",
          "tag3"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 14
  },
  {
      "questionText": "Question 31",
      "tags": [
          "tag2",
          "tag4"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 16
  },
  {
      "questionText": "Question 32",
      "tags": [
          "tag3",
          "tag4"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 15
  },
  {
      "questionText": "Question 33",
      "tags": [
          "tag5",
          "tag5"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 11
  },
  {
      "questionText": "Question 34",
      "tags": [
          "tag1",
          "tag4"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 25
  },
  {
      "questionText": "Question 35",
      "tags": [
          "tag1",
          "tag3"
      ],
      "category": "CategoryB",
      "difficulty": "Hard",
      "marks": 28
  },
  {
      "questionText": "Question 36",
      "tags": [
          "tag1",
          "tag5"
      ],
      "category": "CategoryB",
      "difficulty": "Hard",
      "marks": 19
  },
  {
      "questionText": "Question 37",
      "tags": [
          "tag4",
          "tag5"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 18
  },
  {
      "questionText": "Question 38",
      "tags": [
          "tag1",
          "tag2"
      ],
      "category": "CategoryA",
      "difficulty": "Hard",
      "marks": 20
  },
  {
      "questionText": "Question 39",
      "tags": [
          "tag5",
          "tag1"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 14
  },
  {
      "questionText": "Question 40",
      "tags": [
          "tag4",
          "tag2"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 17
  },
  {
      "questionText": "Question 41",
      "tags": [
          "tag3",
          "tag3"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 23
  },
  {
      "questionText": "Question 42",
      "tags": [
          "tag3",
          "tag2"
      ],
      "category": "CategoryC",
      "difficulty": "Easy",
      "marks": 24
  },
  {
      "questionText": "Question 43",
      "tags": [
          "tag2",
          "tag4"
      ],
      "category": "CategoryB",
      "difficulty": "Hard",
      "marks": 29
  },
  {
      "questionText": "Question 44",
      "tags": [
          "tag1",
          "tag5"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 8
  },
  {
      "questionText": "Question 45",
      "tags": [
          "tag3",
          "tag1"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 10
  },
  {
      "questionText": "Question 46",
      "tags": [
          "tag4",
          "tag3"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 20
  },
  {
      "questionText": "Question 47",
      "tags": [
          "tag3",
          "tag5"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 8
  },
  {
      "questionText": "Question 48",
      "tags": [
          "tag4",
          "tag1"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 26
  },
  {
      "questionText": "Question 49",
      "tags": [
          "tag4",
          "tag4"
      ],
      "category": "CategoryC",
      "difficulty": "Hard",
      "marks": 3
  },
  {
      "questionText": "Question 50",
      "tags": [
          "tag3",
          "tag2"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 29
  },
  {
      "questionText": "Question 51",
      "tags": [
          "tag4",
          "tag4"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 15
  },
  {
      "questionText": "Question 52",
      "tags": [
          "tag4",
          "tag2"
      ],
      "category": "CategoryB",
      "difficulty": "Hard",
      "marks": 14
  },
  {
      "questionText": "Question 53",
      "tags": [
          "tag4",
          "tag4"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 16
  },
  {
      "questionText": "Question 54",
      "tags": [
          "tag5",
          "tag2"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 6
  },
  {
      "questionText": "Question 55",
      "tags": [
          "tag4",
          "tag1"
      ],
      "category": "CategoryB",
      "difficulty": "Hard",
      "marks": 10
  },
  {
      "questionText": "Question 56",
      "tags": [
          "tag4",
          "tag1"
      ],
      "category": "CategoryC",
      "difficulty": "Hard",
      "marks": 7
  },
  {
      "questionText": "Question 57",
      "tags": [
          "tag1",
          "tag3"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 28
  },
  {
      "questionText": "Question 58",
      "tags": [
          "tag5",
          "tag5"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 29
  },
  {
      "questionText": "Question 59",
      "tags": [
          "tag4",
          "tag3"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 18
  },
  {
      "questionText": "Question 60",
      "tags": [
          "tag2",
          "tag2"
      ],
      "category": "CategoryC",
      "difficulty": "Easy",
      "marks": 26
  },
  {
      "questionText": "Question 61",
      "tags": [
          "tag4",
          "tag2"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 29
  },
  {
      "questionText": "Question 62",
      "tags": [
          "tag4",
          "tag5"
      ],
      "category": "CategoryB",
      "difficulty": "Hard",
      "marks": 6
  },
  {
      "questionText": "Question 63",
      "tags": [
          "tag3",
          "tag1"
      ],
      "category": "CategoryC",
      "difficulty": "Medium",
      "marks": 15
  },
  {
      "questionText": "Question 64",
      "tags": [
          "tag3",
          "tag1"
      ],
      "category": "CategoryC",
      "difficulty": "Medium",
      "marks": 2
  },
  {
      "questionText": "Question 65",
      "tags": [
          "tag1",
          "tag1"
      ],
      "category": "CategoryC",
      "difficulty": "Medium",
      "marks": 13
  },
  {
      "questionText": "Question 66",
      "tags": [
          "tag4",
          "tag4"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 23
  },
  {
      "questionText": "Question 67",
      "tags": [
          "tag4",
          "tag2"
      ],
      "category": "CategoryC",
      "difficulty": "Easy",
      "marks": 0
  },
  {
      "questionText": "Question 68",
      "tags": [
          "tag4",
          "tag3"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 11
  },
  {
      "questionText": "Question 69",
      "tags": [
          "tag2",
          "tag5"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 28
  },
  {
      "questionText": "Question 70",
      "tags": [
          "tag5",
          "tag5"
      ],
      "category": "CategoryC",
      "difficulty": "Hard",
      "marks": 18
  },
  {
      "questionText": "Question 71",
      "tags": [
          "tag4",
          "tag1"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 28
  },
  {
      "questionText": "Question 72",
      "tags": [
          "tag4",
          "tag1"
      ],
      "category": "CategoryC",
      "difficulty": "Medium",
      "marks": 22
  },
  {
      "questionText": "Question 73",
      "tags": [
          "tag5",
          "tag5"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 0
  },
  {
      "questionText": "Question 74",
      "tags": [
          "tag2",
          "tag3"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 1
  },
  {
      "questionText": "Question 75",
      "tags": [
          "tag1",
          "tag5"
      ],
      "category": "CategoryA",
      "difficulty": "Hard",
      "marks": 14
  },
  {
      "questionText": "Question 76",
      "tags": [
          "tag2",
          "tag5"
      ],
      "category": "CategoryA",
      "difficulty": "Hard",
      "marks": 25
  },
  {
      "questionText": "Question 77",
      "tags": [
          "tag3",
          "tag3"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 22
  },
  {
      "questionText": "Question 78",
      "tags": [
          "tag5",
          "tag3"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 1
  },
  {
      "questionText": "Question 79",
      "tags": [
          "tag1",
          "tag4"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 1
  },
  {
      "questionText": "Question 80",
      "tags": [
          "tag4",
          "tag5"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 5
  },
  {
      "questionText": "Question 81",
      "tags": [
          "tag4",
          "tag2"
      ],
      "category": "CategoryB",
      "difficulty": "Hard",
      "marks": 5
  },
  {
      "questionText": "Question 82",
      "tags": [
          "tag1",
          "tag2"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 21
  },
  {
      "questionText": "Question 83",
      "tags": [
          "tag1",
          "tag4"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 1
  },
  {
      "questionText": "Question 84",
      "tags": [
          "tag4",
          "tag5"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 4
  },
  {
      "questionText": "Question 85",
      "tags": [
          "tag3",
          "tag5"
      ],
      "category": "CategoryA",
      "difficulty": "Medium",
      "marks": 16
  },
  {
      "questionText": "Question 86",
      "tags": [
          "tag2",
          "tag4"
      ],
      "category": "CategoryA",
      "difficulty": "Easy",
      "marks": 17
  },
  {
      "questionText": "Question 87",
      "tags": [
          "tag3",
          "tag2"
      ],
      "category": "CategoryC",
      "difficulty": "Hard",
      "marks": 0
  },
  {
      "questionText": "Question 88",
      "tags": [
          "tag3",
          "tag2"
      ],
      "category": "CategoryA",
      "difficulty": "Hard",
      "marks": 24
  },
  {
      "questionText": "Question 89",
      "tags": [
          "tag1",
          "tag4"
      ],
      "category": "CategoryB",
      "difficulty": "Hard",
      "marks": 13
  },
  {
      "questionText": "Question 90",
      "tags": [
          "tag3",
          "tag5"
      ],
      "category": "CategoryA",
      "difficulty": "Hard",
      "marks": 11
  },
  {
      "questionText": "Question 91",
      "tags": [
          "tag2",
          "tag1"
      ],
      "category": "CategoryC",
      "difficulty": "Easy",
      "marks": 12
  },
  {
      "questionText": "Question 92",
      "tags": [
          "tag1",
          "tag2"
      ],
      "category": "CategoryB",
      "difficulty": "Hard",
      "marks": 20
  },
  {
      "questionText": "Question 93",
      "tags": [
          "tag1",
          "tag3"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 28
  },
  {
      "questionText": "Question 94",
      "tags": [
          "tag5",
          "tag4"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 6
  },
  {
      "questionText": "Question 95",
      "tags": [
          "tag5",
          "tag1"
      ],
      "category": "CategoryC",
      "difficulty": "Easy",
      "marks": 13
  },
  {
      "questionText": "Question 96",
      "tags": [
          "tag3",
          "tag2"
      ],
      "category": "CategoryC",
      "difficulty": "Easy",
      "marks": 24
  },
  {
      "questionText": "Question 97",
      "tags": [
          "tag1",
          "tag2"
      ],
      "category": "CategoryB",
      "difficulty": "Medium",
      "marks": 28
  },
  {
      "questionText": "Question 98",
      "tags": [
          "tag2",
          "tag5"
      ],
      "category": "CategoryB",
      "difficulty": "Easy",
      "marks": 2
  },
  {
      "questionText": "Question 99",
      "tags": [
          "tag3",
          "tag3"
      ],
      "category": "CategoryC",
      "difficulty": "Hard",
      "marks": 21
  },
  {
      "questionText": "Question 100",
      "tags": [
          "tag1",
          "tag1"
      ],
      "category": "CategoryC",
      "difficulty": "Hard",
      "marks": 11
  }
];
/*
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
*/
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