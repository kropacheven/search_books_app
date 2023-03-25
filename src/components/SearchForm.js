import React, { useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchForm = (props) => {
  const searchText = useRef(null);

  const handleSubmit = e => {
    e.prevent.default();
    props.changeQuery(searchText.current.value);
    e.currentTarget.reset()
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <InputGroup className="mb-3 w-50 mx-auto" ref={searchText} >
          <Form.Control

            placeholder="Please type the book..."
            aria-label="Please type the book..."
            aria-describedby="basic-addon2"
          />
          <Button variant="primary" id="button-addon2">
            Start
          </Button>
        </InputGroup>
      </form>
    </>
  );
}

export default SearchForm;