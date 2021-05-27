import React from "react";
function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export default class StepThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      languages: this.props.values.languages
   };
    
    
    
  }

  continue =(e) => {
    e.preventDefault();
   this.props.nextStep();
    
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  onLanguageSelected = (e) => {
    const option = e.target.value;
    const languages = this.state.languages;
    if (e.target.checked) languages.push(option);
    else removeItemOnce(languages, option);
    this.setState({ languages });
  };

  render() {
    const { values, handleChange } = this.props;
    let languages = this.state.languages;
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
          <div>
            languages:{" "}
            <input
              type="checkbox"
              name="languages"
              value="c"
              checked={languages.includes("c")}
              onChange={this.onLanguageSelected}
            />
            c
            <input
              type="checkbox"
              name="languages"
              value="c++"
              checked={languages.includes("c++")}
              onChange={this.onLanguageSelected}
            />
            c++
            <input
              type="checkbox"
              name="languages"
              value="python"
              checked={languages.includes("python")}
              onChange={this.onLanguageSelected}
            />
            python
          </div>
          <br />
          <br />
          <div>
            Department:{" "}
            <select
              name="dept"
              value={values.Department}
              onChange={handleChange("Department")}
            >
              <option name="dept" value="ECE">
                ECE
              </option>
              <option name="dept" value="CSE">
                CSE
              </option>
              <option name="dept" value="IT">
                IT
              </option>
            </select>
          </div>
          <br />

          <button onClick={this.back}>BACK</button>
          <button onClick={this.continue}>NEXT</button>
        </form>
        {errors}
      </div>
    );
  }
}