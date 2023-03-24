import React from "react";
import {useEffect, useState} from 'react';
import axios from 'axios';


import SearchForm from "./components/SearchForm";
import DropdownMenu from "./components/DropdownMenu";
// import { Col, Row, Container } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Dropdown from 'react-bootstrap/Dropdown';


function App() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    // SearchForm fetch request:
    axios.get()
      .then(response => {
        //handle success
        setBook(response.data);
      })
      .catch(error => {
        //handle error
        console.log("Error while fetching and parsing data!")
      })
  }, []) 


  return (
    <div className="container text-center">
      <h1 className='display-5 mb-3'>Search for books</h1>
      <SearchForm />
      <div>
        <h6>Category</h6>
        <DropdownMenu />
        <br></br>
        <h6>Filter</h6>
        <DropdownMenu />
      </div>
      <div>
        <br></br>
        <h6>Found 0 results</h6>
      </div>
      <div>

      </div>

    </div>
  );
}

// {/* <Container className="mt-4 p-5 bg-secondary">
//         <Row>
//           <Col sm={2}></Col>
//           <Col sm={8}>
//             <h1 className="text-light">Search book app</h1>
//           </Col>
//           <Col sm={2}></Col>
//         </Row>
//         <Row>
//           <Col sm={2}></Col>
//           <Col sm={8}>
//             <InputGroup className="mb-3 mt-3 w-60 mx-auto">
//               <Form.Control
//                 placeholder="Enter your search..."
//                 aria-label="Recipient's username"
//                 aria-describedby="basic-addon2"
//               />
//               <Button variant="primary" id="button-addon2">
//                 Start
//               </Button>
//             </InputGroup>
//           </Col>
//           <Col sm={2}></Col>
//         </Row>
//         <Row>
//           <Col sm={3}></Col>
//           <Col sm={3}>
//             <h6 className="text-light">Category:</h6>
//             <Dropdown>
//               <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Dropdown
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Col>
//           <Col sm={3}>
//             <h6 className="text-light">Filter:</h6>
//             <Dropdown>
//               <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Dropdown
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Col>
//           <Col sm={3}></Col>
//         </Row>
//       </Container> */}



export default App;
