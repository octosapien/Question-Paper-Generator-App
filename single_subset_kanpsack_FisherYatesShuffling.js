

function shuffleArrayInPlace(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

const difficultyLevels = ['Easy', 'Medium', 'Hard'];
const categories = ['CategoryA', 'CategoryB', 'CategoryC'];
const all_tags = ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5'];

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

/*
const allQuestions=[
    {
        "questionText": "Question 1",
        "tags": [
            "Tag5",
            "Tag5"
        ],
        "category": "CategoryB",
        "difficulty": "Medium",
        "marks": 24
    },
    {
        "questionText": "Question 2",
        "tags": [
            "Tag5",
            "Tag2"
        ],
        "category": "CategoryB",
        "difficulty": "Hard",
        "marks": 28
    },
    {
        "questionText": "Question 3",
        "tags": [
            "Tag1",
            "Tag1"
        ],
        "category": "CategoryA",
        "difficulty": "Easy",
        "marks": 0
    },
    {
        "questionText": "Question 4",
        "tags": [
            "Tag2",
            "Tag1"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 0
    },
    {
        "questionText": "Question 5",
        "tags": [
            "Tag4",
            "Tag4"
        ],
        "category": "CategoryC",
        "difficulty": "Easy",
        "marks": 7
    },
    {
        "questionText": "Question 6",
        "tags": [
            "Tag1",
            "Tag5"
        ],
        "category": "CategoryB",
        "difficulty": "Easy",
        "marks": 5
    },
    {
        "questionText": "Question 7",
        "tags": [
            "Tag4",
            "Tag4"
        ],
        "category": "CategoryC",
        "difficulty": "Medium",
        "marks": 13
    },
    {
        "questionText": "Question 8",
        "tags": [
            "Tag1",
            "Tag2"
        ],
        "category": "CategoryB",
        "difficulty": "Medium",
        "marks": 22
    },
    {
        "questionText": "Question 9",
        "tags": [
            "Tag1",
            "Tag5"
        ],
        "category": "CategoryB",
        "difficulty": "Medium",
        "marks": 0
    },
    {
        "questionText": "Question 10",
        "tags": [
            "Tag1",
            "Tag1"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 19
    },
    {
        "questionText": "Question 11",
        "tags": [
            "Tag2",
            "Tag1"
        ],
        "category": "CategoryB",
        "difficulty": "Easy",
        "marks": 20
    },
    {
        "questionText": "Question 12",
        "tags": [
            "Tag2",
            "Tag2"
        ],
        "category": "CategoryA",
        "difficulty": "Easy",
        "marks": 13
    },
    {
        "questionText": "Question 13",
        "tags": [
            "Tag4",
            "Tag5"
        ],
        "category": "CategoryC",
        "difficulty": "Easy",
        "marks": 14
    },
    {
        "questionText": "Question 14",
        "tags": [
            "Tag5",
            "Tag5"
        ],
        "category": "CategoryC",
        "difficulty": "Easy",
        "marks": 27
    },
    {
        "questionText": "Question 15",
        "tags": [
            "Tag1",
            "Tag3"
        ],
        "category": "CategoryB",
        "difficulty": "Easy",
        "marks": 12
    },
    {
        "questionText": "Question 16",
        "tags": [
            "Tag5",
            "Tag3"
        ],
        "category": "CategoryB",
        "difficulty": "Medium",
        "marks": 24
    },
    {
        "questionText": "Question 17",
        "tags": [
            "Tag1",
            "Tag2"
        ],
        "category": "CategoryA",
        "difficulty": "Medium",
        "marks": 18
    },
    {
        "questionText": "Question 18",
        "tags": [
            "Tag1",
            "Tag3"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 3
    },
    {
        "questionText": "Question 19",
        "tags": [
            "Tag2",
            "Tag4"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 11
    },
    {
        "questionText": "Question 20",
        "tags": [
            "Tag2",
            "Tag2"
        ],
        "category": "CategoryA",
        "difficulty": "Easy",
        "marks": 18
    },
    {
        "questionText": "Question 21",
        "tags": [
            "Tag2",
            "Tag4"
        ],
        "category": "CategoryC",
        "difficulty": "Medium",
        "marks": 22
    },
    {
        "questionText": "Question 22",
        "tags": [
            "Tag2",
            "Tag5"
        ],
        "category": "CategoryB",
        "difficulty": "Hard",
        "marks": 4
    },
    {
        "questionText": "Question 23",
        "tags": [
            "Tag2",
            "Tag2"
        ],
        "category": "CategoryA",
        "difficulty": "Easy",
        "marks": 9
    },
    {
        "questionText": "Question 24",
        "tags": [
            "Tag4",
            "Tag4"
        ],
        "category": "CategoryA",
        "difficulty": "Easy",
        "marks": 23
    },
    {
        "questionText": "Question 25",
        "tags": [
            "Tag2",
            "Tag2"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 12
    },
    {
        "questionText": "Question 26",
        "tags": [
            "Tag2",
            "Tag2"
        ],
        "category": "CategoryA",
        "difficulty": "Easy",
        "marks": 11
    },
    {
        "questionText": "Question 27",
        "tags": [
            "Tag1",
            "Tag3"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 5
    },
    {
        "questionText": "Question 28",
        "tags": [
            "Tag2",
            "Tag3"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 1
    },
    {
        "questionText": "Question 29",
        "tags": [
            "Tag5",
            "Tag5"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 18
    },
    {
        "questionText": "Question 30",
        "tags": [
            "Tag3",
            "Tag1"
        ],
        "category": "CategoryB",
        "difficulty": "Hard",
        "marks": 28
    },
    {
        "questionText": "Question 31",
        "tags": [
            "Tag5",
            "Tag1"
        ],
        "category": "CategoryB",
        "difficulty": "Medium",
        "marks": 18
    },
    {
        "questionText": "Question 32",
        "tags": [
            "Tag1",
            "Tag3"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 12
    },
    {
        "questionText": "Question 33",
        "tags": [
            "Tag2",
            "Tag4"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 22
    },
    {
        "questionText": "Question 34",
        "tags": [
            "Tag4",
            "Tag3"
        ],
        "category": "CategoryB",
        "difficulty": "Medium",
        "marks": 0
    },
    {
        "questionText": "Question 35",
        "tags": [
            "Tag5",
            "Tag2"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 5
    },
    {
        "questionText": "Question 36",
        "tags": [
            "Tag2",
            "Tag4"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 16
    },
    {
        "questionText": "Question 37",
        "tags": [
            "Tag3",
            "Tag4"
        ],
        "category": "CategoryB",
        "difficulty": "Easy",
        "marks": 12
    },
    {
        "questionText": "Question 38",
        "tags": [
            "Tag4",
            "Tag5"
        ],
        "category": "CategoryC",
        "difficulty": "Easy",
        "marks": 24
    },
    {
        "questionText": "Question 39",
        "tags": [
            "Tag5",
            "Tag3"
        ],
        "category": "CategoryA",
        "difficulty": "Medium",
        "marks": 26
    },
    {
        "questionText": "Question 40",
        "tags": [
            "Tag2",
            "Tag1"
        ],
        "category": "CategoryB",
        "difficulty": "Medium",
        "marks": 23
    },
    {
        "questionText": "Question 41",
        "tags": [
            "Tag2",
            "Tag1"
        ],
        "category": "CategoryC",
        "difficulty": "Easy",
        "marks": 26
    },
    {
        "questionText": "Question 42",
        "tags": [
            "Tag5",
            "Tag3"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 8
    },
    {
        "questionText": "Question 43",
        "tags": [
            "Tag2",
            "Tag1"
        ],
        "category": "CategoryC",
        "difficulty": "Easy",
        "marks": 6
    },
    {
        "questionText": "Question 44",
        "tags": [
            "Tag1",
            "Tag5"
        ],
        "category": "CategoryA",
        "difficulty": "Easy",
        "marks": 6
    },
    {
        "questionText": "Question 45",
        "tags": [
            "Tag3",
            "Tag3"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 16
    },
    {
        "questionText": "Question 46",
        "tags": [
            "Tag5",
            "Tag3"
        ],
        "category": "CategoryC",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "questionText": "Question 47",
        "tags": [
            "Tag4",
            "Tag2"
        ],
        "category": "CategoryB",
        "difficulty": "Hard",
        "marks": 4
    },
    {
        "questionText": "Question 48",
        "tags": [
            "Tag5",
            "Tag2"
        ],
        "category": "CategoryA",
        "difficulty": "Medium",
        "marks": 24
    },
    {
        "questionText": "Question 49",
        "tags": [
            "Tag1",
            "Tag4"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 6
    },
    {
        "questionText": "Question 50",
        "tags": [
            "Tag3",
            "Tag2"
        ],
        "category": "CategoryC",
        "difficulty": "Medium",
        "marks": 7
    },
    {
        "questionText": "Question 51",
        "tags": [
            "Tag2",
            "Tag5"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 8
    },
    {
        "questionText": "Question 52",
        "tags": [
            "Tag5",
            "Tag4"
        ],
        "category": "CategoryA",
        "difficulty": "Medium",
        "marks": 10
    },
    {
        "questionText": "Question 53",
        "tags": [
            "Tag4",
            "Tag1"
        ],
        "category": "CategoryB",
        "difficulty": "Medium",
        "marks": 26
    },
    {
        "questionText": "Question 54",
        "tags": [
            "Tag4",
            "Tag2"
        ],
        "category": "CategoryB",
        "difficulty": "Easy",
        "marks": 9
    },
    {
        "questionText": "Question 55",
        "tags": [
            "Tag2",
            "Tag5"
        ],
        "category": "CategoryB",
        "difficulty": "Hard",
        "marks": 21
    },
    {
        "questionText": "Question 56",
        "tags": [
            "Tag2",
            "Tag3"
        ],
        "category": "CategoryC",
        "difficulty": "Medium",
        "marks": 26
    },
    {
        "questionText": "Question 57",
        "tags": [
            "Tag4",
            "Tag3"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "questionText": "Question 58",
        "tags": [
            "Tag4",
            "Tag1"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 29
    },
    {
        "questionText": "Question 59",
        "tags": [
            "Tag2",
            "Tag4"
        ],
        "category": "CategoryC",
        "difficulty": "Easy",
        "marks": 8
    },
    {
        "questionText": "Question 60",
        "tags": [
            "Tag4",
            "Tag3"
        ],
        "category": "CategoryC",
        "difficulty": "Easy",
        "marks": 19
    },
    {
        "questionText": "Question 61",
        "tags": [
            "Tag5",
            "Tag3"
        ],
        "category": "CategoryA",
        "difficulty": "Medium",
        "marks": 18
    },
    {
        "questionText": "Question 62",
        "tags": [
            "Tag2",
            "Tag3"
        ],
        "category": "CategoryC",
        "difficulty": "Easy",
        "marks": 0
    },
    {
        "questionText": "Question 63",
        "tags": [
            "Tag5",
            "Tag2"
        ],
        "category": "CategoryB",
        "difficulty": "Medium",
        "marks": 21
    },
    {
        "questionText": "Question 64",
        "tags": [
            "Tag2",
            "Tag4"
        ],
        "category": "CategoryC",
        "difficulty": "Medium",
        "marks": 4
    },
    {
        "questionText": "Question 65",
        "tags": [
            "Tag1",
            "Tag3"
        ],
        "category": "CategoryB",
        "difficulty": "Easy",
        "marks": 26
    },
    {
        "questionText": "Question 66",
        "tags": [
            "Tag2",
            "Tag5"
        ],
        "category": "CategoryB",
        "difficulty": "Easy",
        "marks": 6
    },
    {
        "questionText": "Question 67",
        "tags": [
            "Tag3",
            "Tag3"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 6
    },
    {
        "questionText": "Question 68",
        "tags": [
            "Tag4",
            "Tag2"
        ],
        "category": "CategoryB",
        "difficulty": "Hard",
        "marks": 25
    },
    {
        "questionText": "Question 69",
        "tags": [
            "Tag1",
            "Tag4"
        ],
        "category": "CategoryC",
        "difficulty": "Medium",
        "marks": 7
    },
    {
        "questionText": "Question 70",
        "tags": [
            "Tag3",
            "Tag1"
        ],
        "category": "CategoryB",
        "difficulty": "Easy",
        "marks": 0
    },
    {
        "questionText": "Question 71",
        "tags": [
            "Tag2",
            "Tag3"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 27
    },
    {
        "questionText": "Question 72",
        "tags": [
            "Tag4",
            "Tag2"
        ],
        "category": "CategoryC",
        "difficulty": "Medium",
        "marks": 21
    },
    {
        "questionText": "Question 73",
        "tags": [
            "Tag1",
            "Tag5"
        ],
        "category": "CategoryB",
        "difficulty": "Medium",
        "marks": 17
    },
    {
        "questionText": "Question 74",
        "tags": [
            "Tag5",
            "Tag1"
        ],
        "category": "CategoryC",
        "difficulty": "Easy",
        "marks": 16
    },
    {
        "questionText": "Question 75",
        "tags": [
            "Tag3",
            "Tag1"
        ],
        "category": "CategoryB",
        "difficulty": "Easy",
        "marks": 14
    },
    {
        "questionText": "Question 76",
        "tags": [
            "Tag4",
            "Tag3"
        ],
        "category": "CategoryC",
        "difficulty": "Easy",
        "marks": 29
    },
    {
        "questionText": "Question 77",
        "tags": [
            "Tag2",
            "Tag1"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 2
    },
    {
        "questionText": "Question 78",
        "tags": [
            "Tag2",
            "Tag2"
        ],
        "category": "CategoryB",
        "difficulty": "Hard",
        "marks": 15
    },
    {
        "questionText": "Question 79",
        "tags": [
            "Tag1",
            "Tag1"
        ],
        "category": "CategoryA",
        "difficulty": "Medium",
        "marks": 21
    },
    {
        "questionText": "Question 80",
        "tags": [
            "Tag1",
            "Tag1"
        ],
        "category": "CategoryB",
        "difficulty": "Medium",
        "marks": 11
    },
    {
        "questionText": "Question 81",
        "tags": [
            "Tag4",
            "Tag3"
        ],
        "category": "CategoryA",
        "difficulty": "Medium",
        "marks": 5
    },
    {
        "questionText": "Question 82",
        "tags": [
            "Tag1",
            "Tag5"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 7
    },
    {
        "questionText": "Question 83",
        "tags": [
            "Tag3",
            "Tag3"
        ],
        "category": "CategoryA",
        "difficulty": "Medium",
        "marks": 21
    },
    {
        "questionText": "Question 84",
        "tags": [
            "Tag2",
            "Tag1"
        ],
        "category": "CategoryA",
        "difficulty": "Medium",
        "marks": 12
    },
    {
        "questionText": "Question 85",
        "tags": [
            "Tag4",
            "Tag4"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 7
    },
    {
        "questionText": "Question 86",
        "tags": [
            "Tag2",
            "Tag2"
        ],
        "category": "CategoryB",
        "difficulty": "Hard",
        "marks": 0
    },
    {
        "questionText": "Question 87",
        "tags": [
            "Tag2",
            "Tag1"
        ],
        "category": "CategoryA",
        "difficulty": "Medium",
        "marks": 6
    },
    {
        "questionText": "Question 88",
        "tags": [
            "Tag2",
            "Tag1"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 10
    },
    {
        "questionText": "Question 89",
        "tags": [
            "Tag4",
            "Tag2"
        ],
        "category": "CategoryB",
        "difficulty": "Hard",
        "marks": 18
    },
    {
        "questionText": "Question 90",
        "tags": [
            "Tag3",
            "Tag5"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 17
    },
    {
        "questionText": "Question 91",
        "tags": [
            "Tag2",
            "Tag5"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 20
    },
    {
        "questionText": "Question 92",
        "tags": [
            "Tag3",
            "Tag5"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 5
    },
    {
        "questionText": "Question 93",
        "tags": [
            "Tag5",
            "Tag2"
        ],
        "category": "CategoryC",
        "difficulty": "Medium",
        "marks": 28
    },
    {
        "questionText": "Question 94",
        "tags": [
            "Tag2",
            "Tag2"
        ],
        "category": "CategoryB",
        "difficulty": "Hard",
        "marks": 19
    },
    {
        "questionText": "Question 95",
        "tags": [
            "Tag4",
            "Tag3"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 12
    },
    {
        "questionText": "Question 96",
        "tags": [
            "Tag5",
            "Tag2"
        ],
        "category": "CategoryC",
        "difficulty": "Medium",
        "marks": 5
    },
    {
        "questionText": "Question 97",
        "tags": [
            "Tag4",
            "Tag5"
        ],
        "category": "CategoryC",
        "difficulty": "Easy",
        "marks": 13
    },
    {
        "questionText": "Question 98",
        "tags": [
            "Tag2",
            "Tag5"
        ],
        "category": "CategoryA",
        "difficulty": "Hard",
        "marks": 10
    },
    {
        "questionText": "Question 99",
        "tags": [
            "Tag2",
            "Tag2"
        ],
        "category": "CategoryB",
        "difficulty": "Easy",
        "marks": 9
    },
    {
        "questionText": "Question 100",
        "tags": [
            "Tag1",
            "Tag5"
        ],
        "category": "CategoryC",
        "difficulty": "Hard",
        "marks": 8
    }
];
*/

    
  
    const selectedQuestions = [];
  
    const partitionSubsets = (questions, total) => {
    //   console.dir(questions);
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
  
    
  
  

  
  function generatePaper(req) {
    console.dir(req);
    const allQuestions=req["allQuestions"];
        shuffleArrayInPlace(allQuestions);
        const totalMarks = req.total;
        const basis = req.basis;
        const tags = Object.keys(req.distribution);
        let partitions = {};

        if(basis=="tags"){
            let filteredQuestions={"null1":['a','b','c']};
            const addedQuestions = new Set();
            
            const totalQuestionCount = allQuestions.length;
            
            const tagCount = tags.length;///or Object.keys(req.distribution).length;
            
            tags.forEach(tag => {
            filteredQuestions[tag] = [];

            allQuestions.forEach(question => {
                // const questionText = question.questionText;
                const uniqueTags = new Set(question.tags);
                console.log(uniqueTags);
                const questionTagCount = uniqueTags.size;
                const maxAllowedTagCount = Math.floor(tagCount * 0.7); // 70% of all tags count

                if (
                !addedQuestions.has(question) &&
                uniqueTags.has(tag) &&
                (questionTagCount <= maxAllowedTagCount &&
                filteredQuestions[tag].length <= totalQuestionCount / tagCount && 
                questionTagCount>1)
                ) {
                filteredQuestions[tag].push(question);
                addedQuestions.add(question);
                }
            });
            });
            console.log(filteredQuestions)
            for (let key in req.distribution) {
                // const filtered = allQuestions.filter(q => q[basis] == key);
                const weightage = Math.floor(req.distribution[key] * totalMarks / 100);
                console.log(weightage," ",key," ",basis," ",filteredQuestions[key])//,filteredQuestions[key]
                partitions[`${key}-partitions`] = partitionSubsets(filteredQuestions[key], weightage);
            }
            return partitions;
        }
        else{
            console.log("here")
            for (let key in req.distribution) {
                const filtered = allQuestions.filter(q => q[basis] == key);
                const weightage = Math.floor(req.distribution[key] * totalMarks / 100);
                console.log(weightage," ",key," ",basis)
                partitions[`${key}-partitions`] = partitionSubsets(filtered, weightage);
            }
            return partitions;
        }

        
    }
    module.exports = { generatePaper };

//   shuffleArrayInPlace(allQuestions);
//   const paper1 = generatePaper(
//     {
//         total:100, 
//         basis:"tags", 
//         distribution:{ "tag1": 10, "tag2": 10, "tag3": 10, "tag4": 10 ,"tag5":60 }
//     });
//     console.dir(paper1);
//     shuffleArrayInPlace(allQuestions);
//     const paper2 = generatePaper(
//         {
//             total:100, 
//             basis:"difficulty", 
//             distribution:{ "Easy": 20, "Medium": 30, "Hard":50 }
//         });
//   console.dir(paper2);


 
