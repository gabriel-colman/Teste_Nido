const initialState = {
    wordList: [],
    favoriteWords: [],
    historyWords: []
    };
    
    export default function wordReducer(state = initialState, action) {
    switch (action.type) {
     case 'SET_WORD_LIST':
       return {
         ...state,
         wordList: action.payload
       };
     case 'ADD_FAVORITE':
       return {
         ...state,
         favoriteWords: [...state.favoriteWords, action.payload]
       };
     case 'REMOVE_FAVORITE':
       return {
         ...state,
         favoriteWords: state.favoriteWords.filter(word => word !== action.payload)
       };
     case 'ADD_HISTORY':
       return {
         ...state,
         historyWords: [...state.historyWords, action.payload]
       };
     default:
       return state;
    }
    };
    