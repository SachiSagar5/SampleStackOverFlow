import React from 'react'
import UpdatedComponent from '../HOC_Components/HOCCounter'

class CountertOne extends React.Component{
    render(){
        const {Count,Increament} = this.props
        return(
            <React.Fragment>
                <button onClick={Increament}>Click to increase Count: {Count}</button>
            </React.Fragment>
        )
    }
}
export default UpdatedComponent(CountertOne)

