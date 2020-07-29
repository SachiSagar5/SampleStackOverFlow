import React, { useReducer, useEffect } from 'react'

const initialState = {
    loding : true,
    error : "",
    user : {}
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'FETCH_SUCESS':
            return {
                loding: false,
                error:'',
                user : action.payload
            }
        case 'FETCH_ERROR':
            return{
                loding : false,
                error: "Something Went Wrong",
                user : {}
            }
        default :
        return state        
    }
}
export function FecthApi(){
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1').then(res=>res.json()).then(json=>{
            dispatch({
                type: 'FETCH_SUCESS',
                payload: json
            })
        })
        .catch(err =>{
            dispatch({type:'FETCH_ERROR'})
        })
       
    },[])
    return(
        <React.Fragment>
            {state.loding ? 'Loading...': state.user.name}
            {state.error? state.error:null}
        </React.Fragment>
    )
}