// components/RecordsForm.js
import React, { useState } from 'react';

const RecordsForm = ({ onAddRecord }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddRecord(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit">Добавить запись</button>
    </form>
  );
};

export default RecordsForm;
