import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import 'semantic-ui-css/semantic.min.css'
import firebase from 'firebase'



class Root extends Component {
   componentDidMount(){
     firebase.auth().onAuthStateChanged(user=> {
       if(user){
         this.props.history.push('/')
       }
     })
   }
      
   render(){
     return (
       
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
      </Switch>
       
     )
   }
}


 
const RootWithAuth=withRouter(Root)

ReactDOM.render(
  <BrowserRouter>

    <RootWithAuth/>
  </BrowserRouter>

    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
