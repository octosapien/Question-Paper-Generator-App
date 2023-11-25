const util = require('util');


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
    marks:1+ Math.floor(Math.random() * 30) // Random marks between 1 to 30
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
  
  function generatePaper(req) {
    const totalMarks = req.total;
    const basis = req.basis;
    let partitions = {};


    if(basis=="tags"){
        let filteredQuestions={};
        const addedQuestions = new Set();
        const totalQuestionCount = allQuestions.length;
        const tagCount = tags.length;

        tags.forEach(tag => {
        filteredQuestions[tag] = [];

        allQuestions.forEach(question => {
            const questionText = question.questionText;
            const uniqueTags = new Set(question.tags);
            const questionTagCount = uniqueTags.size;
            const maxAllowedTagCount = Math.floor(tagCount * 0.5); // 30% of all tags count

            if (
            !addedQuestions.has(questionText) &&
            uniqueTags.has(tag) &&
            (questionTagCount !== 1) &&
            questionTagCount <= maxAllowedTagCount &&
            filteredQuestions[tag].length <= totalQuestionCount / tagCount
            ) {
            filteredQuestions[tag].push(question);
            addedQuestions.add(questionText);
            }
        });
        });
        for (let key in req.distribution) {
            // const filtered = allQuestions.filter(q => q[basis] == key);
            const weightage = Math.floor(req.distribution[key] * totalMarks / 100);
            console.log(weightage," ",key," ",basis," ",filteredQuestions[key])
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

//   // Example usage as per difficulty 
//   const paperPartitions = generatePaper(
//     {
//         total:50, 
//         basis:"difficulty", 
//         distribution:{ "Easy": 10, "Medium": 40, "Hard": 50 }
//     });
//       // Example usage as per difficulty 
//   const paperPartitions2 = generatePaper(
//     {
//         total:80, 
//         basis:"category", 
//         distribution:{ "CategoryA": 30, "CategoryB": 40, "CategoryC": 30 }
//     });
    // Example usage as per difficulty 
    const paperPartitions3 = generatePaper(
    {
        total:100, 
        basis:"tags", 
        distribution:{ "tag1": 10, "tag2": 10, "tag3": 10, "tag4": 10 ,"tag5":60 }
    });
//   console.dir(paperPartitions);
console.log(util.inspect(paperPartitions3, { showHidden: false, depth: null }));


//[`tag${5}-partitions`]
//paperPartitions3[`tag${1}-partitions`],