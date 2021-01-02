import React, {useState} from 'react';
import {ResultCard} from './ResultCard';

export const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) => {
      e.preventDefault();
      
      setQuery(e.target.value);

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=edb3eb5b6c493c8ccb690965aa2861fd&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then((res) => res.json()).then((data) => {if(!data.errors) { setResults(data.results);} else {setResults([]);}})
    };

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" 
                        placeholder="Search for movies"
                        value={query}
                        onChange={onChange}
                        />
                    </div>

                    {results.length > 0 && (

                        <ul>
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
