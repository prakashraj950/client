import ReactHTMLTableToExcel from 'react-html-table-to-excel';  
export class ExportExcel extends Component {  
        constructor(props) {  
                super(props)  
                this.state = {  
                        ProductData: []  

                }  
        }  
        componentDidMount() {  
                axios.get('http://localhost:51760/Api/Emp/employee').then(response => {  
                        console.log(response.data);  
                        this.setState({  
                                ProductData: response.data  
                        });  
                });  
        }  
        render() {  
                return (  
                        <div>  
                                <table id="emp" class="table">  
                                        <thead>  
                                                <tr>  
                                                        <th>Id</th>  
                                                        <th>Name</th>  
                                                        <th>Age</th>  
                                                        <th>Address</th>  
                                                        <th>City</th>  
                                                        <th>ContactNum</th>  
                                                        <th>Salary</th>  
                                                        <th>Department</th>  



                                                </tr>  
                                        </thead>  
                                        <tbody>              {  
                                                this.state.ProductData.map((p, index) => {  
                                                        return <tr key={index}>  
                                                                <td>  
                                                                        {p.Id}  
                                                                </td>  
                                                                <td >{p.Name}</td>  
                                                                <td >{p.Age}</td>  
                                                                <td >{p.Address}</td>  
                                                                <td >{p.City}</td>  
                                                                <td >{p.ContactNum}</td>  
                                                                <td >{p.Salary}</td>  
                                                                <td style={{ paddingRight: "114px" }} >{p.Department}</td>  
                                                        </tr>  
                                                })  
                                        }  

                                        </tbody>  

                                </table>  
                                <div>  
                                        <ReactHTMLTableToExcel  
                                                className="btn btn-info"  
                                                table="emp"  
                                                filename="ReportExcel"  
                                                sheet="Sheet"  
                                                buttonText="Export excel" />  
                                </div>  
                        </div>  
                )  
        }  
}  

export default ExportExcel