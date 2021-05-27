import React from "react";
import EditPage from "../EditForms/Editpage"
export default class AdminView extends React.Component{
    constructor(props){
        super(props);
        this.state={
        step: 1,
        key: "", 
    }
       
    }
    handleEdit=(key)=>(e)=>{
        e.preventDefault()
       this.setState({key})
        this.setState({step:2})
    }

    render(){
        const {step} = this.state;
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
                    <td><button onClick={this.handleEdit(form.id)}>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>)
        ) 
        switch (step) {
           case 1:
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
                            <th>Action</th>
                         </tr>
                         {body}
                    </table>
                )
    
                    case 2:
                        const {key} = this.state
                        return <EditPage id={key}/> 
    
    }





    }

}