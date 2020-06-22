import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const EmpJumbotron = () => {
    return (
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Employee Directory</h1>
            <p className="lead">Fast and simple way to filter through employees</p>
          </Container>
        </Jumbotron>
      </div>
    )
}

export default EmpJumbotron