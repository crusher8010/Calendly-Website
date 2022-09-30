import { Link } from "react-router-dom";
import {useState} from "react";
import { Button} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContextProvider";
import { useContext} from "react";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";
import "./Navbar.css"

function Navbar() {
  const { tok } = useContext(AuthContext);
  const [mob, setMob] = useState(false);

  return (
    <nav className="struct">
      <div>
        <Link className="sym" to="/">
          <img
            src="https://assets.calendly.com/packs/authentication/media/logo-f885ef95906ef15bb6fb.png"
            alt="Calendly Icons"
          />
        </Link>
      </div>
      <div className={mob ? "mobile-nav-links1":"nav-links1"} onClick={() => setMob(false)}>
        <Link to="/individuals" className="Individuals">
          <b>Individuals</b>
        </Link>
        <Link to="/teams" className="Teams">
          <b>Teams</b>
        </Link>
        <Link className="Enterprise">
          <b>Enterprise</b>
        </Link>
        <Link className="Products">
          <Dropdown1 />
        </Link>
        <Link className="Pricing">
          <b>Pricing</b>
        </Link>
        <Link className="Resources">
          <Dropdown2 />
        </Link>
      </div>
      <div className={mob ? "mobile-nav-links2":"nav-links2"} onClick={() => setMob(false)}>
        <Link className="login" to="/login">
          <b>Log In</b>
        </Link>
        <Link to="/signup" className="Getstarted">
          <Button colorScheme="blue">
            <b>Get Started</b>
          </Button>
        </Link>
      </div>
      <button className="mobile-menu-icon" onClick={() => setMob(!mob)}>
          {mob ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
}

export default Navbar;
