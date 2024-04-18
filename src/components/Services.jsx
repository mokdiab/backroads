import "./services.css";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import ServicesItem from "./ServicesItem";
export default function Services() {
  return (
    <SectionWrapper id="services" title="our services" className="services">
      {services.map((item) => {
        return <ServicesItem key={item.id} {...item} />;
      })}
    </SectionWrapper>
  );
}
