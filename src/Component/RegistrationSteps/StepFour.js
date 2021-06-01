import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'
import RegistrationPage from '../RegistrationPage';
export default class StepFour extends Component {
  constructor(props) {
    super(props);
     this.state={
      photo:"",
      recaptchaResponse:""
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
  
onChangeHandler=(e)=>{
  this.props.onChangeHandler(e);
  this.setState({photo:window.URL.createObjectURL(e.target.files[0])})

}

handleCaptchaResponseChange=(response)=>{
  this.setState({
    recaptchaResponse: response
  });
  <RegistrationPage captcha={this.state.recaptchaResponse} />
}

  
    
   

  render() {
    
    const photo = this.state.photo
    console.log(photo)
    const {onChangeHandler} = this.props
    return (
      <div>
          <form>
          <img src={photo} alt="photo" width="200" height="200"  />
          Photo <input name="Photo" type="file"  onChange={this.onChangeHandler}/>

          
          12th Certificate<input name="plusTwo_Certificate" type="file"  onChange={onChangeHandler}/>

         
         UG or PG Certificate <input name="UG_or_PG_Certificate" type="file"  onChange={onChangeHandler}/>

          <br/><br/><div><ReCAPTCHA
        ref={(el) => { this.recaptcha = el; }}
        sitekey="6LcJmgQbAAAAAPkRfYGkjQvuuwzb7UnmYhBqivOe"
        onChange={this.handleCaptchaResponseChange}/></div>

              <button onClick={this.back}>BACK</button>
          <button onClick={this.continue}>submit</button>
      </form>

      </div>
    );
  }
}