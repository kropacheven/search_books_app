import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Learn more...
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={props.src} alt={props.title} className='text-center'></img>
            <hr></hr>
            <h5><strong>Category:</strong> {props.category}</h5>
            <h5><strong>Author:</strong> {props.author}</h5>
            <p><strong>Description:</strong> {props.description}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
//render(<Example />);