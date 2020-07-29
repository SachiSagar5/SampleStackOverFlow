import React,{useState,useEffect,useContext} from 'react'
import{userName} from '../App'


export function Counter(){
    const [count,setCount] = useState(0)
    const incFive = ()=>{
        for(var i=0;i<5;i++){
            setCount(prevcount=> prevcount + 1)
        }
    }
    
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(prevcount=> prevcount + 1)}>Test</button>
            <button onClick={incFive}>Click</button>
        </div>
    )
}

export function HookObject(){
    const Namechange = (e)=>{
        setname({...name,[e.target.name]:e.target.value})
    }
    const [name, setname] = useState({firstname:'',Lastname:''})
    return(
        <div>
        <h2>First Name: {name.firstname}</h2>
        <input type="text" value={name.firstname} name="firstname" onChange={Namechange} />
        <h2>Last Name: {name.Lastname}</h2>
        <input type="text" value={name.Lastname} name="Lastname" onChange={Namechange} />
        </div>
       
    )
}

export function HookArray(){
    const[Title,setTile] = useState(1)
    
    const [items,setitem] = useState([1,2,3,4])

    useEffect(()=>{
        document.title= `value change ${Title}`
        console.log('callin use effect')
    },[Title])// Conditional run useEffect
   
    
    const arryUpdate = ()=>{
        setitem([...items,2])
    }
    const updateTitile=()=>{
        setTile(Title + 1)
    }
    return(
        <ul>
            <button onClick={arryUpdate}>Add</button>
            <input type="text" onChange={updateTitile}/>
            {items.map(item=> <li>{item}</li>)}
        </ul>
    )
}

export function HooksMouserMoveExample(){
    const [mousePos, setMousePos] = useState({x:0,y:0})

    function logmove(e) {
        setMousePos({x : e.clientX,y: e.clientY})
        console.log('call')
    }
    useEffect(()=>{
        window.addEventListener('mousemove',logmove)
       return()=>{
           window.removeEventListener('mousemove',logmove)
       }
    },[])// [] Prevent re render components
    return(
        <div>
            <h1>Mouse x value: {mousePos.x}</h1>
            <h1>Mouse y value: {mousePos.y}</h1>
        </div>
    )
}

export function ContInc(){
    const [IncCount,SetIncount] = useState(0)
   
    useEffect(()=>{
        // const Int = setInterval(()=>{SetIncount(prevIncCount => prevIncCount + 1)},1000)
        return()=>{
            // clearInterval(Int)
        }
    },[])
    
    return(
        <div>
            <h2>{IncCount}</h2>
        </div>
    )
}

export function DataFetchinHooks(){

    const [user,setUser] = useState([]) 
    useEffect(()=>{
        
        fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(json=>{
            setUser(json)
            console.log(json)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    return(
        <React.Fragment>
            <DataFetchinHooksBasedonId/> {/*Child component*/}
        <ul>{user.map((temp)=><li>{temp.name}</li>)}</ul>
        </React.Fragment>
    )
}
export function DataFetchinHooksBasedonId(){
    const name = useContext(userName) // Use context example calling direct value from parent component 
    const [post,setPost] = useState({})
    const [id,setId] =useState(1)
     useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>res.json()).then(json=>{
                setPost(json)
                console.log(json)
            }) 
     },[id])
     const test=()=>{
        console.log(id)
      }
    return(
        <React.Fragment>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={test}>click</button>
         {(post !== {})? <h2>{post.title}</h2> :<p>No Data</p>}
         {"My name is ",name}
        </React.Fragment>
    )
}