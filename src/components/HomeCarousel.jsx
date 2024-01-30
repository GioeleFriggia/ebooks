import React from "react";
import { Carousel, Card, Col, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/HomeCarousel.css";

const categories = [
  { name: "Fantasy", books: fantasy.slice(0, 3) },
  { name: "History", books: history.slice(0, 3) },
  { name: "Horror", books: horror.slice(0, 3) },
  { name: "Romance", books: romance.slice(0, 3) },
  { name: "Sci-Fi", books: scifi.slice(0, 3) },
];

const HomeCarousel = () => {
  return (
    <Carousel
      nextIcon={<FontAwesomeIcon icon={faChevronRight} />}
      prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
      className="carousel-container"
    >
      {categories.map((category) => (
        <Carousel.Item key={category.name} className="carousel-item">
          <h3 className="text-center mb-4 carousel-title">{category.name}</h3>
          <Row className="justify-content-center">
            {category.books.map((book) => (
              <Col key={book.asin} xs={12} md={6} lg={4} className="mb-4">
                <Card className="h-100 border rounded">
                  <Card.Img
                    variant="top"
                    src={book.img}
                    alt={book.title}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title className="carousel-item-title">
                      {book.title}
                    </Card.Title>
                    <Card.Text className="text-muted">{`Price: $${book.price}`}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
