import React,{useReducer} from 'react'
import CreateReducer from './CreateReducer'
export const ChildReducer = () => {
    let [state,action]=useReducer(CreateReducer,1) //in state we will get initial value and action will update this value
    // console.log(state)
    return (
        <div>
           <h1>This is the value of Reducer= {state}</h1>            
           <button onClick={() => action('Increment')}>Update value</button>
                   </div>
    )
}
