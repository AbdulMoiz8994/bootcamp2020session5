import React,{useContext} from 'react'
import createContext from './CreateContext'
export const ChildContext = (props) => {
    let UseContext=useContext(createContext)
    // console.log(UseContext)
    return (
        <div>
            <h1>This is the value of {UseContext}</h1>

            
            <h2>Hell world here is {props.name}</h2>
        </div>
    )
}
