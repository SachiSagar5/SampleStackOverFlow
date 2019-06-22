import React from 'react';

class UserCommnet extends React.Component{
    
    state={
        QuesionDetails:[],
        QuestionlistId: '',
        username :'',
        timestamp:new Date().toLocaleString(),
        comment:'',
        UserCommetList:[]
    }
    componentDidMount(){
        fetch(`http://localhost:3000/Questionlist/${this.props.match.params.id}/?_embed=Usercomment`)
        .then(response => response.json())
        .then(json => this.setState({
            QuesionDetails : json,
            QuestionlistId : json.Usercomment[0].QuestionlistId,
            UserCommetList : json.Usercomment
        }));
        
    }
    handleComment =(e)=>{
        e.preventDefault();
          let data = {
            "QuestionlistId":this.state.QuestionlistId,
            "username" : this.state.username,
            "timestamp": this.state.timestamp,
            "comment": this.state.comment
          }
        fetch(`http://localhost:3000/Usercomment/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        }).then(res=>res.json())
        .then(json=>{
            this.setState({
                UserCommetList : [...this.state.UserCommetList,json]
            })
        });
    }
    handleChange=(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
        
    }
    render(){
    let comments
    if(this.state.QuesionDetails.Usercomment){
        comments = this.state.UserCommetList.map((temp)=> 
        <div key={temp.id}className="card-panel grey lighten-5 z-depth-1">
        <div className="row">
        <div className="col m2 valign-wrapper"><i className="material-icons">account_circle</i> &nbsp;{temp.username}</div>
        <div className="col m7">
        <span className="black-text">
            {temp.comment}
        </span>
        </div>
        <div className="col m3 valign-wrapper">
        <i className="material-icons">query_builder</i> &nbsp; {temp.timestamp}</div>
    </div>
    </div> 
            )
    }
        return(
            <React.Fragment>
                <div className="container">
                <blockquote> <h4>{this.state.QuesionDetails.Quesiontitle}</h4> </blockquote>
                <p className="flow-text">{this.state.QuesionDetails.Summary}</p>
                <hr/>
                <section>
                    <h5>User Comments</h5>
                    <hr/>
                    <div className="col s12 m12">
                     {comments}
                  </div>
                  <div className="row">
                    <form className="col s12" onSubmit={this.handleComment}>
                    <div className="row">
                    <div className="input-field col m3">
                            <input id="password" onChange={this.handleChange} name='username' type="text" className="validate"/>
                            <label for="password">User Name</label>
                            </div>
                        <div className="input-field col m9">
                        <textarea id="textarea1" onChange={this.handleChange} name='comment' className="materialize-textarea"></textarea>
                        <label for="textarea1">Enter your Comment</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Add Comment
                        <i className="material-icons right">send</i>
                    </button>
                            
                    </form>
                </div>
                </section>
                </div>
            </React.Fragment>
        )
    }
}

export default UserCommnet;