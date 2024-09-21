import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../services/api';

const WordCard = ({ word }) => {
const dispatch = useDispatch();
const favorites = useSelector(state => state.words.favoriteWords);

const isFavorite = favorites.includes(word);

const toggleFavorite = () => {
 if (isFavorite) {
   removeFavorite(word).then(() => {
     dispatch({ type: 'REMOVE_FAVORITE', payload: word });
   });
 } else {
   addFavorite(word).then(() => {
     dispatch({ type: 'ADD_FAVORITE', payload: word });
   });
 }
};

return (
 <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
   <h3>{word}</h3>
   <button onClick={toggleFavorite}>
     {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
   </button>
 </div>
);
};

export default WordCard;
