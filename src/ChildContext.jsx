import React,{useContext} from 'react'
import createContext from './CreateContext'
export const ChildContext = () => {
    let UseContext=useContext(createContext)
    console.log(UseContext)
    return (
        <div>
            <h1>This is the value of= {UseContext[0]}</h1>
            <button onClick={() => UseContext[1](++UseContext[0])}>Update Number</button>
            {/* <h2>Hell world here is {props.name}</h2> */}
        </div>
    )
}
