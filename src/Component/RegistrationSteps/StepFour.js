import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'
export default class StepFour extends Component {
  constructor(props) {
    super(props);
     this.state={
      photo: this.props.photo
      
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
  




  
    
   

  render() {
    
    const photo = this.state.photo
    console.log(photo)
    const {onChangeHandler,handleCaptchaResponseChange} = this.props
    return (
      <div>
         <div>{this.props.err}</div>
          <form>
          <img src={photo} alt="photo" width="200" height="200"  />
          Photo <input name="Photo" type="file" accept="image/png, image/gif, image/jpeg" onChange={onChangeHandler}/>

          
          12th Certificate<input name="plusTwo_Certificate" type="file" accept="application/pdf" onChange={onChangeHandler}/>

         
         UG or PG Certificate <input name="UG_or_PG_Certificate" type="file" accept="application/pdf" onChange={onChangeHandler}/>
         
          <br/><br/><div><ReCAPTCHA
        sitekey="6LcJmgQbAAAAAPkRfYGkjQvuuwzb7UnmYhBqivOe"
        onChange={handleCaptchaResponseChange}/></div>

              <button onClick={this.back}>BACK</button>
          <button onClick={this.continue}>submit</button>
      </form>

      </div>
    );
  }
}