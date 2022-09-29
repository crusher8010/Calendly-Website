import { Button, Heading, Text, Flex, Select, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ReactPlayer from "react-player";
// import Calendly from "../Video/Calendly.mp4";

function Individuals() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <div style={{ display: "flex", gap: "40px", marginTop: "50px" }}>
        <div style={{ width: "30%", marginTop: "120px", marginLeft: "250px" }}>
          <Heading size="2xl" style={{ textAlign: "left" }}>
            The genius way to work <span style={{ color: "blue" }}>better</span>
          </Heading>
          <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
            Calendly makes it easy to work smarter when you're working solo.
            Meetings, sessions, and appointments become more efficient ways to
            achieve success and accomplish goals.
          </Text>
          <Link to="/signup">
            <Button mt={8} mr="320px" colorScheme="blue">
              Sign Up for free
            </Button>
          </Link>
        </div>
        <div>
          <img
            style={{ width: "650px", height: "500px" }}
            src="https://images.ctfassets.net/k0lk9kiuza3o/2kiAGfjL7zawukKEtUekPZ/e9808f922920947d64e0ffe4fbf18a45/Calendly-Individuals-Hero.png?w=1472&h=1232&q=50&fm=webp"
            alt=""
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        style={{ display: "flex", gap: "40px", marginTop: "80px" }}
      >
        <div style={{ marginLeft: "220px" }}>
          <img
            style={{ width: "650px", height: "500px" }}
            src="https://images.ctfassets.net/k0lk9kiuza3o/4igqbRz7kziAIipMxrpzSn/cd8a5278fda0b2ce622c6ad6c2f722b7/Individuals_Page.png?w=1470&h=1210&q=50&fm=webp"
            alt=""
          />
        </div>
        <div style={{ width: "30%", marginTop: "100px" }}>
          <h1 style={{ color: "blue", textAlign: "left" }}>
            {" "}
            <b>THE CALENDLY BOOKING LINK</b>{" "}
          </h1>
          <Heading mt={6} style={{ textAlign: "left" }}>
            Save time with your own personalized booking links
          </Heading>
          <Text mt={6} fontSize="xl" style={{ textAlign: "left" }}>
            Time is a precious commodity. Calendly is the courteous way to book
            meetings and other appointments, because scheduling with just a few
            clicks makes the most of everyone's time.
          </Text>
          <Link to="/signup">
            <Button mt={6} mr={320} colorScheme="blue">
              Get Your Link
            </Button>
          </Link>
        </div>
      </div>
      <div
        data-aos="flip-right"
        style={{ display: "flex", gap: "40px", marginTop: "80px" }}
      >
        <div style={{ width: "30%", marginTop: "100px", marginLeft: "220px" }}>
          <h1 style={{ textAlign: "left", color: "blue" }}>
            <b>A CURATED CALENDAR</b>
          </h1>
          <Heading mt={8} style={{ textAlign: "left" }}>
            Book up efficiently
          </Heading>
          <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
            When invitees select a meeting slot from your schedule, they only
            see the times you’re available, and only the length and type of
            meeting you want to have. Your schedule fills up efficiently, and
            everyone avoids excess email exchanges.
          </Text>
          <Link to="/signup">
            <Button mt={6} mr={340} colorScheme="blue">
              Learn More
            </Button>
          </Link>
        </div>
        <div>
          <img
            style={{ width: "650px", height: "500px" }}
            src="https://images.ctfassets.net/k0lk9kiuza3o/5vhSCmOfTG8ByGSTZiggcw/7c024b62e0421989e268bee66315ae2c/Calendly-Stay-in-Context.png?w=1140&h=940&q=50&fm=webp"
            alt=""
          />
        </div>
      </div>
      <div
        data-aos="flip-up"
        style={{ display: "flex", gap: "50px", marginTop: "80px" }}
      >
        <div style={{ marginLeft: "200px" }}>
          <img
            style={{ width: "650px", height: "500px" }}
            src="https://images.ctfassets.net/k0lk9kiuza3o/4VfIvpAjtQ0KxDLJzcNoGB/3fddd7c61713dcd58723cfe3fc2ba6c2/Calendly-Improve-Attendance.png?w=1140&h=930&q=50&fm=webp"
            alt=""
          />
        </div>
        <div style={{ width: "30%", marginTop: "100px" }}>
          <h1 style={{ textAlign: "left", color: "blue" }}>
            <b>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</b>
          </h1>
          <Heading mt={8} style={{ textAlign: "left" }}>
            Book up efficientlyWork like you have a personal assistant
          </Heading>
          <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
            Because Calendly automates administrative tasks like sending
            reminder emails and follow-ups, you can focus on the work that
            builds your business and brings customers back for more.
          </Text>
          <Link to="/signup">
            <Button mt={6} mr={340} colorScheme="blue">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-left"
        style={{ display: "flex", gap: "50px", marginTop: "80px" }}
      >
        <div style={{ width: "30%", marginTop: "100px", marginLeft: "200px" }}>
          <h1 style={{ textAlign: "left", color: "blue" }}>
            <b>SCHEDULING AT SCALE</b>
          </h1>
          <Heading mt={8} style={{ textAlign: "left" }}>
            Retain more clients
          </Heading>
          <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
            Happy clients are long-term clients. With Calendly, prospects can
            schedule with you instantly so no one slips through the cracks, and
            everything about your interaction is personal, professional, and
            respectful of their time.
          </Text>
        </div>
        <div>
          <img
            style={{ width: "650px", height: "500px" }}
            src="https://images.ctfassets.net/k0lk9kiuza3o/7dAOGwsgnRjDgfFvLzJTgj/851a9a4c76d6416db169143b46b9d656/Calendly-clients__1_.png?w=1140&h=930&q=50&fm=webp"
            alt=""
          />
        </div>
      </div>
      <div data-aos="fade-right" style={{ marginTop: "80px" }}>
        <Heading size="2xl">Do more with our integrations</Heading>
        <Text style={{ marginTop: "40px" }} fontSize="xl">
          Smart scheduling will change the way you - and your tools - work
        </Text>
        <Flex ml={650} style={{ marginTop: "40px", gap: "20px" }}>
          <Button colorScheme="blue">View All</Button>
          <Button>Start for free</Button>
        </Flex>
      </div>
      <div data-aos="flip-up" style={{ marginTop: "80px" }}>
        <h1 style={{ color: "blue" }}>
          {" "}
          <b>HOW IT WORKS</b>{" "}
        </h1>
        <Heading mt={8} size="2xl">
          See Calendly in action
        </Heading>
        <Text mt={8} fontSize="xl">
          With scheduling hassles and interruptions gone, your day is cleared
          for accomplishment.
        </Text>
        <ReactPlayer
          width="720px"
          height="500px"
          controls
          style={{ marginLeft: "410px", marginTop: "40px" }}
          url="https://www.youtube.com/watch?v=Sd8qzy0UUXc&t=1s"
        />
      </div>
      <div style={{ height: "200px", marginTop: "80px" }}>
        <Heading size="2xl">
          Find just-right plans for individuals and small teams
        </Heading>
        <Button colorScheme="blue" mt={8}>
          See Our Plans
        </Button>
      </div>
      <div data-aos="flip-left">
        <h1 style={{ color: "blue" }}>
          <b>SOLUTIONS</b>
        </h1>
        <Heading mt={5}>The right Calendly for the work you do</Heading>
        <div
          style={{
            width: "84%",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              textAlign: "left",
              width: "280px",
              height: "300px",
              borderRadius: "10px",
            }}
          >
            <img
              width="280px"
              height="300px"
              src="https://images.ctfassets.net/k0lk9kiuza3o/5ledlZLIfg5Ufl5aV7mP43/f4e9ff1c8e56ac1c9ce6416114c4b522/Calendly-Reps.png?w=1480&h=832&q=50&fm=webp"
              alt=""
            />
            <h1 style={{ marginTop: "16px", fontSize: "1.3rem" }}>
              <b>Sales</b>
            </h1>
            <Text fontSize="xl" mt={2}>
              Get to your beast leads faster
            </Text>
            <Link to="/Signup">
              <h1 style={{ color: "blue", marginTop: "44px" }}>
                <b>Learn More</b>
              </h1>
            </Link>
          </div>
          <div
            style={{
              textAlign: "left",
              width: "280px",
              height: "300px",
              borderRadius: "10px",
            }}
          >
            <img
              width="280px"
              height="300px"
              src="https://images.ctfassets.net/k0lk9kiuza3o/2CHdvyXqFe8FfVLRvlEtwP/431464dd95b0b51a773a3082b5a3b432/Recruiting.jpg?w=1920&h=1081&q=50&fm=webp"
              alt=""
            />
            <h1 style={{ marginTop: "16px", fontSize: "1.3rem" }}>
              <b>Recruiting</b>
            </h1>
            <Text fontSize="xl" mt={2}>
              Less emailing, more interviews
            </Text>
            <Link to="/Signup">
              <h1 style={{ color: "blue", marginTop: "44px" }}>
                <b>Learn More</b>
              </h1>
            </Link>
          </div>
          <div
            style={{
              textAlign: "left",
              width: "280px",
              height: "300px",
              borderRadius: "10px",
            }}
          >
            <img
              width="280px"
              height="300px"
              src="https://images.ctfassets.net/k0lk9kiuza3o/4L2IHsOUMgTUjPxcUbzoyz/2111a84d62f23ade75054f48bdeda0b2/Customer_Success.jpg?w=1920&h=1081&q=50&fm=webp"
              alt=""
            />
            <h1 style={{ marginTop: "16px", fontSize: "1.3rem" }}>
              <b>Customer Success</b>
            </h1>
            <Text fontSize="xl" mt={2}>
              Connect with customers when it matters
            </Text>
            <Link to="/Signup">
              <h1 style={{ color: "blue", marginTop: "16px" }}>
                <b>Learn More</b>
              </h1>
            </Link>
          </div>
          <div
            style={{
              textAlign: "left",
              width: "280px",
              height: "300px",
              borderRadius: "10px",
            }}
          >
            <img
              width="280px"
              height="300px"
              src="https://images.ctfassets.net/k0lk9kiuza3o/Zrdp4mX39AA8cXWx4J41s/1fba6102b32f86275c89e15c84ceab55/Education.jpg?w=1920&h=1081&q=50&fm=webp"
              alt=""
            />
            <h1 style={{ marginTop: "16px", fontSize: "1.3rem" }}>
              <b>Education</b>
            </h1>
            <Text fontSize="xl" mt={2}>
              Boost Student Success
            </Text>
            <Link to="/Signup">
              <h1 style={{ color: "blue", marginTop: "44px" }}>
                <b>Learn More</b>
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="flip-up"
        style={{ width: "50%", margin: "auto", marginTop: "100px" }}
      >
        <Heading>Try Calendly free</Heading>
        <Text mt={6} fontSize="2xl">
          After your 14-day trial of our Teams plan, enjoy the Free version of
          Calendly - forever.
        </Text>
        <Link>
          <Button mt={6} colorScheme="blue">
            Start for free
          </Button>
        </Link>
        <Text mt={6} fontSize="2xl">
          To inquire about our Enterprise plans, click
          <span style={{ color: "blue" }}>here</span>
        </Text>
      </div>
      <div data-aos="flip-down" style={{ display: "flex", marginTop:"80px", height:"600px" }}>
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

export default Individuals;
