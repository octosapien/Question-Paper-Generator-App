
 import { useState } from 'react';
import Paper from './Paper';

function NewPaperForm() {

 const [total, setTotal] = useState(0);
 const [basis, setBasis] = useState('');
 const [variationValues, setVariationValues] = useState({});
 const [basisVariations, setBasisVariations] = useState([]);
 const [receivedQuestions, setReceivedQuestions] = useState(null);

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
    // setReceivedQuestions(null);
 };


 const renderVariationFields = () => {
    return basisVariations.map((variation) => (
      <label key={variation}>
        {variation}:
        <input
          type="number"
          value={variationValues[variation] || ''}
          onChange={(e) => handleVariationChange(variation, e.target.value)}
        />
      </label>
    ));
 };

 return (
    <form onSubmit={handleSubmit}>
      <label>
        Total Marks:
        <input type="number" value={total} onChange={handleTotalChange} />
      </label>
      <label>
        Basis:
        <select value={basis} onChange={handleBasisChange}>
          <option value="">Select Basis</option>
          <option value="difficulty">Difficulty</option>
          <option value="tags">Tags</option>
          <option value="category">Category</option>
        </select>
      </label>
      {renderVariationFields()}
      <button type="submit">Generate Question Paper</button>
      {receivedQuestions && <Paper  questions={receivedQuestions} />}
    </form>
 );
}

export default NewPaperForm;
