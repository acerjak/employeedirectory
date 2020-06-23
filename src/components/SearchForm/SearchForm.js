import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'


const SearchForm = props => {
    return (
      <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="name" className="mr-sm-2">Search:</Label>
        <Input 
        type="name" 
        title="first_name" 
        name="first_name" 
        id="first_name" 
        placeholder="start typing name"
        onChange={props.handleInputChange}
        value={props.first_name} />
      </FormGroup>
    </Form>
    )
}

export default SearchForm