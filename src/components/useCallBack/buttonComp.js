import React from 'react'

function ButtonComp({IncSal}){
    console.log('Component ButtonComp')
    return(
        <React.Fragment>
         <button onClick={IncSal}>Increment Salary</button>
        </React.Fragment>
    )
}
export default React.memo(ButtonComp) // React.memo will use for unnessery re-render fo child component form parent