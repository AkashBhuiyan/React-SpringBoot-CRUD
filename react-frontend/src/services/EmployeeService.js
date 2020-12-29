import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/"
const EMPLOYEE_LIST_API = EMPLOYEE_API_BASE_URL+ "employees"
const ADD_EMPLOYEE_API = EMPLOYEE_API_BASE_URL+ "employee"

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_LIST_API);
    }

    createEmployee(employee){
        return axios.post(ADD_EMPLOYEE_API, employee)
    }

    getEmployeeById(employeeId){
        return axios.get(ADD_EMPLOYEE_API+ '/' + employeeId)
    }

    updateEmployee(employee, employeeId){
        return axios.put(ADD_EMPLOYEE_API+ '/'+employeeId, employee)
    }
}

export default new EmployeeService()
