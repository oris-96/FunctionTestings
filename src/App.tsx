import { FormEvent, useEffect, useRef, useState } from 'react';
import './App.css'

import { DisplayResults, SearchComponent } from './components';
import axios from 'axios';

export interface Games {
  id: number;
  name: string;
  background_image: string;
  released: string;
}

export interface GameResult {
  results: Games[];
}

function App() {

  const searchRef = useRef<HTMLInputElement>(null);
  const [searchData, setSearchData] = useState("")

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    if (searchRef.current !== null)
      setSearchData(searchRef.current.value);
    
    if (searchRef.current !== null)
      searchRef.current.value = ""
  }

   const [results, setResults] = useState<Games[]>([]);
   const [error, setError] = useState('');

   useEffect(() => {
     const fetchData = () => {
       axios
         .get<GameResult>(
           `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`,
         )
         .then((res) => {
           setResults(res.data.results)
         })
         .catch((err) => setError(err.message));
     };
     fetchData();
   }, [])
  
  const searchedResult: Games[] = searchData ? results.filter(result => result.name.toLowerCase().includes(searchData.toLowerCase())) : results
  
  return (
    <>
      <SearchComponent searchRef={searchRef} handleSubmit={handleSubmit} />
      <DisplayResults results={searchedResult} error={error} />
    </>
  );
}

export default App
