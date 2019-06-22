import React from 'react';
import ReactDOM from 'react-dom';
import SearchAppBar from './components/Header'
import RouteData from './components/Router'
import TechnoDetails from './components/QuesionList';
import UserComments from './components/UserComment';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends React.Component{
    render(){
        return(
            <div>
                 <SearchAppBar/>
                <Router>
                  <Route path="/" exact component={RouteData} />
                  <Route  path="/Quesionlist/:id" component={TechnoDetails} />
                  <Route  path="/UserComments/:id" component={UserComments} />
                </Router>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


