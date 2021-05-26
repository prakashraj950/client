import React from "react";
import { Validate } from "../../Data/FormData";
export default class Firststep extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: "" };
    this.validate = new Validate(this.props.values);
  }
  continue = (e) => {
    e.preventDefault();
    this.validate.StepOneValidation();
    let errors = this.validate.formErrors;
    if (Object.keys(errors).length === 0) {
      this.props.nextStep();
    } else {
      this.setState({ errors: Object.values(errors).join("\n") });
    }
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
          firstname:
          <input
            type="text"
            onChange={handleChange("firstname")}
            defaultValue={values.firstname}
          />
          <br />
          <br />
          lastname:
          <input
            type="text"
            onChange={handleChange("lastname")}
            defaultValue={values.lastname}
          ></input>
          <br />
          <br />
          Email:
          <input
            type="Email"
            onChange={handleChange("Email")}
            defaultValue={values.Email}
          ></input>
          <br />
          <br />
          <div>
            Gender :{" "}
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange("Gender")}
              checked={values.Gender === "male"}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange("Gender")}
              checked={values.Gender === "female"}
            />
            Female
          </div>
          <br />
          <br />
          age:{" "}
          <input
            type="number"
            name="age"
            onChange={handleChange("age")}
            defaultValue={values.age}
          />
          <br />
          <br />
          setpassword:{" "}
          <input
            type="password"
            name="Password"
            onChange={handleChange("Password")}
            defaultValue={values.Password}
          />
          <br />
          <br />
          <button name="continue" onClick={this.continue}>
            continue
          </button>
          {errors}
        </form>
      </div>
    );
  }
}
