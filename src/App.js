import React, {Component} from 'react'
import './App.css'
import employees from './employees.json'
import EmployeeTable from './components/EmployeeTable'
import SearchForm from './components/SearchForm'
import EmpJumbotron from './components/EmpJumbotron'


class App extends Component {
//setting this.state.employees to the employees json array
  state = {
    employees,
    originalEmployees: employees
  }

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
        <SearchForm></SearchForm>
        <EmployeeTable></EmployeeTable>
      </>

    )
  }

}

export default App;
