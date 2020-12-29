import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/"
const EMPLOYEE_LIST_API = EMPLOYEE_API_BASE_URL+ "employees"
const EMPLOYEE_API_CRUD = EMPLOYEE_API_BASE_URL+ "employee"

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_LIST_API);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_CRUD, employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_CRUD+ '/' + employeeId)
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_CRUD+ '/'+employeeId, employee)
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_CRUD+ '/' + employeeId)
    }
}

export default new EmployeeService()
