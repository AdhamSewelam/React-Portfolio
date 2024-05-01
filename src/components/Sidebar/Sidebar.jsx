// STYLES
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { ABOUT, EXPERIENCE, ROOT, SKILLS, WORK } from "../Common/Constants";

function Sidebar() {
  const location = useLocation();

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
                <Link to={ROOT}>Jackson Ford</Link>
              </h1>

              <p className={`${styles.sidebarUserinfo}`}>
                <Link to={ROOT}>UI/UX/Designer</Link> in Philippines
              </p>

              <ul className={`${styles.sidebarList}`}>
                <li
                  className={
                    location.pathname === ROOT ? `${styles.active}` : ""
                  }
                >
                  <Link to={ROOT} data-nav-section="home">
                    Home
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === ABOUT ? `${styles.active}` : ""
                  }
                >
                  <Link to={ABOUT} data-nav-section="about">
                    About
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === SKILLS ? `${styles.active}` : ""
                  }
                >
                  <Link to={SKILLS} data-nav-section="skills">
                    Skills
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === EXPERIENCE ? `${styles.active}` : ""
                  }
                >
                  <Link to={EXPERIENCE} data-nav-section="experience">
                    Experience
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === WORK ? `${styles.active}` : ""
                  }
                >
                  <Link to={WORK} data-nav-section="work">
                    Work
                  </Link>
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
          <li className={location.pathname === ROOT ? `${styles.active}` : ""}>
            <Link to={ROOT} data-nav-section="home">
              Home
            </Link>
          </li>
          <li className={location.pathname === ABOUT ? `${styles.active}` : ""}>
            <Link to={ABOUT} data-nav-section="about">
              About
            </Link>
          </li>
          <li
            className={location.pathname === SKILLS ? `${styles.active}` : ""}
          >
            <Link to={SKILLS} data-nav-section="skills">
              Skills
            </Link>
          </li>
          <li
            className={
              location.pathname === EXPERIENCE ? `${styles.active}` : ""
            }
          >
            <Link to={EXPERIENCE} data-nav-section="experience">
              Experience
            </Link>
          </li>
          <li className={location.pathname === WORK ? `${styles.active}` : ""}>
            <Link to={WORK} data-nav-section="work">
              Work
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
