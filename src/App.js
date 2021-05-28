import "./styles.css";
import React from 'react';
import StepFour from "./Component/RegistrationSteps/StepFour";
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

//import LoginPage from "./Component/LoginPage";
import RegistrationPage from "./Component/RegistrationPage";
import HomePage from "./Component/HomePage";

export default function App() {
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
          <StepFour />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}