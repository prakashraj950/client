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
import AdminView from "./Component/admin/AdminView";
import ViewPage from "./Component/ViewPage";
import EditPage from "./Component/EditForms/Editpage";

export default  class App extends React.Component {
  constructor(){
  super();
  
    setTimeout(()=>{
      this.setState({Email:"",Password:"",role:"",selecteduser:""})
      },1000)
      
  this.state ={
    Email : "",
    Password: "",
    role:"",
    selecteduser: ""

  }
    }
  setAppState=(Email,Password,role)=>{
  
 this.setState({Email})
 this.setState({Password})
 this.setState({role})
  }
  selectuser=(selecteduser)=>{
    console.log(selecteduser)
    this.setState({selecteduser})
  }

 render(){
   const {Email,Password,role,selecteduser} = this.state
  const value = {Email,Password,role}
  
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
        <Route path="/view">
          <ViewPage value={value} />
        </Route>
        <Route path="/adminView">
          <AdminView value={value}
          selectuser={this.selectuser}/>
          </Route>
          <Route path="/edit">
          <EditPage selecteduser={selecteduser}
          />
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
