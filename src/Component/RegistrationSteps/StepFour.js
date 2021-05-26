import React from "react";

export default class StepFour extends React.Component {
  state = {
    file: null
  };

  continue = (e) => {
    e.preventDefault();
    this.props.Submit();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleFile(e) {
    let file = e.target.files[0];

    this.setState({ file: file });
  }
  handleUplod(e) {
    let file = this.state.file;

    let formdata = new FormData();

    formdata.append("image", file);
  }

  render() {
    return (
      <div>
        <form>
          <div>
            Photo:{" "}
            <input
              type="file"
              name="file"
              onChange={(e) => this.handleFile(e)}
            />
          </div>
          <div>
            <br />
            12TH Certificate:{" "}
            <input
              type="file"
              name="file"
              onChange={(e) => this.handleFile(e)}
            />
          </div>
          <br />
          <div>
            UG or PG Certificate:{" "}
            <input
              type="file"
              name="file"
              onChange={(e) => this.handleFile(e)}
            />
          </div>
          <button onClick={this.back}>BACK</button>
          <button onClick={this.continue}>submit</button>
        </form>
      </div>
    );
  }
}
