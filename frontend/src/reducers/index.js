import { combineReducers } from 'redux';
import authReducer from './authReducer';
import wordReducer from './wordReducer';

export default combineReducers({
    auth: authReducer,
    words: wordReducer
});
