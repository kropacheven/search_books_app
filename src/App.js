import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';


import SearchForm from "./components/SearchForm";
import DropdownCategory from "./components/DropdownCategory";
import DropdownFilter from "./components/DropdownFilter";
import BookContainer from "./components/BookContainer";


function App() {
  const [books, setBook] = useState([]);
  const [query, setQuery] = useState("javascript");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let activeFetch = true;
    // SearchForm fetch request:
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&maxResults=16`)
      .then(response => {
        //handle success
        if (activeFetch) {
          //console.log(response)
          setBook(response.data.items);
          setLoading(false);
        }
      })
      .catch(error => {
        //handle error
        console.log("Error while fetching and parsing data!")
      })
  }, [query]);

  const handleQueryChange = searchText => {
    setQuery(searchText);
  }


  return (
    <div className="container text-center">
      <div className='search-header p-5'>
        <h1 className='display-5 mb-3'>Search for books</h1>
        <SearchForm changeQuery={handleQueryChange} />
        <br></br>
        <div>
          <h6 className='text-white'>Category</h6>
          <DropdownCategory />
          <br></br>
          <h6 className='text-white'>Filter</h6>
          <DropdownFilter />
        </div>
      </div>
      <div>
        <br></br>
        <h4>Found <strong>{books.length}</strong> results</h4>
        <hr></hr>
      </div>
      <div>
        {
          (loading)
          ? <p>Loading...</p>
          :
         <BookContainer data={books} />
          }
      </div>

    </div>
  );
}

export default App;
