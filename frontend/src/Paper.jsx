import React from 'react';
import './Paper.css'

function Paper({ questions }) {
  console.log(questions);


  const renderQuestions = (partition, partitionName) => (
   
    <div>
        <div key={partitionName} >
          {/* <h3>{partitionName}</h3> */}
          <ul style={{}}>
            {partition.map((question, index) => (
              <li style={{listStyle:'none', display:'flex', flexDirection:'row', background:'#205375', padding:'20px', margin:'10px',borderRadius:'20px'}} key={`${partitionName}-${index}`}>
                <h4 style={{ margin:'20px' }}>Q.{index + 1}</h4>
                <p style={{textAlign:'left'}}>{question.questionText}</p>
                <section>
                  <p style={{backgroundColor:'#7B66FF',borderRadius:'10px' ,padding:'2px 4px'}}>{question.category}</p>
                  <p style={{backgroundColor:'#1C82AD',borderRadius:'10px' ,padding:'2px 4px'}}>{question.difficulty}</p>
                  <p style ={{fontWeight:'bold', backgroundColor:'#77D970',borderRadius:'10px' ,padding:'2px 4px'}}>Marks: {question.marks}</p>
                </section>
                
              </li>
            ))}
          </ul>
      </div>
    </div>
   
  );

  return (
    <div>
      <h2>Question</h2>
      {Object.entries(questions).map(([partitionName, partition]) => (
        renderQuestions(partition, partitionName)
      ))}
    </div>
  );
}

export default Paper;
