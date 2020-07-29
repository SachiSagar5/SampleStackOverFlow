import React from 'react'

function compA({EmpAge}){
    console.log('Component A')
    return(
        <React.Fragment>
            Emp Age : {EmpAge}
        </React.Fragment>
    )
}
export default React.memo(compA)