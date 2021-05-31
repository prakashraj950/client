import React from "react"
export default class View extends React.Component{
    constructor(props){
        super(props);
       
    }
    render(){
        const body = this.props.data.map(
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
                    <td><img src={`http://localhost:5000/${form.id}/${form.Photo}`} width="150" height="150"/></td>
                    <td><img src={`http://localhost:5000/${form.id}/${form.plusTwo_Certificate}`} width="150" height="150"/></td>
                    <td><img src={`http://localhost:5000/${form.id}/${form.UG_or_PG_Certificate}`} width="150" height="150"/></td>
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
                         </tr>
                         {body}
                    </table>
                )
    
    
    
    }







}