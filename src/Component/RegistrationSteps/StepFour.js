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
    const{ onChangeHandler} = this.props
    return (
      <div>
          <form>
          
          Photo <input name="photo" type="file"  onChange={onChangeHandler}/>

          
          12th Certificate<input name="plus2_certificate" type="file"  onChange={onChangeHandler}/>

         
         UG or PG Certificate <input name="ug_or_pg_certificate" type="file"  onChange={onChangeHandler}/>

          <br/><br/>


              <button onClick={this.back}>BACK</button>
          <button onClick={this.continue}>submit</button>
      </form>

      </div>
    );
  }
}