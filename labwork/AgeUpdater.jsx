import React, { useEffect, useState } from 'react';

function App({ age = 20 }) {
  const [currentAge, setCurrentAge] = useState(age);
  const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setCurrentAge(age);
  }, [age]);

  useEffect(() => {
    console.log('Age updated:', currentAge);
  }, [currentAge]);

  function updateAge() {
    if (inputAge.trim() === '') {
      setError('Enter an age before updating.');
      return;
    }

    const nextAge = Number(inputAge);
    if (!Number.isFinite(nextAge)) {
      setError('Enter a valid age.');
      return;
    }

    setCurrentAge(nextAge);
    setInputAge('');
    setError('');
  }

  return (
    <div>
      <h1>My Age: {currentAge}</h1>

      <label htmlFor="age-input">Enter new age</label>
      <input
        id="age-input"
        type="number"
        value={inputAge}
        onChange={(event) => {
          setInputAge(event.target.value);
          setError('');
        }}
        placeholder="Enter new age"
      />

      <button type="button" onClick={updateAge}>
        Update Age
      </button>
      {error && <p role="alert">{error}</p>}
    </div>
  );
}

export default App;
