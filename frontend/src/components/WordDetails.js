import React from 'react';
const WordDetails = ({ word, phonetics, meanings }) => {
    return (<div>
        <h1>{word}</h1>
        <div> {phonetics.map((phonetic, index) =>
        (<div key={index}> <p>{phonetic.text}</p>
            {phonetic.audio && <audio controls src={phonetic.audio} />}
        </div>))} </div>
        <div> {meanings.map((meaning, index) =>
        (<div key={index}> <h3>{meaning.partOfSpeech}</h3>
            <p>{meaning.definitions[0].definition}</p> </div>))}
        </div>
    </div>);
};

export default WordDetails;
