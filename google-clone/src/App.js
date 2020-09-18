import React from 'react';
import './css/App.css';
import Home from './pages/Home'

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1>Hello, This is the google clone</h1>

      {/* Home (One we are going to search on)*/}
      <Home />
      
      {/* Search Page (The results page)*/}
    </div>
  );
}

export default App;
