import React from 'react'
import useSetRole from '../CustomHooks/useCount'

export default function CustomeHookExampletwo(){
    const [Role,AdminRole,EditorRole,ViewerRole] = useSetRole(null)
    return(
        <React.Fragment>
            Loku User Role is  {Role}
            <button onClick={EditorRole}>Assign EditorRole</button>
        </React.Fragment>
    )
}