import NavbarTop from "./NavbarTop/NavbarTop";
import NavbarCenter from "./NavbarCenter/NavbarCenter";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <NavbarTop />
      <NavbarCenter />
    </nav>
  );
}

export default Navbar;
