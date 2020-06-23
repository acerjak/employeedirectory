import React from 'react'

const EmployeeDetails = props => {
    return (
    <tr>
        <td>{props.first_name}</td>
        <td>{props.last_name}</td>
        <td>{props.email}</td>
        <td>{props.job_title}</td>
        <td>{props.department}</td>
        <td>{props.phone}</td>
    </tr>
    )
}

export default EmployeeDetails