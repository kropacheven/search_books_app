import React from "react";
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

function SearchForm() {
    return (
        <Form>
            <FormGroup controlId="formInlineEmail">
                <FormControl type="search" placeholder="find the book..." />
                <Button type="submit">
                    search
                </Button>
            </FormGroup>
        </Form>
    );
}

export default SearchForm;