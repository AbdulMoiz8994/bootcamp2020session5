import React from 'react'
import {ChildContext} from './ChildContext'
const Parent = (props) => {
    return (
        <div>
       <ChildContext name={props.name}/>      
           </div>

    )
}

export default Parent
