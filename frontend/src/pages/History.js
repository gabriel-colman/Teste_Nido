import React from 'react';
import { useSelector } from 'react-redux';

const History = () => {
const history = useSelector(state => state.words.historyWords);

return (
 <div>
   <h1>History</h1>
   <ul>
     {history.map((word, index) => (
       <li key={index}>{word}</li>
     ))}
   </ul>
 </div>
);
};

export default History;
