import React from 'react';
import SearchBar from './SearchBar';
import './App.css'; // Import CSS file for general app styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fast Finder</h1>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;