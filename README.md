# Question Paper Generator App

The Question Paper Generator is a versatile application designed to create comprehensive and diverse sets of questions based on specific criteria, including difficulty levels, categories, and associated tags.

## Setup and Local Deployment

Follow these steps to set up and run the application locally:

1. **Clone the Repository**: Use `git clone <repo url>` to get a local copy of the repository.

2. **Start MongoDB Server**:
   - Open your command prompt.
   - Initiate the MongoDB server.
   - Run `mongoshell` for database manipulations.

3. **Backend Setup**:
   - Navigate to the `backend` folder.
   - Run `npm install` to install necessary dependencies.
   - Execute `node app.js` to start the backend server.

4. **Frontend Setup**:
   - Move to the `frontend` folder.
   - Run `npm install` to install required packages.
   - Execute `npm run dev` to start the frontend.

  Visit the pertinent address as directed by Vite to view and use the app.

  ### Snapshots of the working app:
![image](https://github.com/octosapien/Question-Paper-Generator-App/assets/114580332/4a866103-2735-4355-b273-ed9d591bfb2a)


## Workflow and Reviews/Thoughts :


The application is a question paper generator designed to create balanced and diverse sets of questions based on specified criteria, such as difficulty levels, categories, and tags associated with each question. It operates on a pool of questions stored in the system, with attributes like difficulty (Easy, Medium, Hard), categories (CategoryA, CategoryB, CategoryC), and tags (tag1, tag2, tag3, tag4, tag5).

The core functionality centers around a generatePaper function that accepts various parameters to generate question paper partitions. When the basis is "tags," the system intelligently selects questions based on their associated tags. The process involves calculating weighted distributions for each tag, ensuring a fair allocation of questions across different tags. To avoid repetition and ensure diversity, the algorithm maintains a record of added questions and filters questions per tag, considering their uniqueness and distribution limits.

The logic checks each tag's weightage, allowing questions to be selected from the pool accordingly, while maintaining equitability in the distribution across tags. The application ensures that each tag receives a proportional number of questions, striving for a balanced representation across all specified tags. This approach aims to prevent biases in the selection process and ensures that each tag contributes fairly to the generated question papers.

By employing this method, the system attempts to create question paper partitions that reflect a diverse range of tags while meeting the specified distribution percentages and total marks. The resultant output comprises sets of questions per tag, each set reflecting an equitable distribution based on the weighted distribution of tags, providing users with well-balanced question papers across various tag categories.

# Decision of Selection-cum-Filtering Algorithm:

The initially tried algorithms recursively generated adhering subsets for all variations using backtracking and then picked one from each generated list to form a question paper. This showcased readiness in presenting numerous available combinations of question papers . However, despite this apparent advantage, this algorithm suffered in terms of both code and time complexity. The process of generating all adhering subsets involved significant computational overhead, especially as the pool of questions expanded. This approach lacked scalability and posed challenges in managing the dynamic nature of question papers.

Contrastingly, the Fisher-Yates shuffling algorithm coupled with the knapsack search for a single adhering subset(optimized by means of Dynamic Programming) emerged as a more efficient strategy. By shuffling the question pool dynamically before each search for a single subset, this approach maintained code simplicity and streamlined the computational process. The advantage of reduced time complexity in searching for a single adhering subset overshadowed the upfront generation of multiple subsets. This method ensured a balanced representation of questions across specified criteria while efficiently managing the dynamic generation of criteria-following question papers.

Ultimately, the efficiency gained from the single subset knapsack search, empowered by Dynamic Programming preceded everytime by the Fisher-Yates shuffling algorithm, prevailed over the initially alluring but complex approach of generating and managing multiple adhering subsets. This streamlined method not only provided a diverse range of question papers but also optimized computational resources, making it a more pragmatic choice, especially in server-centric environments handling substantial question pools.

Thus, navigating through various selection algorithms for generating question papers based on different criteria like difficulty levels and shared bases such as tags involved exploring trade-offs between complexity and efficiency.

### Algorithm for generating all subsets adhering to criteria Variation-wise(eg:"Easy","Medium",... or "Tag1","Tag2",...) as well as in terms of Total sum:
```
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
    const partitions = {};

    for (let key in req.distribution) {
        const filtered = allQuestions.filter(q => q[basis] == key);
        const weightage = Math.floor(req.distribution[key] * totalMarks / 100);
        console.log(weightage," ",key," ",basis)
        partitions[`${key}-partitions`] = partitionSubsets(filtered, weightage);
    }

    return partitions;
}

  // Example usage as per difficulty 
  const paperPartitions = generatePaper(
    {
        total:50, 
        basis:"difficulty", 
        distribution:{ "Easy": 10, "Medium": 40, "Hard": 50 }
    });
      // Example usage as per difficulty 
  const paperPartitions2 = generatePaper(
    {
        total:80, 
        basis:"category", 
        distribution:{ "CategoryA": 30, "CategoryB": 40, "CategoryC": 30 }
    });

//   console.dir(paperPartitions);
console.log(util.inspect(paperPartitions2, { showHidden: false, depth: null }));
```

### Algorithm for Single Subset Knapsack Search (resulting subsets made dynamic by FisherYates Shuffling of question pool before starting search):
```

   function shuffleArrayInPlace(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

const difficultyLevels = ['Easy', 'Medium', 'Hard'];
const categories = ['CategoryA', 'CategoryB', 'CategoryC'];
const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'];

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

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

    
  
    const selectedQuestions = [];
  
    const partitionSubsets = (questions, total) => {
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
                console.log(weightage," ",key," ",basis," ")//,filteredQuestions[key]
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


  shuffleArrayInPlace(allQuestions);
  const paper1 = generatePaper(
    {
        total:100, 
        basis:"tags", 
        distribution:{ "tag1": 10, "tag2": 10, "tag3": 10, "tag4": 10 ,"tag5":60 }
    });
    console.dir(paper1);
    shuffleArrayInPlace(allQuestions);
    const paper2 = generatePaper(
        {
            total:100, 
            basis:"difficulty", 
            distribution:{ "Easy": 20, "Medium": 30, "Hard":50 }
        });
  console.dir(paper2);
```

# Navigating Non-Intersecting vs. Shared Criteria: Differential Challenges ('difficulty' vs 'Tags')

Managing criteria like difficulty levels, where questions are mutually exclusive to a single category, proved straightforward. Filtering questions into distinct subsets based on Easy, Medium, or Hard difficulty levels and applying a knapsack search algorithm was seamless, ensuring an equitable distribution across the specified difficulties.

However, addressing shared criteria like tags, where a question might encompass multiple tags and different questions could overlap in tag categories, posed substantial challenges. The simplistic filtering approach encountered a major hurdle. Early-filtered tags overshadowed and influenced subsequent filters, leading to an uneven and non-equitable distribution of questions across different tags. This imbalance significantly impacted the outcome of the knapsack search for adhering subsets.

To counteract this issue and ensure a fair distribution, meticulous scrutinization within the filtering process was implemented for each tag. Conditions were established to ensure fairness:

Ensuring each question contributed to a balanced representation across tags.
Limiting the dominance of early-filtered tags over others.
Imposing restrictions to avoid overwhelming dominance of any single tag in the filtering process.
Filtering questions to allow broader representation of tags, fostering diversity.
By imposing these conditions, the aim was to create a more balanced and even distribution of questions across various tags. This approach aimed to prevent any single tag from disproportionately influencing the selection process, thereby fostering a more equitable and diverse pool of questions across the specified tag-based criteria. This ensured that no tag faced an unsuccessful knapsack search and that each tag contributed questions and a Question-paper was made possible as per the user-requested distribution.

### Basic scrutinizations to enable some equitability of questions in tag-based filtering:

```
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
```







