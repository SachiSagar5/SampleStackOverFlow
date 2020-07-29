import React, { useState,useCallback } from 'react'
import CompA from './componentA'
import CompB from './componentB'
import ButtonComp from './buttonComp'

function UseCallbackexample(){
    const [age,setAge] = useState(18)
    const incrementAge =()=>{
        console.log('compA func')
        setAge(age + 1)
    }
    
    const [salary,setSal] = useState(50000)

    const IncSalary = useCallback(()=>{ // useCall back will prevent un-nessery re-render of function(use for performance optimization).
        console.log('compB func')
        setSal(salary + 10000)
    },[salary]) 

    const [IntData,setIntData] = useState(3)

    const test =()=>{
       var i = 0 
        while(i< 2000000){
            setIntData( IntData % 2 == 1)
        }
    }
    return(
        <React.Fragment>
            <CompA EmpAge={age}/>
             <button onClick={incrementAge}>Increment Age</button>
             <CompB EmpSalary={salary}/>
             <ButtonComp IncSal={IncSalary}/>
             <button onClick={test}>UseMemo Example</button>
             value is {IntData}
        </React.Fragment>
    )
}
export default UseCallbackexample