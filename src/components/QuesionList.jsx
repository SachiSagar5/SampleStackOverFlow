import React from 'react';
import {Link} from 'react-router-dom'

export default class TechnoDetails extends React.Component{
  state ={
    paramsData : [],
    HideShow: false,
    TechListId : '',
    Quesiontitle :'',
    summary:''

  }
  componentDidMount(){
    fetch(`http://localhost:3000/TechList/${this.props.match.params.id}/?_embed=Questionlist`)
    .then(response => response.json())
    .then(json => this.setState({
      paramsData : json.Questionlist,
      TechListId: json.Questionlist[0].TechListId
    }));
}
AddQuestion=(e)=>{
 e.preventDefault();
  this.setState({
    HideShow : !this.state.HideShow
  })
}
handleChange=(e)=>{
  this.setState({
    [e.target.name]: e.target.value
  });
}
CreateQuession=(e)=>{
  e.preventDefault();
  let postData = {
    "TechListId": this.state.TechListId,
    "Quesiontitle": this.state.Quesiontitle,
    "Summary": this.state.summary
  }
  fetch(`http://localhost:3000/QuestionList/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData) 
        }).then(res=>res.json()).then(json=>{console.log(json)})
 }
    render(){
      console.log(this.state.paramsData)
        return(
          <React.Fragment>
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
                <form class="col m12" onSubmit={this.CreateQuession}>
                <button class="waves-effect waves-light btn" onClick={this.AddQuestion}>Add Quession</button>  
                {this.state.HideShow? ( <div class="row">
                  <div class="input-field col s12">
                      <input type='text' onChange={this.handleChange} name='Quesiontitle' class="validate"/>
                      <label for="email">Quession title</label>
                      <span class="helper-text" data-error="wrong" data-success="right">Add Quession title</span>
                    </div> 
                    <div class="input-field col s12">
                    <textarea name='summary' onChange={this.handleChange} class="materialize-textarea"></textarea>
                      <label for="email">Summary</label>
                      <span class="helper-text" data-error="wrong" data-success="right">Add Summary</span>
                    </div> 
                    <button type="submit" class="waves-effect waves-light btn">Create Quession</button>  
                  </div>):''}
               
                </form>
            </div>
            <div class="collection">
            {this.state.paramsData.map((temp)=>
               <Link className="collection-item" to={`/UserComments/${temp.id}`}>
                  <h6>{temp.Quesiontitle}</h6>
                </Link>
                )}
                 </div>
            </div>
         </React.Fragment>
        )
    }
}