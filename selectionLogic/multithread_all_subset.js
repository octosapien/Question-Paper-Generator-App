const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');



function findSubsetsInRange(allQuestions, start, end, totalMarks) {
  const dp = Array.from({ length: totalMarks + 1 }, () => Array(end - start + 1).fill(false));
  const subsets = [];

  for (let i = 0; i <= end - start; i++) {
    dp[0][i] = true;
  }

  for (let i = 1; i <= totalMarks; i++) {
    for (let j = 1; j <= end - start; j++) {
      dp[i][j] = dp[i][j - 1];
      if (allQuestions[start + j - 1].marks <= i) {
        dp[i][j] = dp[i][j] || dp[i - allQuestions[start + j - 1].marks][j - 1];
      }
    }
  }

//   const constructPapers = (total, idx, currentPapers) => {
//     if (total === 0) {
//       subsets.push(currentPapers.slice());
//       return;
//     }

//     if (idx === 0 || total < 0 || !dp[total][idx]) {
//       return;
//     }

//     if (dp[total][idx - 1]) {
//       constructPapers(total, idx - 1, currentPapers);
//     }

//     if (total >= allQuestions[start + idx - 1].marks && dp[total - allQuestions[start + idx - 1].marks][idx - 1]) {
//       currentPapers.push(allQuestions[start + idx - 1]);
//       constructPapers(total - allQuestions[start + idx - 1].marks, idx - 1, currentPapers);
//       currentPapers.pop();
//     }
//   };

const constructPapers = (total, idx, currentPapers) => {
    const stack = [];
    stack.push({ total, idx, currentPapers });
  
    while (stack.length) {
      const { total, idx, currentPapers } = stack.pop();
  
      if (total === 0) {
        subsets.push(currentPapers.slice());
        continue;
      }
  
      if (idx === 0 || total < 0 || !dp[total][idx]) {
        continue;
      }
  
      if (dp[total][idx - 1]) {
        stack.push({ total, idx: idx - 1, currentPapers: currentPapers.slice() });
      }
  
      if (total >= allQuestions[start + idx - 1].marks && dp[total - allQuestions[start + idx - 1].marks][idx - 1]) {
        const newPapers = currentPapers.slice();
        newPapers.push(allQuestions[start + idx - 1]);
        stack.push({ total: total - allQuestions[start + idx - 1].marks, idx: idx - 1, currentPapers: newPapers });
      }
    }
  };
  

  constructPapers(totalMarks, end - start, []);

  return subsets;
}

if (isMainThread) {
  
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
        marks: Math.floor(Math.random() * 30) // Random marks between 1 to 30
      };
      allQuestions.push(question);
    }
    

  const totalMarks = 100;

  const chunkSize = Math.ceil(allQuestions.length / 4); // Split the task into chunks

  for (let i = 0; i < 4; i++) {
    const start = i * chunkSize;
    const end = Math.min((i + 1) * chunkSize, allQuestions.length);

    const worker = new Worker(__filename, {
      workerData: { allQuestions, start, end, totalMarks },
    });

    worker.on('message', (message) => {
      console.log(message); // Process the subsets received from workers
    });

    worker.on('error', (error) => {
      console.error(error);
    });

    worker.on('exit', (code) => {
      if (code !== 0) {
        console.error(`Worker stopped with exit code ${code}`);
      }
    });
  }
} else {
  const { allQuestions, start, end, totalMarks } = workerData;
  const subsets = findSubsetsInRange(allQuestions, start, end, totalMarks);
  parentPort.postMessage(subsets);
}
