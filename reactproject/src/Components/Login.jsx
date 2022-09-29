import { useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Heading, Text, Input, Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import {Navigate} from "react-router-dom";

function Login() {
  const [val, setVal] = useState("");
  const {handle} = useContext(AuthContext)

  const handlebtn = (e) => {
    e.preventDefault();
    handle(val);
    return <Navigate to="/" />
  }

  return (
    <div>
      <div style={{ marginLeft: "7rem", marginTop: "3rem" }}>
        <img
          style={{ width: "200px", height: "50px" }}
          src="https://assets.calendly.com/packs/authentication/media/logo-f885ef95906ef15bb6fb.png"
          alt="Calendly Icon"
        />
      </div>
      <div style={{ display: "flex", justifyContent:"space-evenly", marginTop:"4rem"  }}>
        <div  style={{width:"40%"}}>
          
          <Heading size="3xl" style={{ textAlign: "left" }}>
            Welcome Back to <span style={{ color: "blue" }}>Calendly</span>
          </Heading>
          <Text fontSize="2xl" mt={10} style={{ textAlign: "left" }}>
            Log in to your account to get back to your hub for scheduling
            meetings.
          </Text>
          <Flex gap={2} mt={10}>
            <Input
              w={80}
              type="text"
              placeholder="Please enter your Username"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <Button onClick={handlebtn} colorScheme="blue">Log In</Button>
          </Flex>
          <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
            Don't have an account?{" "}
            <span style={{ color: "blue" }}>Sign Up</span>
          </Text>
        </div>
        <div style={{width:"30%", marginTop:"2rem"}}>
          <h1 style={{ color: "blue", fontSize: "20px",textAlign: "left" }}>
            {" "}
            <b>WHAT'S NEW?</b>{" "}
          </h1>
          <Flex gap={5} mt={5}>
            <img
              style={{ width: "60px", height: "60px" }}
              src="https://cdn-icons-png.flaticon.com/512/732/732205.png"
              alt=""
            />
            <Heading mt={3}>Calendly for Chrome</Heading>
          </Flex>
          <Text mt={5} fontSize="xl" style={{ textAlign: "left" }}>
            Use Calendly while you're on the web, without switching tabs. Select
            and Share hand-picked times or single-use links wherever you're
            interacting with invitees.
          </Text>
          <Text mt={5} fontSize="2xl" style={{ color: "blue",textAlign: "left" }}>
            Get Chrome Extension
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Login;
