import React from "react";
import StepOne from "./RegistrationSteps/StepOne";
import StepTwo from "./RegistrationSteps/StepTwo";
import StepFour from "./RegistrationSteps/StepFour";
import StepThree from "./RegistrationSteps/StepThree";
import UserData from "../Data/FormData";
import { Redirect } from "react-router-dom";
import axios from "axios";
export default class RegistrationPage extends React.Component {

  constructor() {
    super();
    this.state = {
      step: 1,
      formdata: new UserData(),
      selectedFile: null,
      data: new FormData(),
      recaptchaResponse:"",
      err:"",
      expired:"",
      photo:""
    };
  }
  componentDidMount() {
 
    setTimeout(
    () => this.setState({expired: true}),
    1000*60*3
    );
     }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  onChangeHandler=(e)=>{
    const file = e.target.files[0];
    if (typeof(file)!== "undefined"){
      const size = parseFloat(file.size /(1024*1024)).toFixed(2);
      const name = file.name;
const lastDot = name.lastIndexOf('.');
const ext = name.substring(lastDot + 1).toLowerCase();

if (["jpg", "png"].includes(ext) && size > 1) {
  alert('please select image files less than 2MB')
}
else if (["pdf"].includes(ext) && size > 3) {
  alert('please select pdf files less than 3MB')
}
else{ 
    this.setState({photo:window.URL.createObjectURL(e.target.files[0])})
    const files = e.target.files;
    const name = e.target.name;
    const { data } = this.state;
    data.append(name, files[0]);
    this.setState({
      data
    });
  }
}
  }

  handleCaptchaResponseChange=(response)=>{
    console.log(response)
    this.setState({
      recaptchaResponse: response
    });
    
  }

  

  Submit = async () => {
  
    const Email = this.state.formdata.Email;
    const captcha = this.state.recaptchaResponse;
    let res
    try{
    res = await axios.post('http://localhost:5000/form-data-set',{data:this.state.formdata,captcha:captcha})
    console.log(res.data)
    } catch(err){
      return this.setState({err:"can't register the user"})}
    if(!res.data.success){
          alert(res.data.msg)
    } else {
      console.log("hello")
      try{
      await axios.post('http://localhost:5000/upload', this.state.data,{
      params:{Email}})
      }catch(err){console.log(err)}
      
      this.setState({step:5})
    }

    
    
    }
  
  



  // Handle fields change
  handleChange = (input) => (e) => {
    const { formdata } = this.state;
    formdata[input] = e.target.value;
    this.setState({ formdata });
  };

  render() {
    if (this.state.expired) {
      return <Redirect to="/"/>
    }
    const { step,err,photo }= this.state;
    const values = this.state.formdata;
    
    switch (step) {
      case 1:
        return (
          <StepOne
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <StepTwo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <StepThree
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <StepFour
            Submit={this.Submit}
            prevStep={this.prevStep}
            onChangeHandler={this.onChangeHandler}
            values={values}
            handleCaptchaResponseChange={this.handleCaptchaResponseChange}
            err ={err}
            photo={photo}
          />
        );
        case 5:
          return(<Redirect to={"login"} />)

      default:
        return true;
    }
  }
}
