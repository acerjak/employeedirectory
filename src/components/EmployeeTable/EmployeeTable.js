import React from 'react'
import Table from 'react-bootstrap/Table'

const EmployeeTable = () => {
    return (
        <Table striped bordered hover variant="dark">
          <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Phone</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
        
    )
}

export default EmployeeTable