import React from 'react'
import Table from 'react-bootstrap/Table'

const EmployeeTable = props => {
    return (
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
            <tr>
              <td>{props.first_name}</td>
              <td>{props.last_name}</td>
              <td>{props.email}</td>
              <td>{props.job_title}</td>
              <td>{props.department}</td>
              <td>{props.phone}</td>
            </tr>
          </tbody>
        </Table>
        
    )
}

export default EmployeeTable