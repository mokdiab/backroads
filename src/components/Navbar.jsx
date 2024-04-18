import "./navbar.css";
import { logo } from "../assets";
import SocialMediaIcons from "./SocialMediaIcons";
import PageLinks from "./PageLinks";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks
          id="nav-links"
          parentClassName="nav-links"
          childClassName="nav-link"
        />
        <SocialMediaIcons
          parentClassName="nav-icons"
          childClassName="nav-icon"
        />
      </div>
    </nav>
  );
}
