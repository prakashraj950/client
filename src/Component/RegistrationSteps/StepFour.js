import React, { Component } from 'react';

export default class StepFour extends Component {
  constructor(props) {
    super(props);
     this.state={
      photo:""
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


  
    
   

  render() {
    
    const photo = this.state.photo
    console.log(photo)
    const {onChangeHandler} = this.props
    return (
      <div>
          <form>
          <img src={photo} alt="photo" width="200" height="200"  />
          Photo <input name="photo" type="file"  onChange={this.onChangeHandler}/>

          
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