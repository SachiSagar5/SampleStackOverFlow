import {useState} from 'react'


function useSetRole(initialState){
    const [Role,setRole] = useState(initialState)   
    
    const AdminRole =()=>{
        setRole('Admin')
    }
    const EditorRole =()=>{
        setRole('Editor')
    }
    const ViewerRole =()=>{
        setRole('Viewer')
    }
    return [Role,AdminRole,EditorRole,ViewerRole] 
}
export default useSetRole


// Form function created as custom hook can reuse 
export function useForm (iniState){
    const [value,setName] = useState(iniState)

    const bind = {
        value:value,
        onChange: e =>{
          setName( e.target.value)
        }
    }
    return [value,bind]
}