import React, { useState } from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const handleBookClick = () => {
    setSelected(!selected);
  };

  return (
    <Card
      style={{ border: selected ? "2px solid red" : "none" }}
      onClick={handleBookClick}
    >
      <Card.Img variant="top" src={book.cover} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
