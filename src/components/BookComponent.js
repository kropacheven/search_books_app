import React from 'react';
import Card from 'react-bootstrap/Card';
import Example from './BookModal';

const BookComponent = (props) => {
  //console.log(props.author);
  return (
    <Card style={{ width: '15rem' }} className="mx-auto my-3 p-2">
      <Card.Img variant="top" src={props.thumbnail} alt={props.title}/>
      <Card.Body>
        <Card.Title><strong>{props.title}</strong></Card.Title>
        <Card.Text>
         <u>{props.category}</u>
         <br></br>
         <i>{props.author}</i>
        </Card.Text>
        <Example title={props.title} src={props.thumbnail} author={props.author} category={props.category} description={props.description}/>
      </Card.Body>
    </Card>
  );
}


export default BookComponent;