import { Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import './Counter.css';

function Counter() {
  return (
    <div className="px-5 py-5 counterImage">
      <div className="overlay"></div>
      <div className="counterContent">
        <Row>
          <Col className="counterNumber" md={3}>
            <h1>
              <CountUp end={309} duration={5} />
            </h1>
            <p>CUPS OF COFFEE</p>
          </Col>
          <Col className="counterNumber" md={3}>
            <h1>
              <CountUp end={356} duration={5} />
            </h1>
            <p>PROJECTS</p>
          </Col>
          <Col className="counterNumber" md={3}>
            <h1>
              <CountUp end={30} duration={5} />
            </h1>
            <p>CLIENTS</p>
          </Col>
          <Col className="counterNumber" md={3}>
            <h1>
              <CountUp end={10} duration={5} />
            </h1>
            <p>PARTNERS</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Counter;
