import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchForm() {
  return (
    <>
      <InputGroup className="mb-3 w-50 mx-auto">
        <Form.Control
          placeholder="Please type the book..."
          aria-label="Please type the book..."
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2">
          Start
        </Button>
      </InputGroup>
    </>
  );
}

export default SearchForm;