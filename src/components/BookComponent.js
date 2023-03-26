import React from 'react';
import Card from 'react-bootstrap/Card';

const BookComponent = (props) => {
  //console.log(props.author);
  return (
    <Card style={{ width: '15rem' }} className="mx-auto my-3 p-2">
      <Card.Img variant="top" src={props.thumbnail} alt={props.title}/>
      <Card.Body>
        <Card.Title><strong>{props.title}</strong></Card.Title>
        <Card.Text>
         <h6>/{props.category}/</h6>
         <p>{props.author}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}



export default BookComponent;