import "../assets/css/Navbar.css";
import logoImage from "../assets/logo.png";
import "../assets/css/Navbar.css";
const Navbar = () => {
  return (
    <nav className="dark:bg-gray-900 pl-12">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 pl-0 pt-8 pl-12">
        <a href="/#" className="flex items-center">
          <img src={logoImage} className="mr-3" alt="Flowbite Logo" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
