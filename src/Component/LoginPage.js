import React from "react";
import axios from "axios";
import View from "./ViewPage";
import AdminView from "./admin/AdminView";
import { Redirect } from "react-router-dom";
export default class LoginPage extends React.Component {
 
  constructor() {
    super();
    this.state = {
      step: 1,
     Email:"",
     Password:"",
      EmailErr: "",
      passwordErr: "",
      message:""
      
    };
  }
 
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { Email, Password } = this.state;
    // email validation.
    if (Email === "") {
      this.setState({ EmailErr: "Email id is required." });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
      this.setState({ EmailErr: "Invalid email id." });
    } else {
      this.setState({ EmailErr: "" });
    }

    //password Validation
    if (Password === "") {
      this.setState({ passwordErr: "password is required" });
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(Password)) {
      this.setState({
        PasswordErr:
          "Check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter."
      });
    } else this.setState({ PasswordErr: "" });
      
    axios.post('http://localhost:5000/login',{Email:this.state.Email, Password:this.state.Password})
    .then(res=>{
      if (res.data.status==="success"){
        this.props.setAppState(this.state.Email,this.state.Password,res.data.role);
        if (res.data.role==="admin"){
          this.setState({step:3});
        } else {
          this.setState({step:2});
        }
      }else{ this.setState({message:"invalid user id or password"})

      }
        
    
    })
  }

  render() {
    var step = this.state.step;

    switch(step){
    case 1:
      return (
      <div>
        <form>
          Email:
          <input
            type="email"
            placeholder="email address"
            name="Email"
            onChange={this.handleChange}
          />
          <div style={{ color: "red", fontSize: "14px" }}>
            {this.state.EmailErr}
          </div>
          <br />
          <br />
          password:
          <input
            type="password"
            placeholder="password"
            name="Password"
            onChange={this.handleChange}
          />
          <div style={{ color: "red", fontSize: "14px" }}>
            {this.state.passwordErr}
          </div><br/>
          <h1>{this.state.message}</h1>
          <br />
          <br />
          <button onClick={this.handleSubmit}>login</button>
        
        </form>
      </div>
    );
      case 2:
        return (<Redirect to={"view"} />)
  
      case 3:
        return (<Redirect to={"adminview"} />)
      default:
        return true
    
      }
  
  }
}