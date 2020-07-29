import React,{useState, useEffect,useRef} from 'react'

export default function RefExample(){
    const [count,setCount] = useState(0)
    const [start,setStart] = useState(false)

    const StopCounter = useRef(null)
    const Stop =()=>{
        clearInterval(StopCounter.current);
        setStart(false)
    }
    useEffect(()=>{
        console.log('as')  
     if(start == true){
        StopCounter.current =  setInterval(()=>{setCount(prevcount=> prevcount + 1)},1000) 
     }     
         return()=>{
            clearInterval(StopCounter.current)
        }
     
    },[start])
    return(
        <React.Fragment>
            {count}
            <button onClick={Stop}>stop</button>
            <button onClick={()=>setStart(true)}>start</button>
        </React.Fragment>
    )
}