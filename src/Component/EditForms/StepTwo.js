import React from "react";
import { Validate } from "./FormData";
export default class StepTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: "" };
    this.validate = new Validate(this.props.values);
  }

  continue = (e) => {
    e.preventDefault();
    this.validate.StepTwoValidation();
    let errors = this.validate.formErrors;
    if (Object.keys(errors).length === 0) {
      this.props.nextStep();
    } else {
      this.setState({ errors: Object.values(errors).join("\n") });
    }
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    let errors;
    if (this.state.errors !== "")
      errors = (
        <div style={{ color: "red", fontSize: "14px" }}>
          <p>{this.state.errors}</p>
          <br />
        </div>
      );

    return (
      <div>
        <form>
          Contact:
          <input
            type="text"
            onChange={handleChange("Contact")}
            defaultValue={values.Contact}
          ></input>
          <br />
          <br />
          Country:
          <input
            type="text"
            onChange={handleChange("Country")}
            defaultValue={values.Country}
          ></input>
          <br />
          <br />
          District:
          <input
            type="text"
            onChange={handleChange("District")}
            defaultValue={values.District}
          ></input>
          <br />
          <br />
          <button onClick={this.back}>BACK</button>
          <button onClick={this.continue}>NEXT</button>
        </form>
        {errors}
      </div>
    );
  }
}
