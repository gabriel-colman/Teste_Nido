import React from 'react';

const WordCard = ({ word }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '10px',
      margin: '10px',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 0 5px rgba(0,0,0,0.1)'
    }}>
      <h2>{word.word}</h2>
      <p><strong>Meaning:</strong> {word.meanings.length > 0 ? word.meanings.join(', ') : 'No meaning available'}</p>
      <p><strong>Phonetics:</strong> {word.phonetics.length > 0 ? word.phonetics.join(', ') : 'No phonetics available'}</p>
    </div>
  );
};

export default WordCard;
