import React from "react";
export default class AdminView extends React.Component{
    constructor(props){
        super(props);
       
    }
    render(){
        const body = this.props.persons.map(
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
                    <td>{form.Photo}</td>
                    <td>{form.plusTwo_Certificate}</td>
                    <td>{form.UG_or_PG_Certificate}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>)
        )
                return(
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
                            <th>PlusTwo Certificate</th>
                            <th>UG OR PG Certificate</th>
                            <th>Action</th>
                         </tr>
                         {body}
                    </table>
                )
    
    
    
    }







}