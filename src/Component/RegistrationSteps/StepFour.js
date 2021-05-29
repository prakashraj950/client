import React, { Component } from 'react';
import axios from 'axios';

export default class StepFour extends Component {
  constructor(props) {
    super(props);
      
   
  }

  continue = (e) => {
    e.preventDefault();
    this.props.Submit();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  



  
    
   

  render() {
    const{ onChangeHandler,onClickHandler} = this.props
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