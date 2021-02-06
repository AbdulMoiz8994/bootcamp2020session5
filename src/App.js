import React from 'react'
import './App.css';

//import Component
import Parent from './Parent'
import CreateContext from './CreateContext'

function App() {
  return (

    <CreateContext.Provider value={1}>
      <div>
        <Parent name="Abdul moiz" />
      </div>
    </CreateContext.Provider>
  );
}

export default App;
