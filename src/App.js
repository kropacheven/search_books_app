import React from "react";
import { Container, Carousel } from 'react-bootstrap';
import SearchForm from "./components/SearchForm";
import DropdownMenu from "./components/Dropdown";

function App() {
  return (
    <div>
      <Carousel>
        <Container>
          <h1>Search for Books</h1>
          <SearchForm />
          <hr></hr>
          <p>Categories:</p>
          <DropdownMenu />
          <br></br>
          <p>Sorting by:</p>
          <DropdownMenu />
        </Container>
      </Carousel>
    </div>
  );
}

export default App;
