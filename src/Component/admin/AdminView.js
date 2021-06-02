import React from "react";
import EditPage from "../EditForms/Editpage";
import jsPDF from 'jspdf';
import * as autoTable from 'jspdf-autotable';
import axios from "axios";
import { Redirect } from "react-router";
export default class AdminView extends React.Component{
    constructor(props){
        super(props);
        this.state={
        step: 1,
        key: "", 
        form:[],
        data: new FormData

    }
    axios.post('http://localhost:5000/list',this.props.value)
    .then(res=>{
     this.setState({form:res.data})})
    
}
handleEdit=(form)=>(e)=>{
    e.preventDefault()
    this.props.selectuser({
      Email: form.Email,
      Password: form.Password
    });
    this.setState({step:2})
}

    convert=()=> {
        
        var doc = new jsPDF("p","px","letter");
        var col = ["firstname","lastname","Email","Gender","age","contact","country","District","Languages","Department"];
        
        var rows = [];
    
 
       
 
   this.state.form.map(elm=>{
     var temp = [elm.firstname,elm.lastname,elm.Email,elm.Gender,elm.age,elm.Contact,elm.Country,elm.District,elm.languages,elm.Department];
    rows.push(temp)

    })
 
    doc.autoTable(col, rows );
 
    doc.save('Data.pdf');
      
    };
    onChangehandle=(e)=>{
        const files = e.target.files;
    const name = e.target.name;
    const { data } = this.state;
    data.append(name, files[0]);
    this.setState({
      data
    });
    }

   import=()=>{
    axios.post('http://localhost:5000/registerbycsv', this.state.data)
   } 


    render(){
        const {step} = this.state;
        




        const body = this.state.form.map(
            form=>(
                <tr>
                    <td>{form.firstname}</td>
                    <td>{form.lastname}</td>
                    <td>{form.Email}</td>
                    <td>{form.Gender}</td>
                    <td>{form.age}</td>
                    <td>{form.Password}</td>
                    <td>{form.Contact}</td>
                    <td>{form.Country}</td>
                    <td>{form.District}</td>
                    <td>{form.languages}</td>
                    <td>{form.Department}</td>
                    <td><img src={ `http://localhost:5000/${form.id}/${form.Photo}` } width="150" height="150"/></td>
                    <td><button onClick={this.handleEdit(form)}>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>)
        ) 
        switch (step) {
           case 1:
                return(
                    <div>
                    <table>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>age</th>
                            <th>Password</th>
                            <th>Contact</th>
                            <th>Country</th>
                            <th>District</th>
                            <th>Language</th>
                            <th>Department</th>
                            <th>Photo</th>
                            <th>Action</th>
                         </tr>
                         {body}
                    </table>
                    <button onClick={this.convert}>Export pdf</button>
                   <div><input name="csv" type="text/csv" onChange={this.onChangehandle}></input><button onClick={this.import}>Import</button></div> </div>
                )
    
                    case 2:
                       return <Redirect to="edit" ></Redirect> 
    
    }





    }

}