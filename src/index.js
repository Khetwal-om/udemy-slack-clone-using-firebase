import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import 'semantic-ui-css/semantic.min.css'
import firebase from 'firebase'
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers';

import { setUser,clearUser} from './actions'
import Spinner from './Spinner';


const store=createStore(rootReducer,composeWithDevTools())


class Root extends Component {
   componentDidMount(){
     console.log(this.props.isLoading)
     firebase.auth().onAuthStateChanged(user=> {
       if(user){
         this.props.setUser(user)
         console.log(user)
         this.props.history.push('/')
       }else{

        this.props.history.push('/login')
        this.props.clearUser()
       }
     })
   }
      
   render(){
     return this.props.isLoading ? <Spinner/> :(
       
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
      </Switch>
       
     )
   }
}


const mapStateToProps=state=> ({
  isLoading: state.user.isLoading
})
 
const RootWithAuth=withRouter(connect(mapStateToProps,{setUser,clearUser})(Root))

ReactDOM.render(
  <Provider store={store}>

  <BrowserRouter>

    <RootWithAuth/>
  </BrowserRouter>
  </Provider>

    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
