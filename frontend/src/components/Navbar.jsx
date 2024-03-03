import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
    <Link>  <div className="logo">
    VANSH<span>EVENT'S</span>
        {/* <img src="https://i.pinimg.com/736x/17/07/bb/1707bb5cf56122ef320c571c94abff6f.jpg"></img> */}
      </div>
      </Link>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="hero" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
        
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500}>
            SERVICES
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;