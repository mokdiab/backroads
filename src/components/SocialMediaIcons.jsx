import { socialMediaLinks } from "../constants";
export default function SocialMediaIcons({ parentClassName, childClassName }) {
  return (
    <ul className={parentClassName}>
      {socialMediaLinks.map((link) => {
        const { id, icon, link: url } = link;
        return (
          <li key={id}>
            <a
              href={url}
              target="_blank"
              className={childClassName}
              rel="noreferrer"
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
