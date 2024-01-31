import React, { useState } from "react";
import SingleBook from "./SingleBook";
import { FormControl, InputGroup, Row, Col } from "react-bootstrap";

const BookList = ({ books }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredBooks = search
    ? books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      )
    : books;

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search books..."
          value={search}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <Row>
        {filteredBooks.map((book) => (
          <Col key={book.asin} xs={12} md={6} lg={4} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BookList;
