import React from 'react'

function compB({EmpSalary}){
console.log('Component B')
    return(
        <React.Fragment>
            Componenet B Emp Salary : {EmpSalary}
        </React.Fragment>
    )
}
export default React.memo(compB)