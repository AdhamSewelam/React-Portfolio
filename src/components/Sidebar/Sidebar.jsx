// STYLES
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={`${styles.sidebar} px-4 py-5`}>
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
          <a href="#" data-nav-section="about">
            About
          </a>
        </li>
        <li>
          <a href="#" data-nav-section="skills">
            Skills
          </a>
        </li>
        <li>
          <a href="#" data-nav-section="experience">
            Experience
          </a>
        </li>
        <li>
          <a href="#" data-nav-section="work">
            Work
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
