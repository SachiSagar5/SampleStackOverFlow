import React from 'react';
import ListOfTechno from './ListOfTechno'

export default class RouteData extends React.Component{
    state={
        TechList : []
    }
    componentDidMount(){
        fetch(`http://localhost:3000/TechList`)
        .then(response => response.json())
        .then(json => this.setState({
            TechList : json
        }))
    }
    render(){
        return(
            <div>
                 <ListOfTechno TechList={this.state.TechList}/>  
            </div>
        )
    }
}



