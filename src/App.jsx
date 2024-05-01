import { Col, Container, Row } from 'react-bootstrap';

// COMPONENTS
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

// STYLES
import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Sidebar></Sidebar>
        </Col>
        <Col className="position-relative p-0" md={9}>
          <Home />
          <About />
          <Counter />
          <Skills />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
