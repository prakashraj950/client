import React,{ Component } from "react";
import EditPage from "../EditForms/Editpage";
import jsPDF from 'jspdf';
import * as autoTable from 'jspdf-autotable';
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router";
//
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class AdminView extends React.Component{
    constructor(props){
        super(props);
        this.state={
        step: 1,
        key: "", 
        form:[],
        data: new FormData(),
        mail:{}

    }
    
    
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
    .then((value)=>{this.fetchData()});
   } 
  
  
   fetchData=()=>{
    axios.post('http://localhost:5000/list',this.props.value)
    .then(res=>{
     this.setState({form:res.data})})
   }

   componentDidMount() {
    this.fetchData();
  }
  onModalhandle=(key)=>(e)=>{
      const {mail} = this.state
    mail[key] = e.target.value;
    this.setState({mail})

  }
  initialiseMail = (Email) => () => {
      const mail = this.state.mail; 
      mail.to = Email; 
      this.setState({ mail });
    }
  mailsubmit=()=>{
      axios.post('http://localhost:5000/send',this.state.mail)
      .then((res)=>{
          alert(res.data)})
      }
      onclick=()=>{
         this.setState({step:3})

      }
  
    render(){
        const {step} = this.state; 

        const body = this.state.form.map(
            form=>(
                <tr key={form.Email}>
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
                    <td><MailModal onChangehandle={this.onModalhandle}
                    mail={this.state.mail}
                    initialiseMail={this.initialiseMail(form.Email)}
                    mailsubmit={this.mailsubmit}/></td>
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
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Mail</th>
                         </tr>
                         {body}
                    </table>
                    <button onClick={this.convert}>Export pdf</button>
                   <div><input name="csv" type="file" accept="text/csv" onChange={this.onChangehandle}></input><button onClick={this.import}>Import CSV</button></div> 
                   <button onClick={this.onclick}>export Excel</button>
                   </div>
                )
    
                    case 2:
                       return <Redirect to="edit" ></Redirect> 
                    case 3:
                        return <Download  formset={this.state.form}/>
    
    }





    }

}
class MailModal extends React.Component {
    
    state = {
        isOpen: false
      };
    
      
        openModal = () => {this.props.initialiseMail();this.setState({ isOpen: true });}
       closeModal = () => this.setState({ isOpen: false });
    
    render() {
        const {mail,mailsubmit }= this.props
        return (
            <>
              
                <Button variant="primary" onClick={this.openModal}>
                  Mail
                </Button>
              <Modal  size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={this.state.isOpen} onHide={this.closeModal}>
                
                <Modal.Header closeButton>
                  <Modal.Title  id="contained-modal-title-vcenter">Mail</Modal.Title>
                </Modal.Header>
                <Modal.Body><form>To:<input name="to" value={mail.to} onChange={this.props.onChangehandle("to")}></input><br/><br/>
                                Subject:<input name="subject" value={mail.subject} onChange={this.props.onChangehandle("subject")}></input><br/><br/>
                                Message:<textarea name="message" value={mail.message} onChange={this.props.onChangehandle("message")}></textarea>
                </form></Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.closeModal}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={mailsubmit}>Send</Button>
                </Modal.Footer>
              </Modal>
            </>
          );
        }
      }

      class Download extends React.Component {
        render() {
            return (
                <ExcelFile element={<button>Download Data</button>}>
                    <ExcelSheet data={this.props.formset} >
                        <ExcelColumn label="firstname" />
                        <ExcelColumn label="lastname" />
                        <ExcelColumn label="Email" />
                        <ExcelColumn label="Gender"/>
                    </ExcelSheet>
                
                </ExcelFile>
            );
        }
    }