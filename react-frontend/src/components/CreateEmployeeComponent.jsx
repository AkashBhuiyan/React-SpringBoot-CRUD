import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class CreateEmployeeComponent extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            firstName: "",
            lastName: "",
            emailId: "",
            gender: "Male"

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

    saveEmployee=(e)=>{
        e.preventDefault();
        
        let employee = {firstName: this.state.firstName, lastName:this.state.lastName, emailId: this.state.emailId, gender: this.state.gender};
        console.log('employee => '+ JSON.stringify(employee));
        
        EmployeeService.createEmployee(employee).then(res=>{
            this.props.history.push('/employees')
        })
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
        var myname = event.target.name;
        var myvalue = event.target.value;
        this.setState({[myname]:myvalue})

    }

    cancel(){
        this.props.history.push('/employees')
    }
    
    render() {

        const gender = ['Male', 'Female']
        const dataItems = gender.map(this.dropDownGenderDataChild)

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body"></div>
                            <form>
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                    value={this.state.firstName} onChange={this.onChangeHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                    value={this.state.lastName} onChange={this.onChangeHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Email Id: </label>
                                    <input placeholder="Email Id" name="emailId" className="form-control"
                                    value={this.state.emailId} onChange={this.onChangeHandler}/>
                                </div>

                                <div className="select">
                                <label>Gender: </label>
                                    <select name="gender" onChange={this.onChangeHandler} value={this.state.gender}>
                                        {dataItems}
                                    </select>
                                </div>

                                <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                            </form>
                        
                        </div>
                    
                    </div>
                
                </div>
            </div>
        )
    }
}
