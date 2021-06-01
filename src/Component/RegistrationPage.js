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
      recaptchaResponse:""
    };
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

  onChangeHandler=event=>{
    const files = event.target.files;
    const name = event.target.name;
    const { data } = this.state;
    data.append(name, files[0]);
    this.setState({
      data
    });
  }

  handleCaptchaResponseChange=(response)=>{
    console.log(response)
    this.setState({
      recaptchaResponse: response
    });
    
  }

  

  Submit = async () => {
    const Email = this.state.formdata.Email;
    const captcha = this.state.recaptchaResponse
    const res = await axios.post('http://localhost:5000/form-data-set',{data:this.state.formdata,captcha:captcha})
    console.log(res.data)
    if(!res.data.success){
          alert(res.data.msg)
    } else {
      console.log("hello")
      await axios.post('http://localhost:5000/upload', this.state.data,{
      params:{Email}})
      this.setState({step:5})
      console.log("ah")
    }

    console.log(Email)
    
    };

  // Handle fields change
  handleChange = (input) => (e) => {
    const { formdata } = this.state;
    formdata[input] = e.target.value;
    this.setState({ formdata });
  };

  render() {
    const { step }= this.state;
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
          />
        );
        case 5:
          return(<Redirect to={"login"} />)

      default:
        return true;
    }
  }
}