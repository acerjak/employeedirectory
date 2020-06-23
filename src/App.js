import React, {Component} from 'react'
import './App.css'
import employees from './employees.json'
import EmpJumbotron from './components/EmpJumbotron'
import EmployeeDetails from './components/EmployeeDetails'
import SearchForm from './components/SearchForm'
import Table from 'react-bootstrap/Table'

class App extends Component {
//setting this.state.employees to the employees json array
  state = {
    first_name: '',
    employees,
    filtered: []
  }

//handle input change
handleInputChange = event => {
  console.log(event.target.value)
  const inputValue = event.target.value
  this.setState({ first_name: inputValue})
  this.filterNames(inputValue)
}

//handle filtering name
filterNames (inputValue) {
  const { employees } = this.state
  let filtered = employees.filter(employee => 
    employee.first_name ? employee.first_name.includes(inputValue) : null)
  this.setState({ filtered })
  console.log(filtered)
}

//handle filter by name
// handleFilter = event => {
//   event.preventDefault()
//   const employees = this.setState({ employees: employees.filter(emp => emp.name.indexOf(input) !== -1)})
// }
//handle sort
handleSort = event => {
  event.preventDefault()
  employees.sort((a,b) => a.first_name < b.first_name ? -1 : 1)
  // event.preventDefault()
  // employees.sort(function(a,b){
  // return a.first_name < b.first_name ? -1:1
// })
}


  // handleFilter(e){
  //   e.preventDefault()
  //   let input = e.target.value
  //   this.setState({
  //     originalEmployees: employees.filter(emp => emp.name.indexOf(input) !== -1)
  //   })
    // filter original employees using the input updating employees

  // }

  render(){
    return (
    <>
      <EmpJumbotron></EmpJumbotron>
      <SearchForm
        title={this.state.first_name}
        handleInputChange={this.handleInputChange}
      />
    <hr></hr>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th onClick={this.handleSort}>First Name</th>
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
