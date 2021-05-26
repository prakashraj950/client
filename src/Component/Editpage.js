import React from "react";
import StepOne from "./EditForms/StepOne";
import StepTwo from "./EditForms/StepTwo";
import StepFour from "./EditForms/StepFour";
import StepThree from "./EditForms/StepThree";
import FormData from "../Data/FormData";
import axios from "axios";
export default class RegistrationPage extends React.Component {

  constructor() {
    super();
    this.state = {
      step: 1,
      formdata: new FormData()
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

  Submit = () => {
    axios.put('http://localhost:5000/form-data-set',this.state.formdata);
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    const { formdata } = this.state;
    formdata[input] = e.target.value;
    this.setState({ formdata });
  };

  render() {
    var step = this.state.step;

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
            handleChange={this.handleChange}
            values={values}
          />
        );

      default:
        return true;
    }
  }
}