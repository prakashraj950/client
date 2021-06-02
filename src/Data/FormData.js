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
    const { firstname, lastname, Email, Gender, age, Password } = this.form;

    //firstname
    if (firstname === "") {
      this.formErrors["firstnameErr"] = "Name is required.";
    } else {
      delete this.formErrors["firstnameErr"];
    }
    //lastname
    if (lastname === "") {
      this.formErrors["lastnameErr"] = "lastname is required.";
    } else {
      delete this.formErrors["lastnameErr"];
    }

    //Email
    if (Email === "") {
      this.formErrors["EmailErr"] = "Email id is required.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
      this.formErrors["EmailErr"] = "Invalid email id.";
    } else {
      delete this.formErrors["EmailErr"];
    }

    //Gender
    if (Gender === "" || Gender === "select") {
      this.formErrors["GenderErr"] = "Select gender.";
    } else {
      delete this.formErrors["GenderErr"];
    }
    //age
    if (age === "") {
      this.formErrors["ageErr"] = "age is required.";
    } else {
      delete this.formErrors["ageErr"];
    }

    //setpassword
    if (Password.trim() === "") {
      this.formErrors["passwordErr"] = "password is required";
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(Password)) {
      this.formErrors["PasswordErr"] =
        "Check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.";
    } else delete this.formErrors["PasswordErr"];
  }

  StepTwoValidation() {
    const { Contact, Country, District } = this.form;
    //Contact
    if (Contact === "") {
      this.formErrors["ContactErr"] = "Phone number is required.";
    } else if (!/^\d{10}$/.test(Contact)) {
      this.formErrors["ContactErr"] = "Invalid phone number.";
    } else delete this.formErrors["ContactErr"];

    //Country
    if (Country === "") {
      this.formErrors["CountryErr"] = "Country name is required.";
    } else {
      delete this.formErrors["CountryErr"];
    }
    //District
    if (District === "") {
      this.formErrors["DistrictErr"] = "District is required.";
    } else {
      delete this.formErrors["DistrictErr"];
    }
  }

  StepThreeValidation() {
    const { languages, Department } = this.form;

    if (languages.length===0) {
      this.formErrors["languagesErr"] = "Select language.";
    } else {
      delete this.formErrors["languagesErr"];
    }

    if (Department === "") {
      this.formErrors["DepartmentErr"] = "Department is required.";
    } else {
      delete this.formErrors["DistrictErr"];
    }
  }
  

}
