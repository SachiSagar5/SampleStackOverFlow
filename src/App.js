import React from 'react';
import {Counter,HookObject,HookArray,HooksMouserMoveExample,ContInc,DataFetchinHooks,DataFetchinHooksBasedonId} from '../src/components/counter'
import UseReducerHookExample from '../src/components/useReducer'
import GlobalStateDetfineUsingReducerandUseContext from './components/GlobalStateLikeRedux/GlobalStateDefine'

import{FecthApi} from './components/UseReducerFecthApi/FetchApiuseReducer'

import UseCallbackexample from '../src/components/useCallBack/callBack'

import RefExample from '../src/components/useRefExamples/useRefExample'

import CustomeHookExampleOne  from '../src/components/CustomHooks/ComponentOne'

import ErrorBoundry from '../src/components/ErrorBoundry/ErrorBoundryHoc'

import CountertOne from '../src/components/HOC_Components/CounterOne'

export const userName = React.createContext()

class App extends React.Component {
  constructor(){
    super()
  }
  handleSubmit=(event)=> {
    event.preventDefault();
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    console.log('-->', formData);
  }

render(){
  return (
    <div className="App">
      <ErrorBoundry>
      {/* <Counter/>
      <HookObject/>
      <HookArray/> */}
      {/* <HooksMouserMoveExample/> */}
      {/* <ContInc/> */}
      {/* <DataFetchinHooks/> */}
      {/* <userName.Provider value={"sachin"}>
           <DataFetchinHooks />
      </userName.Provider> */}
      {/* <form onSubmit={this.handleSubmit}>
      <input ref="phone" className="phone" type='tel' name="phone"/>
            <input ref="email" className="email" type='tel' name="email"/>
            <input ref="Username" className="email" type='tel' name="Username"/>
            <input type="submit" value="Submit"/>
      </form> */}

      {/* /User Reduce Hook Example/ */}
      {/* <UseReducerHookExample/> */}
      {/* <GlobalStateDetfineUsingReducerandUseContext/> */}
      {/* <FecthApi/> */}
      {/* <UseCallbackexample/> */}
      {/* <RefExample/> */}
      <CustomeHookExampleOne/>
      </ErrorBoundry>
      <div>
          <h2>HOC Example</h2>
        <CountertOne/>
      </div>
    </div>
  );
}

  
}

export default App;

