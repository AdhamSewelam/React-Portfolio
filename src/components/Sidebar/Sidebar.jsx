// STYLES
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <>
      <Navbar
        key={false}
        expand={false}
        className="mb-3 position-fixed top-0 start-0 end-0 d-block d-lg-none"
        style={{ zIndex: 1000 }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-false`}
              ></Offcanvas.Title>
            </Offcanvas.Header>

            <div
              className={`${styles.sidebar} bg-white position-relative w-auto px-4 py-5 `}
            >
              <div className={`${styles.sidebarImage}`}></div>

              <h1 className={`${styles.sidebarUsername}`}>
                <a href="#">Jackson Ford</a>
              </h1>

              <p className={`${styles.sidebarUserinfo}`}>
                <a href="#">UI/UX/Designer</a> in Philippines
              </p>

              <ul className={`${styles.sidebarList}`}>
                <li className={`${styles.active}`}>
                  <a href="#" data-nav-section="home">
                    Home
                  </a>
                </li>
                <li className="">
                  <a href="#about" data-nav-section="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" data-nav-section="skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" data-nav-section="experience">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#work" data-nav-section="work">
                    Work
                  </a>
                </li>
              </ul>
            </div>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <div className={`${styles.sidebar} px-4 py-5 d-none d-lg-block`}>
        <div className={`${styles.sidebarImage}`}></div>

        <h1 className={`${styles.sidebarUsername}`}>
          <a href="#">Jackson Ford</a>
        </h1>

        <p className={`${styles.sidebarUserinfo}`}>
          <a href="#">UI/UX/Designer</a> in Philippines
        </p>

        <ul className={`${styles.sidebarList}`}>
          <li className={`${styles.active}`}>
            <a href="#" data-nav-section="home">
              Home
            </a>
          </li>
          <li className="">
            <a href="#about" data-nav-section="about">
              About
            </a>
          </li>
          <li>
            <a href="#skills" data-nav-section="skills">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" data-nav-section="experience">
              Experience
            </a>
          </li>
          <li>
            <a href="#work" data-nav-section="work">
              Work
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
