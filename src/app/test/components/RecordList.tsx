// components/RecordsList.js
import React from 'react';

const RecordsList = ({ records }) => {
  return (
    <ul>
      {records.map((record, index) => (
        <li key={index}>{record}</li>
      ))}
    </ul>
  );
};

export default RecordsList;
