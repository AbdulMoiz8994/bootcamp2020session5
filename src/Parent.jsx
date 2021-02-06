import React from 'react'
import {ChildContext} from './ChildContext'
import {ChildReducer} from './ChildReducer'
const Parent = (props) => {
    return (
        <div>
       {/* <ChildContext name={props.name}/>       */}
       <ChildContext/>      
         <ChildReducer/>
           </div>

    )
}

export default Parent
