import React, { useEffect, useState } from 'react';
import { getWords } from '../services/api';
import WordCard from '../components/WordCard';

const Home = () => {
  // Inicialize o estado com um valor padrão
  const [words, setWords] = useState({ results: [] });

  useEffect(() => {
    getWords().then(response => {
      // Verifique se a resposta contém dados antes de definir o estado
      if (response && response.results) {
        setWords(response);
      } else {
        // Defina um estado padrão caso não haja dados
        setWords({ results: [] });
      }
    }).catch(error => {
      console.error("Erro ao buscar palavras:", error);
      setWords({ results: [] });
    });
  }, []);

  return (
    <div>
      <h1>Word List</h1>
      <div>
        {/* Verifique se words.results é um array antes de mapear */}
        {Array.isArray(words.results) && words.results.map(word => (
          <WordCard key={word} word={word} />
        ))}
      </div>
    </div>
  );
};

export default Home;
