import { useState } from "react";
import { Col, Row, Tab, Tabs, Button } from "react-bootstrap";
import "./Work.css";

import work1 from "../../assets/img-1.jpg";
import work2 from "../../assets/img-2.jpg";
import work3 from "../../assets/img-3.jpg";
import work4 from "../../assets/img-4.jpg";
import work5 from "../../assets/img-5.jpg";
import work6 from "../../assets/img-6.jpg";

function Work() {
  const [key, setKey] = useState("graphic");
  const [showMore, setShowMore] = useState(false);
  const [displayedWorks, setDisplayedWorks] = useState([
    work1,
    work2,
    work3,
    work4,
  ]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if (!showMore) {
      const additionalWorks = [work5, work6];
      setDisplayedWorks(displayedWorks.concat(additionalWorks));
    }
  };

  return (
    <div id="work" className="container py-5">
      <p className="workTitle">MY WORK</p>

      <h2 className="workHeading">RECENT WORK</h2>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="graphic" title="Graphic Design">
          <Row>
            {displayedWorks.map((work, index) => (
              <Col md={6} key={index}>
                <div
                  className="project"
                  style={{ backgroundImage: `url(${work})` }}
                >
                  <div class="desc pt-4">
                    <div class="con">
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p class="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="apps" title="Apps">
          <Row>
            {displayedWorks.map((work, index) => (
              <Col md={6} key={index}>
                <div
                  className="project"
                  style={{ backgroundImage: `url(${work})` }}
                >
                  <div class="desc pt-4">
                    <div class="con">
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p class="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
      {!showMore && (
        <Button
          onClick={toggleShowMore}
          variant="primary"
          className="showMoreButton"
        >
          Show More
        </Button>
      )}
    </div>
  );
}

export default Work;
