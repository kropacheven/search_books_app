import React from 'react';
import BookComponent from './BookComponent';

const BookContainer = (props) => {
    const results = props.data;
    let books;
    console.log(results);
    // if (results.length > 0) {
    books = results.map(book => <BookComponent title={book.volumeInfo.title} category={book.volumeInfo.categories} author={book.volumeInfo.authors} thumbnail={book.volumeInfo.imageLinks.thumbnail} />);
    // } else {
        //photos = <NotFound />;
    // }
    return (
        <div className="book-container">
            <h2>Results</h2>
            <ol>
                {books}
            </ol>
        </div>
    );
}

export default BookContainer;