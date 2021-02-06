import React,{useState} from 'react'
import './App.css';

//import Component
import Parent from './Parent'
import CreateContext from './CreateContext'

function App() {
  let autoArray=useState(0) //this is  like this --> [count,setCount],autoArray[0],autoarray[1]
  return (

    <CreateContext.Provider value={autoArray}>
      <div>
        {/* <Parent name="Abdul moiz" /> */}
        <Parent/>

      </div>
    </CreateContext.Provider>
  );
}

export default App;
