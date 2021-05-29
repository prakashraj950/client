import React from "react";
import StepOne from "./RegistrationSteps/StepOne";
import StepTwo from "./RegistrationSteps/StepTwo";
import StepFour from "./RegistrationSteps/StepFour";
import StepThree from "./RegistrationSteps/StepThree";
import UserData from "../Data/FormData";
import axios from "axios";
export default class RegistrationPage extends React.Component {

  constructor() {
    super();
    this.state = {
      step: 1,
      formdata: new UserData(),
      selectedFile: null,
      data: new FormData()
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
    console.log("hello");
    const files = event.target.files;
    const name = event.target.name;
    const { data } = this.state;
    data.append(name, files[0]);
    this.setState({
      data
    });
  }


  



  Submit = async () => {
    const Email = this.state.formdata.Email
   await axios.post('http://localhost:5000/form-data-set',this.state.formdata);
    console.log(Email)
    await axios.post('http://localhost:5000/upload', this.state.data,{
      params:{Email}})
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
          />
        );

      default:
        return true;
    }
  }
}