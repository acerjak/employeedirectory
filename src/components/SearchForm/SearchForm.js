import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


const SearchForm = () => {
    return (
      <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="name" className="mr-sm-2">Search:</Label>
        <Input type="name" name="name" id="name" placeholder="start typing name" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    )
}

export default SearchForm