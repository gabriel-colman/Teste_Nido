import React, { useEffect, useState } from 'react';
import { getWords } from '../services/api'; import WordCard from './WordCard';

const WordList = () => {
    const [words, setWords] = useState([]); const [page, setPage] = useState(1); const [hasMore, setHasMore] = useState(true);

    useEffect(() => { loadWords(); }, []);

    const loadWords = () => { getWords(`?page=${page}&limit=20`).then(response => { setWords([...words, ...response.data.results]); setPage(page + 1); setHasMore(response.data.hasNext); }); };

    return (<div onScroll={(e) => { if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight && hasMore) { loadWords(); } }}> {words.map(word => (<WordCard key={word} word={word} />))} </div>);
};

export default WordList;
