import "./footer.css";
import PageLinks from "./PageLinks";
import SocialMediaIcons from "./SocialMediaIcons";
export default function Footer() {
  return (
    <footer className="section footer">
      <PageLinks parentClassName="footer-links" childClassName="footer-link" />
      <SocialMediaIcons
        parentClassName="footer-icons"
        childClassName="footer-icon"
      />
      <p className="copyright">
        copyright &copy; Backroads travel tours company <span id="date"></span>{" "}
        all rights reserved
      </p>
    </footer>
  );
}
