import React, {Component} from 'react'
import './App.css'
import employees from './employees.json'
import SearchForm from './components/SearchForm'
import EmpJumbotron from './components/EmpJumbotron'
import EmployeeDetails from './components/EmployeeDetails'
import Table from 'react-bootstrap/Table'

class App extends Component {
//setting this.state.employees to the employees json array
  state = {
    firstName: '',
    lastName: '',
    employees,
    originalEmployees: employees
  }

//handle input change
handleInputChange = event => {
  event.preventDefault()
  this.setState({ [event.target.name]: event.target.value })
}

//handle filter by name
// handleFilter = event => {
//   event.preventDefault()
//   const employees = this.setState({ employees: employees.filter(emp => emp.name.indexOf(input) !== -1)})
// }
//handleSort()

  // handleFilter(e){
  //   let input = e.target.value

  //   this.setState({
  //     employees: originalEmployees.filter(emp => emp.name.iindexOf(input) !== -1)
  //   })
    // filter original employees using the input updating employees

  // }

  render(){
    return (
      <>
      <EmpJumbotron></EmpJumbotron>
        <SearchForm
        onChange={this.handleInputChange}
        value={this.state.firstName}>
        </SearchForm>
        <hr></hr>
          <Table striped bordered hover variant="dark">
          <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Phone</th>
          </tr>
          </thead>
          <tbody>        
      {this.state.employees.map(employee => (
            <EmployeeDetails
              id={employee.id}
              key={employee.id}
              first_name={employee.first_name}
              last_name={employee.last_name}
              email={employee.email}
              job_title={employee.job_title}
              department={employee.department}
              phone={employee.phone}/>
              ))}
          </tbody>
        </Table>
      </>

    )
  }

}

export default App;
