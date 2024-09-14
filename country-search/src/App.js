// src/App.js

import React from 'react';
import SearchBar from './components/SearchBar';
import data from './data.json';



function App() {

  const appStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const headerStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  };

  return (
    <div style={appStyle}>
      <h1 style={headerStyle}>Country Search</h1>
      <SearchBar countries={data} />
    </div>

    // <div className="App">
    //   <h1>Country Search</h1>
    //   <SearchBar countries={data} />
    // </div>
  );
}

export default App;

