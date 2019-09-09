import React from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Router from './routes'

function App() {
  return (
    <div className="App">
      <Header />
      {Router}
    </div>
  );
}

export default App;
