import SmallScreenNavbar from "./SmallScreenNavbar";
import BigScreenNavbar from "./BigScreenNavbar";

const Navbar = () => {
  return (
    <section className="relative">
      <SmallScreenNavbar />
      <BigScreenNavbar />
    </section>
  );
};

export default Navbar;
