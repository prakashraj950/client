import React, { Component } from 'react';
import axios from 'axios';

export default class StepFour extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        loaded:0
      }
   
  }

  continue = (e) => {
    e.preventDefault();
    this.props.Submit();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  
onChangeHandler=event=>{
  var files = event.target.files
  // if return true allow to setState
     this.setState({
     selectedFile: files,
     loaded:0
  })

}
  onClickHandler = () => {
    const data = new FormData() 
    for(var x = 0; x<this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x])
    }
    axios.post("http://localhost:5000/upload", data)
    
    } 

  render() {
    return (
      <div>
	      <form>
          <div>
          Photo <input type="file"  onChange={this.onChangeHandler}/>
          <button type="button"  onClick={this.onClickHandler}>Upload</button></div><br/>
          
          <div>
          12th Certificate<input type="file"  onChange={this.onChangeHandler}/>
          <button type="button"  onClick={this.onClickHandler}>Upload</button></div><br/>
          
         <div>
         UG or PG Certificate <input type="file"  onChange={this.onChangeHandler}/>
          <button type="button"  onClick={this.onClickHandler}>Upload</button>
          </div><br/><br/>  
              
              
              <button onClick={this.back}>BACK</button>
          <button onClick={this.continue}>submit</button>
      </form>
	     
      </div>
    );
  }
}