import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactsPage from "../pages/ContactsPage";
import DeliveryPage from "../pages/DeliveryPage";
import HomePage from "../pages/HomePage";
import PartnersPage from "../pages/PartnersPage";

const navbar = [
  {
    id: 1,
    name: "Каталог",
    page: <HomePage />,
    path: "/home",
  },
  {
    id: 2,
    name: "Партнерам",
    page: <PartnersPage />,
    path: "/partners",
  },
  {
    id: 3,
    name: "Доставка и оплата",
    page: <DeliveryPage />,
    path: "/delivery",
  },
  {
    id: 4,
    name: "О компании",
    page: <AboutPage />,
    path: "/about",
  },
  {
    id: 5,
    name: "Блог",
    page: <BlogPage />,
    path: "/blog",
  },
  {
    id: 6,
    name: "Контакты",
    page: <ContactsPage />,
    path: "/contacts",
  },
];

export default navbar;
