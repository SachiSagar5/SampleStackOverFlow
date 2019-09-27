import React from 'react';
import ListOfTechno from './ListOfTechno'

export default class RouteData extends React.Component{
    state={
        TechList : []
    }
    componentDidMount(){
        fetch(`https://my-json-server.typicode.com/SachiSagar5/SampleStackOverFlow/TechList`)
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



