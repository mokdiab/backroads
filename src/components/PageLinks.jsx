import { navLinks } from "../constants";
export default function PageLinks({ id, parentClassName, childClassName }) {
  return (
    <ul className={parentClassName} id={id}>
      {navLinks.map((link) => {
        const { id, title } = link;
        return (
          <li key={id}>
            <a href={`#${id}`} className={childClassName}>
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
