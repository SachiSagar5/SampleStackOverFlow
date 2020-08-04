import React from 'react'
import useSetRole from '../CustomHooks/useCount'
import CustomeHookExampletwo from './ComponentTwo'
import {useForm} from './useCount'
import componentA from '../useCallBack/componentA'


export default function CustomeHookExampleOne(){
    const [Role,EditorRole] = useSetRole(null)
    
        // throw new Error('Not a viewer Role')
    
    return(
        <React.Fragment>
            {console.log('Force render')}
          <div> Sachin User Role is  {Role}
            <button onClick={EditorRole}>Assign Aadmin</button> 
            </div> 
            <CustomeHookExampletwo/>
            <CustomForm/>
        </React.Fragment>
    )
}


export function CustomForm(){
    const [firstName,bindFistName]=useForm('');
    const [lastName,bindLastName]=useForm('');

   const handleSubmit=()=>{
        alert(`Hello ${firstName} ${lastName}`)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <span>First name :</span> <input {...bindFistName}/> 
            </div>
            <div>
                <span>Last name :</span> <input {...bindLastName}/> 
            </div>
            <button alt="submit" type="submit">Submit</button>
            </form>
        </div>
    )
}