import { Col, Row } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <div id="about" className="container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100">
      <p className="aboutTitle">ABOUT US</p>

      <h2 className="aboutHeading">WHO AM I?</h2>

      <p className="aboutText">
        <strong>Hi Im Jackson Ford</strong> On her way she met a copy. The copy
        warned the Little Blind Text, that where it came from it would have been
        rewritten a thousand times and everything that was left from its origin
        would be the word (and) and the Little Blind Text should turn around and
        return to its own, safe country.
      </p>

      <p className="aboutText">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </p>

      <Row>
        <Col md={3}>
          <div className="services color-1">
            <span className="icon2">
              <i className="fa-regular fa-lightbulb"></i>
            </span>
            <h3>Graphic Design</h3>
          </div>
        </Col>
        <Col md={3}>
          <div className="services color-2">
            <span className="icon2">
              <i className="fa-solid fa-earth-africa"></i>
            </span>
            <h3>Web Design</h3>
          </div>
        </Col>
        <Col md={3}>
          <div className="services color-3">
            <span className="icon2">
              <i className="fa-solid fa-database"></i>
            </span>
            <h3>Software</h3>
          </div>
        </Col>
        <Col md={3}>
          <div className="services color-4">
            <span className="icon2">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </span>
            <h3>Application</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;
