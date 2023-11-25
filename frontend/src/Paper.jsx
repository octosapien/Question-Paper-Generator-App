import React from 'react';
import './Paper.css'

function Paper({ questions , displayDetails}) {
  console.log(questions);
  console.log("here is",displayDetails);

  const renderQuestions = (partition, partitionName) => (
    
    <div>
        <div key={partitionName} >
          <h3>{partitionName}</h3>
          <ul style={{}}>
            {partition.map((question, index) => (
              <li style={{listStyle:'none', display:'flex', flexDirection:'row', background:'#205375', padding:'20px', margin:'10px',borderRadius:'20px'}} key={`${partitionName}-${index}`}>
                <h4 style={{ margin:'20px' }}>Q.{index + 1}</h4>
                <section>
                <p style={{textAlign:'left'}}>{question.questionText}</p>
                <p style={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}}><span style={{}}>
                  {Object.entries(question.alternatives).map(([key, value]) => (
                    <div key={key}>
                     <span style={{fontWeight:'bold'}}> {value}  &nbsp;</span>
                    </div>
                  ))}
                  </span></p>
                  <p stle={{}}><span>{Object.entries(question.tags).map(([key, value]) => (
                    <span key={key}>
                     <span  style={{backgroundColor:'#0E185F',borderRadius:'10px', margin:'10px', padding:'2px 4px',fontWeight:'bold'}}> {value}  &nbsp;</span>
                      
                    </span>
                  ))}</span></p>
                </section>
                <section>
                  <p style={{backgroundColor:'#7B66FF',borderRadius:'10px' ,padding:'2px 4px'}}>{question.category}</p>
                  <p style={{backgroundColor:'#1C82AD',borderRadius:'10px' ,padding:'2px 4px'}}>{question.difficulty}</p>
                  <p style ={{fontWeight:'bold', backgroundColor:'#17B978',borderRadius:'10px' ,padding:'2px 4px'}}>Marks: {question.marks}</p>
                </section>
                
              </li>
            ))}
          </ul>
      </div>
    </div>
   
    
   
  );

  

  return (
    <div>
      <h2 style={{marginBottom:0}}>Question Paper - {displayDetails.total} Marks</h2>
      <span style={{fontWeight:'bold'}}>{displayDetails.basis}-based distribution : </span>
      {Object.entries(displayDetails.distribution).map(([key, value]) => (
        <span key={key}>
          <span>{key}</span> <span style={{fontWeight:'bold'}}>: {value}% &nbsp;</span>
          
        </span>
      ))}
      {Object.entries(questions).map(([partitionName, partition]) => (
        renderQuestions(partition, partitionName)
      ))}
       <div><b>***** End of Question Paper . *****</b></div>
    </div>
  );
}

export default Paper;
