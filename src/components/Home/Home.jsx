import { Button, Carousel } from 'react-bootstrap';

// STYLES
import './Home.css';

function Home() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className="vh-100 d-flex flex-column justify-content-center px-5 heroSection slider1">
          <h1>
            Hi! <br /> Im Jackson
          </h1>
          <p>
            100% html5 bootstrap templates Made <br /> By{' '}
            <a href="https://colorlib.com/">Colorlib.com</a>
          </p>
          <Button variant="transparent">
            DOWNLOAD CV <i className="fa-solid fa-download"></i>
          </Button>
        </Carousel.Item>
        <Carousel.Item className="vh-100 d-flex flex-column justify-content-center px-5 heroSection slider2">
          <h1>
            I am <br />a Designer
          </h1>
          <p>
            100% html5 bootstrap templates Made <br /> By{' '}
            <a href="https://colorlib.com/">Colorlib.com</a>
          </p>
          <Button variant="transparent">
            VIEW PORTFOLIO <i className="fa-solid fa-briefcase"></i>
          </Button>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
