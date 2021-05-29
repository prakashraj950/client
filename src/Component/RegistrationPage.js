import React from "react";
import StepOne from "./RegistrationSteps/StepOne";
import StepTwo from "./RegistrationSteps/StepTwo";
import StepFour from "./RegistrationSteps/StepFour";
import StepThree from "./RegistrationSteps/StepThree";
import FormData from "../Data/FormData";
import axios from "axios";
export default class RegistrationPage extends React.Component {

  constructor() {
    super();
    this.state = {
      step: 1,
      formdata: new FormData(),
      selectedFile: null,
      data: new Formdata
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
    var files = event.target.files
       this.setState({
       selectedFile: files,
       
    })
  }
  onClickHandler = () => {
    const {data} = this.state
    for(var x = 0; x<this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x]);
    };
  }
  



  Submit = async () => {
    const name = this.state.formdata.firstname
   await axios.post('http://localhost:5000/form-data-set',this.state.formdata),
    console.log(name)
    await axios.post(`http://localhost:5000/upload`, this.state.data);
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
            onChangeHandler={this.onChangeHandler}
            onClickHandler={this.onClickHandler}
            values={values}
          />
        );

      default:
        return true;
    }
  }
}