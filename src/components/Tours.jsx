import "./tours.css";
import { toursData } from "../constants";
import Tourcard from "./TourCard";
import { SectionWrapper } from "../hoc";
export default function Tours() {
  return (
    <SectionWrapper id="tours" title="featured tours">
      {toursData.map((tour) => {
        return <Tourcard key={tour.id} {...tour} />;
      })}
    </SectionWrapper>
  );
}
