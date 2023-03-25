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
                {/* <PhotoComponent src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"/>
                <PhotoComponent src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg"/>
                <PhotoComponent src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg"/>
                <PhotoComponent src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"/>
                <NotFound /> */}
            </ol>
        </div>
    );
}

export default BookContainer;