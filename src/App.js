import "./styles.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import LoginPage from "./Component/LoginPage";
import RegistrationPage from "./Component/RegistrationPage";
import HomePage from "./Component/HomePage";

export  class App extends React.Component {
  
  state ={
    Email : "",
    password: "",
    role:""

    }
  setAppState=(Email,password,role)=>{
  
 this.setState({Email})
 this.setState({password})
 this.setState({role})
  }

 render(){
  return (
    <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/register">
          <RegistrationPage />
        </Route>
        <Route path="/login">
          <LoginPage setAppState={this.setAppState} />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}
}