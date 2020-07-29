import React,{useReducer} from 'react'

const initialState = {
    counter : 0
}
const redcuer =(state,action)=>{
    switch(action.type){
        case 'incerement':
            return {counter : state.counter + action.value};
         case 'decrement': 
            return {counter : state.counter - action.value};
         case 'inc5':
             return {counter : state.counter + action.value}
          case 'reset':
              return initialState;
           default: return state.counter   
    }
}

function UseReducerHookExample(){
      const [count,dispatch] = useReducer(redcuer,initialState)
    return(
        <React.Fragment>
            <h2>{count.counter}</h2>
            <button onClick={()=>dispatch({ type:'incerement',value: 1})}>Increment</button>
            <button  onClick={()=>dispatch({ type:'decrement',value: 1})}>Decrement</button>
            <button  onClick={()=>dispatch({ type:'inc5', value : 5})}>Increment + 5</button>
            <button  onClick={()=>dispatch({ type:'reset'})}>Reset</button>
        </React.Fragment>
    )
}
export default UseReducerHookExample