import { Col, Container, Row } from "react-bootstrap";

// COMPONENTS
import Sidebar from "./components/Sidebar/Sidebar";
import RouterConfig from "./components/Common/RouterConfig";

// STYLES
import "./App.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0" md={2}>
          <Sidebar />
        </Col>
        <Col className="position-relative p-0 containerWidth" md={10}>
          <RouterConfig />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
