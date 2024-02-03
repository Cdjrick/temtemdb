import './App.css';
import GetTems from './api/getTems'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('')

  return (
    <GetTems search={search} onSearchChange={setSearch}/>
  );
}

export default App;
