import React,{useReducer} from "react";
import {ComponentA} from '../GlobalStateLikeRedux/ComponentA'
import {ComponentB} from '../GlobalStateLikeRedux/ComponentB'

export const GlobalCounter = React.createContext()

const initialState = 0

const redcuer =(state,action)=>{
    switch(action){
        case 'incerement':
            return  state + 1;
         case 'decrement': 
            return state - 1
          case 'reset':
              return initialState;
           default: return state   
    }
}
export default function GlobalStateDetfineUsingReducerandUseContext(){
    const [count,dispatch] = useReducer(redcuer,initialState)
    return(
         <React.Fragment>
            <h2>Global Counter : {count}</h2>
            <GlobalCounter.Provider value={{GlobCount: count, GlobalDispatch: dispatch}}>
            <ComponentA/>
            <ComponentB/>
            </GlobalCounter.Provider>
        </React.Fragment>
    )
}

