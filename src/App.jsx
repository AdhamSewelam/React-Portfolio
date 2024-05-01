import { Col, Container, Row } from "react-bootstrap";

// COMPONENTS
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Counter from "./components/Counter/Counter";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";

// STYLES
import "./App.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0" md={2}>
          <Sidebar />
        </Col>
        <Col className="position-relative p-0" md={10}>
          <Home />
          <About />
          <Counter />
          <Skills />
          <Experience />
          <Work />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
