import React from "react";
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

function SearchForm() {
    return (
        <Form inline>
            <FormGroup size="sm" controlId="formInlineEmail">
                <FormControl type="search" placeholder="find the book..." />
            </FormGroup>
            {' '}
            <br></br>
            <Button type="submit">
                search
            </Button>
        </Form>
    );
}

export default SearchForm;