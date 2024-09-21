import React, { useEffect, useState } from 'react';
import { getWords } from '../services/api';
import WordCard from '../components/WordCard';

const Home = () => {
const [words, setWords] = useState([]);

useEffect(() => {
 getWords().then(response => {
   setWords(response.data.results);
 });
}, []);

return (
 <div>
   <h1>Word List</h1>
   <div>
     {words.map(word => (
       <WordCard key={word} word={word} />
     ))}
   </div>
 </div>
);
};

export default Home;
