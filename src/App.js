import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyCarousel from "./components/HomeCarousel"; // Assicurati di aver importato correttamente il componente MyCarousel
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <MyCarousel /> {/* Aggiunto il componente MyCarousel */}
        <AllTheBooks />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
