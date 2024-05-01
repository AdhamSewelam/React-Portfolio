import { Col, ProgressBar, Row } from "react-bootstrap";
import "./Skills.css";

function Skills() {
  return (
    <div id="skills" className="container py-5">
      <p className="skillsTitle">MY SPECIALTY</p>

      <h2 className="skillsHeading">MY SKILLS</h2>

      <p className="skillsText">
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>

      <Row>
        <Col md={6}>
          <h3 className="mb-2 progressTitle">Photoshop</h3>
          <ProgressBar className="proColor1" now={75} />
          <h3 className="mb-2 progressTitle">HTML5</h3>
          <ProgressBar className="proColor2" variant="warning" now={85} />
          <h3 className="mb-2 progressTitle">WordPress</h3>
          <ProgressBar className="proColor3" variant="success" now={70} />
        </Col>
        <Col md={6}>
          <h3 className="mb-2 progressTitle">jQuery</h3>
          <ProgressBar className="proColor4" variant="danger" now={60} />
          <h3 className="mb-2 progressTitle">CSS3</h3>
          <ProgressBar className="proColor5" variant="black" now={90} />
          <h3 className="mb-2 progressTitle">SEO</h3>
          <ProgressBar className="proColor6" variant="info" now={80} />
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
