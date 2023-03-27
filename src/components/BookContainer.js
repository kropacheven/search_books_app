import React from 'react';
import BookComponent from './BookComponent';

import Container from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';


const BookContainer = (props) => {
    const results = props.data;
    let books;
    //console.log(results);
    // if (results.length > 0) {
    books = results.map(book => <BookComponent title={book.volumeInfo.title} category={book.volumeInfo.categories} author={book.volumeInfo.authors} thumbnail={book.volumeInfo.imageLinks.thumbnail} description={book.volumeInfo.description} key={book.id} />);
    // } else {
    //photos = <NotFound />;
    // }
    return (
        <Container>
            <Row xs={1} md="auto">
                {books}
            </Row>
        </Container>

    );
}


export default BookContainer;