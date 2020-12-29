import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class CreateEmployeeComponent extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            id: this.props.match.params.id,
            firstName: "",
            lastName: "",
            emailId: "",
            gender: "Male",
            errors: {}
            

        }
        //this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
        //this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
        //this.changeEmailHandler = this.changeEmailHandler.bind(this)
        //this.changeGenderHandler = this.changeGenderHandler.bind(this)

        //this.saveEmployee = this.saveEmployee.bind(this)
    }

    dropDownGenderDataChild=(data)=>{
        return <option>{data}</option>
    }

    componentDidMount(){

        if(this.state.id===-1){
            return
        } else{
            EmployeeService.getEmployeeById(this.state.id).then((res)=>{
                let employee = res.data;
                this.setState({
                   firstName: employee.firstName,
                   lastName:employee.lastName,
                   emailId : employee.emailId,
                   gender: employee.gender
                })
            })
        }

    }

    saveEmployee=(e)=>{
        e.preventDefault();

        if(this.handleValidation()){
            let employee = {firstName: this.state.firstName, lastName:this.state.lastName, emailId: this.state.emailId, gender: this.state.gender};
            console.log('employee => '+ JSON.stringify(employee));
            
            if(this.state.id===-1){
                EmployeeService.createEmployee(employee).then(res=>{
                    this.props.history.push('/employees')
                })
            } else{
                EmployeeService.updateEmployee(employee, this.state.id).then(res=>{
                    this.props.history.push('/employees')
                })
            }
            
            
        }
        else{
            alert("Form has errors.")
         }

    }


    changeFirstNameHandler=(event)=>{
        this.setState({firstName:event.target.value})
    }

    changeLastNameHandler=(event)=>{
        this.setState({lastName:event.target.value})
    }

    changeEmailHandler=(event)=>{
        this.setState({emailId:event.target.value})
    }

    changeGenderHandler=(event)=>{
        this.setState({gender:event.target.value})
    }

    onChangeHandler=(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]:inputValue})
        this.handleValidation()
        
    }

    handleValidation(){
        var namePattern = /^([a-zA-Z]){2,30}$/
        var emailPattern = /\S+@\S+\.\S+/;
        let formIsValid = true
        let errors = {}

        
        if (!namePattern.test(this.state.firstName) && this.state.firstName!==""){
            formIsValid = false
            errors['firstName'] ="First Name is not valid";
        }
        
        if (!namePattern.test(this.state.lastName) && this.state.lastName!==""){
            formIsValid = false
            errors['lastName'] = "Last Name is not valid";
        }
        
            
        if (!emailPattern.test(this.state.emailId) && this.state.emailId!==""){
            formIsValid = false
            errors['emailId'] ="Email is not valid";
        }
        

        this.setState({errors: errors});
        return formIsValid;
    }

    cancel(){
        this.props.history.push('/employees')
    }

    getTitle(){
        if(this.state.id===-1){
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    
    render() {

        const gender = ['Male', 'Female']
        const dataItems = gender.map(this.dropDownGenderDataChild)

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body"></div>
                            <form>
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                    value={this.state.firstName} onChange={this.onChangeHandler}/>
                                    <span style={{color: "red"}}>{this.state.errors["firstName"]}</span>
                                </div>

                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                    value={this.state.lastName} onChange={this.onChangeHandler}/>
                                    <span style={{color: "red"}}>{this.state.errors["lastName"]}</span>
                                </div>

                                <div className="form-group">
                                    <label>Email Id: </label>
                                    <input placeholder="Email Id" name="emailId" className="form-control"
                                    value={this.state.emailId} onChange={this.onChangeHandler}/>
                                    <span style={{color: "red"}}>{this.state.errors["emailId"]}</span>
                                </div>

                                <div className="select">
                                <label>Gender: </label>
                                    <select name="gender" onChange={this.onChangeHandler} value={this.state.gender}>
                                        {dataItems}
                                    </select>
                                </div>

                                <button className="btn btn-primary" onClick={this.saveEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                            </form>
                        
                        </div>
                    
                    </div>
                
                </div>
            </div>
        )
    }
}
