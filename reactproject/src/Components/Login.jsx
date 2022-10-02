import { useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Heading, Text, Input, Button, Flex, Select, Image } from "@chakra-ui/react";
import { useContext } from "react";
import {Navigate} from "react-router-dom";

function Login() {
  const [val, setVal] = useState("");
  const {isAuth, handle} = useContext(AuthContext)

  const handlebtn = (e) => {
    e.preventDefault();
    console.log(val);
    handle(val);
  }

  if(isAuth){
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
            <Button onClick={(e) => handlebtn(e)} colorScheme="blue">Log In</Button>
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

      <div style={{ display: "flex", marginTop:"80px", height:"600px" }}>
        <div style={{ width: "25%", textAlign:"left", marginLeft:"100px" }}>
          <Heading mt={14} size="3xl">Easy<span style={{color:"blue"}}> ahead</span></Heading>
          <Text mt={10} fontSize="lg">We take the work out of connecting with others so you can accomplish more.</Text>
          <Select mt={20} placeholder="English">
            <option value="option1">English</option>
            <option value="option2">Francais</option>
            <option value="option3">Espanol</option>
            <option value="option3">Deutsch</option>
            <option value="option3">Portugues</option>
          </Select>
          <Flex mt={10} gap={3}>
            <Button><Image w="30px" h="30px" mr={2.5} src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" />Apple Store</Button>
            <Button><Image w="30px" h="30px" mr={2.5} src="https://i1.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/07/current-google-play-icon.jpg?ssl=1" />Play Store</Button>
          </Flex>
          <Flex mt={20} gap={10}>
            <a href="https://twitter.com/calendly"><Image w="25px" h="25px" src="https://cdn-icons-png.flaticon.com/512/733/733635.png" /></a>
            <a href="https://www.facebook.com/Calendly"><Image w="25px" h="25px" src="https://cdn-icons-png.flaticon.com/512/59/59439.png"/></a>
            <a href="https://www.instagram.com/calendly/"><Image w="25px" h="25px" src="https://cdn-icons-png.flaticon.com/512/87/87390.png"/></a>
            <a href="https://www.linkedin.com/company/calendly/life/lifeatcalendly/"><Image w="25px" h="25px" src="https://cdn-icons-png.flaticon.com/512/61/61109.png"/></a>
            <a href="https://www.youtube.com/c/Calendly"><Image w="25px" h="25px" src="https://cdn-icons-png.flaticon.com/512/152/152810.png"/></a>
          </Flex>
        </div>
        <div style={{ width: "70%", margin:"auto", display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"50px", marginLeft:"100px" }}>
          <ul style={{listStyle:"none", flex:"1 1 25%", flexDirection: "column", textAlign:"left"}}>
            <li >
              <div>
                <h3><b>About</b></h3>
              </div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div>
                <h3>About Calendly</h3>
              </div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div>
                <h3>Contact Sales</h3>
              </div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div>
                <h3>Newsroom</h3>
              </div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div>
                <h3>Careers</h3>
              </div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div>
                <h3>Security</h3>
              </div>
            </li>
          </ul>
          <ul style={{listStyle:"none", flex:"1 1 25%", flexDirection: "column", textAlign:"left"}}>
            <li>
              <div>
                <h3><b>Solutions</b></h3>
              </div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div>
                <h3>Customer Success</h3>
              </div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div>
                <h3>Sales</h3>
              </div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div>
                <h3>Recruiting</h3>
              </div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div>
                <h3>Information Technology</h3>
              </div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div>
                <h3>Marketing</h3>
              </div>
            </li>
          </ul>
          <ul style={{listStyle:"none", flex:"1 1 25%", flexDirection: "column", textAlign:"left"}}>
            <li>
              <div><h3><b>Popular Features</b></h3></div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div><h3>Embed Calendly</h3></div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div><h3>Availabilty</h3></div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div><h3>Send Notifications</h3></div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div><h3>Using Calendly Mobile</h3></div>
            </li>
          </ul>
          <ul style={{listStyle:"none", flex:"1 1 25%", flexDirection: "column", textAlign:"left"}}>
            <li>
              <div><h3><b>Support</b></h3></div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div><h3>Help Center</h3></div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div><h3>Video Tutorials</h3></div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div><h3>Cookie Settings</h3></div>
            </li>
          </ul>
          <ul style={{listStyle:"none", flex:"1 1 25%", flexDirection: "column", textAlign:"left"}}>
            <li>
              <div><h3><b>Add-Ons</b></h3></div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div><h3>Download for Chrome</h3></div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div><h3>Download for Firefox</h3></div>
            </li>
          </ul>
          <ul style={{listStyle:"none", flex:"1 1 25%", flexDirection: "column", textAlign:"left"}}>
            <li>
              <div><h3><b>Developers</b></h3></div>
            </li>
            <li style={{marginTop:"20px"}}>
              <div><h3>Developer Tools</h3></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
