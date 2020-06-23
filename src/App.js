import React, {Component} from 'react'
import './App.css'
import employees from './employees.json'
import EmployeeTable from './components/EmployeeTable'
import SearchForm from './components/SearchForm'
import EmpJumbotron from './components/EmpJumbotron'


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
        value={this.state.firstName}
        ></SearchForm>
        {this.state.employees.map(employee => (
          <EmployeeTable
          id={employee.id}
          key={employee.id}
          first_name={employee.first_name}
          last_name={employee.last_name}
          email={employee.email}
          job_title={employee.job_title}
          department={employee.department}
          phone={employee.phone}
          />
        ))}
        
      </>

    )
  }

}

export default App;
