import React from "react";
import { Container } from "react-bootstrap"; // Assicurati di importare Container
import BookList from "./components/BookList";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import allBooks from "../src/data/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* Utilizza allBooks correttamente */}
        <BookList books={allBooks} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
