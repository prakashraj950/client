export default class FormData {
  constructor() {
    this.firstname = "";
    this.lastname = "";
    this.Email = "";
    this.Gender = "";
    this.age = "";
    this.Password = "";
    this.Contact = "";
    this.Country = "";
    this.District = "";
    this.languages = [];
    this.Department = "";
    this.Photo = "";
    this.plusTwo_Certificate = "";
    this.UG_or_PG_Certificate = "";
  }
}

export class Validate {
  constructor(form) {
    this.formErrors = {};
    this.form = form;
  }

  StepOneValidation() {
    const { Email, Password } = this.form;

  

    //Email
    if(Email===""){
      delete this.formErrors["EmailErr"];
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
      this.formErrors["EmailErr"] = "Invalid email id.";
    } else {
      delete this.formErrors["EmailErr"];
    }

   
    

    //setpassword
    if(Password===""){
      return delete this.formErrors["PasswordErr"];
    }
   else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(Password)) {
      this.formErrors["PasswordErr"] =
        "Check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.";
    } else delete this.formErrors["PasswordErr"];
  }

  StepTwoValidation() {
    const { Contact } = this.form;
    //Contact
    if (Contact==="") delete this.formErrors["ContactErr"];
    else if (!/^\d{10}$/.test(Contact)) {
      this.formErrors["ContactErr"] = "Invalid phone number.";
    } else delete this.formErrors["ContactErr"];

  }
}
