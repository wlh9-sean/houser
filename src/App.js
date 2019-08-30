import React from 'react';
import Wizard from './Components/Wizard/Wizard'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Header />
      <Wizard />
      <Dashboard />
    </div>
  );
}

export default App;
