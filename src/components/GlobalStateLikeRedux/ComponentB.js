import React,{useContext} from "react";
import {GlobalCounter} from './GlobalStateDefine'

export function ComponentB(){

    const SharedCompnent = useContext(GlobalCounter)
    
    return(
        <React.Fragment>
            <p>
            <span>This is Component B : {SharedCompnent.GlobCount}</span>
            <button onClick={()=>SharedCompnent.GlobalDispatch('incerement')}>Increment</button>
            <button  onClick={()=>SharedCompnent.GlobalDispatch('decrement')}>Decrement</button>
            <button  onClick={()=>SharedCompnent.GlobalDispatch('reset')}>Reset</button>
            </p>
        </React.Fragment>
    )
}