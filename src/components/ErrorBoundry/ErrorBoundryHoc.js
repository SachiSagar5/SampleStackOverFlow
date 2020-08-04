import React from 'react'

class ErrorBoundry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
    componentDidCatch(error,info){ // catch the error and pass it log service
        console.log(error)
    }
    render(){
      if(this.state.hasError){
          return <h1>Something went wrong</h1>
      }else{
          return this.props.children
      }
    }
}

export default ErrorBoundry