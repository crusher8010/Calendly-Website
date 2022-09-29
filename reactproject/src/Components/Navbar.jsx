import { Link } from "react-router-dom";
import { Button} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContextProvider";
import { useContext} from "react";

function Navbar() {
  const { tok } = useContext(AuthContext);
  console.log(tok);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        height: "90px",
        alignItems: "center",
        position: "sticky",
      }}
    >
      <div>
        <Link to="/">
          <img
            style={{ width: "200px", height: "50px" }}
            src="https://assets.calendly.com/packs/authentication/media/logo-f885ef95906ef15bb6fb.png"
            alt="Calendly Icons"
          />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
          height: "90px",
          alignItems: "center",
        }}
      >
        <Link to="/individuals">
          <b>Individuals</b>
        </Link>
        <Link to="/teams">
          <b>Teams</b>
        </Link>
        <Link>
          <b>Enterprise</b>
        </Link>
        <Link>
          <b>Product</b>
        </Link>
        <Link>
          <b>Pricing</b>
        </Link>
        <Link>
          <b>Resources</b>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "20%",
          height: "90px",
          alignItems: "center",
        }}
      >
        <Link to="/login">
          <b>Log In</b>
        </Link>
        <Link to="/signup">
          <Button colorScheme="blue">
            <b>Get Started</b>
          </Button>
        </Link>
        <h1>Welcome: {tok}</h1>
      </div>
    </div>
  );
}

export default Navbar;
