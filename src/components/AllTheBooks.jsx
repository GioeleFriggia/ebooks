import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../assets/AllTheBooks.css";

// Importa i JSON delle diverse categorie
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const categories = [
  { name: "Fantasy", books: fantasy },
  { name: "History", books: history },
  { name: "Horror", books: horror },
  { name: "Romance", books: romance },
  { name: "Sci-Fi", books: scifi },
];

const AllTheBooks = () => {
  return (
    <>
      {categories.map((category, index) => (
        <div key={category.name}>
          <h2 className="category-title">{category.name}</h2>
          <Row className="g-2">
            {category.books.map((book) => (
              <Col xs={12} md={3} key={book.asin} className="d-flex">
                <Card className="book-cover h-100 d-flex flex-column card-background book-card">
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text className="price-text">
                      Price: ${book.price}
                    </Card.Text>
                  </Card.Body>
                  <Button variant="primary" className="mt-auto">
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
          {index !== categories.length - 1 && <hr className="my-4" />}
        </div>
      ))}
    </>
  );
};

export default AllTheBooks;
