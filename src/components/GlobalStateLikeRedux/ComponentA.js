import React,{useContext} from "react";
import {GlobalCounter} from './GlobalStateDefine'

export function ComponentA(){
    
const sharecount = useContext(GlobalCounter)

    return(
        <React.Fragment>
            <p>
            <span>This is component A : {sharecount.GlobCount}</span>
             <button onClick={()=>sharecount.GlobalDispatch('incerement')}>Increment</button>
            <button  onClick={()=>sharecount.GlobalDispatch('decrement')}>Decrement</button>
            <button  onClick={()=>sharecount.GlobalDispatch('reset')}>Reset</button>
            </p>
        </React.Fragment>
    )
}