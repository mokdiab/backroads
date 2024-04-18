import { tour1, tour2, tour3, tour4 } from "../assets";
const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "tours",
    title: "Tours",
  },
];

const socialMediaLinks = [
  {
    id: "insta",
    icon: "fab fa-instagram",
    link: "https://www.instagram.com",
  },
  {
    id: "fb",
    icon: "fab fa-facebook",
    link: "https://www.facebook.com",
  },
  {
    id: "twitter",
    icon: "fab fa-twitter",
    link: "https://www.twitter.com",
  },
];
const toursData = [
  {
    id: "tour1",
    name: "Tibet Adventure",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: tour1,
    date: "august 26th, 2020",
    country: "china",
    duration: 6,
    price: 2100,
  },
  {
    id: "tour2",
    name: "Best Of Java",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: tour2,
    date: "august 26th, 2020",
    country: "indonesia",
    duration: 11,
    price: 1400,
  },
  {
    id: "tour3",
    name: "Explore Hong Kong",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: tour3,
    date: "august 26th, 2020",
    country: "hong kong",
    duration: 8,
    price: 5000,
  },
  {
    id: "tour4",
    name: "Kenya Highlights",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: tour4,
    date: "august 26th, 2020",
    country: "kenya",
    duration: 20,
    price: 3300,
  },
];
const services = [
  {
    id: "service1",
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: "service2",
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: "service3",
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];
export { navLinks, socialMediaLinks, toursData, services };
