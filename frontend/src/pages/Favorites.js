import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
const favorites = useSelector(state => state.words.favoriteWords);

return (
 <div>
   <h1>Favorite Words</h1>
   <ul>
     {favorites.map(word => (
       <li key={word}>{word}</li>
     ))}
   </ul>
 </div>
);
};

export default Favorites;
