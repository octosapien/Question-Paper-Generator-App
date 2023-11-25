
 import { useState } from 'react';
import Paper from './Paper';
import './NewPaperForm.css'

function NewPaperForm() {

 const [total, setTotal] = useState(0);
 const [basis, setBasis] = useState('');
 const [variationValues, setVariationValues] = useState({});
 const [basisVariations, setBasisVariations] = useState([]);
 const [receivedQuestions, setReceivedQuestions] = useState(null);
 const [displayDetails, setDisplaydetails]=useState({});

 const handleTotalChange = (e) => {
    setTotal(parseInt(e.target.value));
 };

 const handleBasisChange = (e) => {
    const selectedBasis = e.target.value;
    setBasis(selectedBasis);

    // Defined variations based on the selected basis
    // Here, variations are hardcoded for demonstration purposes
    // Replace this logic with your actual variation options for each basis
    switch (selectedBasis) {
      case 'difficulty':
        setBasisVariations(['Easy', 'Medium', 'Hard']);
        break;
      case 'tags':
        setBasisVariations(['Tag1','Tag2','Tag3','Tag4','Tag5']);
        break;
      case 'category':
        setBasisVariations(['CategoryA', 'CategoryB', 'CategoryC']);
        break;
      default:
        setBasisVariations([]);
    }

    setVariationValues({}); 
 };

 const handleVariationChange = (variation, value) => {
    setVariationValues({ ...variationValues, [variation]: parseInt(value) });
 };

 const handleSaveToLocalStorage = () => {
  const savedQuizzes = JSON.parse(localStorage.getItem('savedQuizzes')) || [];
  savedQuizzes.push({ data: receivedQuestions });
  localStorage.setItem('savedQuizzes', JSON.stringify(savedQuizzes));
  alert('Quiz saved to local storage!');
};

const handleDisplayInNewTab = () => {
  const savedQuizzes = JSON.parse(localStorage.getItem('savedQuizzes')) || [];
  if (savedQuizzes.length > 0) {
    const retrievedQuestions = savedQuizzes[0].data;
    const jsonContent = JSON.stringify(retrievedQuestions, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    URL.revokeObjectURL(url);
  } else {
    alert('No quizzes found in local storage.');
  }
};

const handleRetrieveFromLocalStorage = () => {
  const savedQuizzes = JSON.parse(localStorage.getItem('savedQuizzes')) || [];
  if (savedQuizzes.length > 0) {
    const retrievedQuestions = savedQuizzes[0].data;
    setReceivedQuestions(retrievedQuestions);
    alert('Quiz retrieved from local storage!');
  } else {
    alert('No quizzes found in local storage.');
  }
};


 const handleSubmit = async (e) => {
    e.preventDefault();

    const totalVariation = Object.values(variationValues).reduce((acc, curr) => acc + curr, 0);
    if (totalVariation !== 100) {
      alert('Variations should add up to 100.');
      return;
    }

    const formData = {
      total,
      basis,
      distribution: variationValues,
    };
    console.log(formData);
    setDisplaydetails({total:total,basis:basis,distribution:variationValues});
    try {
      const response = await fetch('http://localhost:3000/api/quiz/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('New Paper:', data); 
      console.log(data);
      setReceivedQuestions(data.paper);
    } catch (error) {
      console.error('Error fetching new quiz:', error); // Handle errors during the request
    }

   
    setTotal(0);
    setBasis('');
    setVariationValues({});
    setBasisVariations([]);
    console.log(displayDetails,"HELLO");
    // setReceivedQuestions(null);
 };


 const renderVariationFields = () => {
    return basisVariations.map((variation) => (
      <div>
        <label key={variation}>
        {variation}&nbsp;%&nbsp;:
        <input
          type="number"
          value={variationValues[variation] || ''}
          onChange={(e) => handleVariationChange(variation, e.target.value)}
        />
      </label>
      </div>
      
    ));
 };

 return (
  <div >
    <form onSubmit={handleSubmit}>
      <label >
        Total Marks :
        <input type="number" value={total} onChange={handleTotalChange} />
      </label>
      <label>
        Basis :
        <select value={basis} onChange={handleBasisChange}>
          <option value="">Select Basis</option>
          <option value="difficulty">Difficulty</option>
          <option value="tags">Tags</option>
          <option value="category">Category</option>
        </select>
      </label>
      {renderVariationFields()}
      <button type="submit">Generate Question Paper</button>
      <span><b>Note</b> : You can select the basis of weightage distribution from the dropdown . (Tags aka Subject/Topic)</span>
    </form>
    <div>
      {receivedQuestions && <button type="button" onClick={handleSaveToLocalStorage}>
          Save this Quiz
      </button>}
      <button type="button" onClick={handleDisplayInNewTab}>
        Retrieve Saved Quizzes
      </button>
    </div>
    {receivedQuestions && <Paper questions={receivedQuestions} displayDetails={displayDetails} />}
    </div>
 );
}

export default NewPaperForm;
