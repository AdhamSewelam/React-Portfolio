import { Button, Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";

// STYLES
import "./Home.css";

function Home() {
  const [index, setIndex] = useState(0); 

  const handleSelect = (selectedIndex, event) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newIndex = (index + 1) % 2; 
      setIndex(newIndex);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [index]);

  return (
    <div>
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="vh-100 d-flex flex-column justify-content-center heroSection slider1">
          <div className="container text-center text-md-start">
            <h1 className="text-lg-start text-center">
              Hi! <br /> Im Jackson
            </h1>
            <p className="text-lg-start text-center">
              100% html5 bootstrap templates Made <br /> By{" "}
              <a href="https://colorlib.com/">Colorlib.com</a>
            </p>
            <Button className="" variant="transparent">
              DOWNLOAD CV <i className="fa-solid fa-download"></i>
            </Button>
          </div>
        </Carousel.Item>
        <Carousel.Item className="vh-100 d-flex flex-column justify-content-center heroSection slider2">
          <div className="container text-center text-md-start">
            <h1 className="text-lg-start text-center">
              I am <br />a Designer
            </h1>
            <p className="text-lg-start text-center">
              100% html5 bootstrap templates Made <br /> By{" "}
              <a href="https://colorlib.com/">Colorlib.com</a>
            </p>
            <Button className="" variant="transparent">
              VIEW PORTFOLIO <i className="fa-solid fa-briefcase"></i>
            </Button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
