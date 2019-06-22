import React from 'react';
import {Link } from "react-router-dom";

class ListOfTechno extends React.Component{
    render(){
        return(
            <React.Fragment >
                <div className="container">
                <div class="row">
                <form class="col m12">
                <div class="row">
                    <div class="input-field col s12">
                    <i class="material-icons prefix">search</i>
                    <input id="icon_prefix" type="text" class="validate"/>
                    <label for="icon_prefix2">Search</label>
                    </div>
                </div>
                </form>
            </div>
            <div class="row">
            {this.props.TechList.map(tech =>
            <div class="col s12 m4">
                <div class="card hoverable">
                <div class="card-image">
                    <img src={tech.Url}/>
                    <span class="card-title">{tech.heading}</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                <Link to={`/QuesionList/${tech.id}`}><a href="">{tech.heading}</a></Link>
                </div>
                </div>
            </div>
            )}
        </div>
        </div>
            </React.Fragment>
        )
    }
}
export default ListOfTechno;


