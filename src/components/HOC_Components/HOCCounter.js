import React from 'react'

const UpdatedComponent = OriginalComponent =>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count: 0
            }
        }
        handleIncrease=()=>{
           this.setState(preState=>({
               count: preState.count + 1
           }))
        }
        render(){
            return <OriginalComponent Count={this.state.count} Increament={this.handleIncrease}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent