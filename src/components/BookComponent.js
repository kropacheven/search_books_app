import React from 'react';

const BookComponent = (props) => {
    //let url = `https://live.staticflickr.com/${props.serverId}/${props.nameId}_${props.secret}_w.jpg`;
    console.log(props.author);
    return (
      <li>
        <h4><strong>{props.title}</strong></h4>
        <h6>{props.category}</h6>
        <h6>{props.author}</h6>
        <img src={props.thumbnail} />
      </li>
    );
}

export default BookComponent;