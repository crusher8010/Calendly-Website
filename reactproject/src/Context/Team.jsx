import {
  Heading,
  Text,
  Button,
  Flex,
  Select,
  Image,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Tabpage2 from "./Tabpage2";

function Team() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

  return (
    <div>
      <div style={{ display: "flex", gap: "40px", marginTop: "80px" }}>
        <div style={{ width: "30%", marginTop: "40px", marginLeft: "200px" }}>
          <Text style={{ color: "blue", textAlign: "left" }}>
            CALENDLY FOR TEAMS
          </Text>
          <Heading mt={10} size="2xl" style={{ textAlign: "left" }}>
            Smarter scheduling for teams
          </Heading>
          <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
            Whether your team's performance is measured by sales revenue,
            recruiting pipeline, or customer retention, scheduling automation
            enables your team to hit goals faster.
          </Text>
          <Flex mt={10} gap={4}>
            <Link to="/signup">
              <Button colorScheme="blue">Start for free</Button>
            </Link>
            <Button style={{ border: "1px solid blue", color: "blue" }}>
              Contact Sales
            </Button>
          </Flex>
        </div>
        <div >
          <img
            style={{ width: "650px", height: "500px" }}
            src="https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=1375&h=1115&q=50&fm=webp"
            alt=""
          />
        </div>
      </div>

      <div data-aos="fade-left" style={{ display: "flex", gap: "40px", marginTop: "100px",  }}>
        <div style={{ width: "35%", marginTop: "40px", marginLeft: "200px" }}>
          <Text style={{ color: "blue", textAlign: "left" }}>
            SPEED OF CONNECTION
          </Text>
          <Heading mt={10} size="xl" style={{ textAlign: "left" }}>
            Outperform the competition with faster connections
          </Heading>
          <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
            You can't waste time when prospects, clients, and candidates express
            interest. Avoid missed opportunities by automatically qualifying and
            routing website visitors to specific team members. You can also pool
            scheduling availability together to offer more options to connect.
          </Text>
        </div>
        <div >
          <img
            style={{ width: "550px", height: "500px", paddingLeft: "30px" }}
            src="https://images.ctfassets.net/k0lk9kiuza3o/zLDG89VPUNmWTS6SXf3W4/31f28cdea9417112d43e2270f554c289/Calendly-Availability-In-A-Click.png?w=1180&h=1107&q=50&fm=webp"
            alt=""
          />
        </div>
      </div>


      <div data-aos="fade-up" style={{ display: "flex", gap: "70px", marginTop: "60px" }}>
        <div style={{ marginLeft: "180px" }}>
          <img style={{ width: "520px", height: "500px" }} src="https://images.ctfassets.net/k0lk9kiuza3o/6rrSFLQXzyJUdnnnrAbhpb/16ec1ec41c24edc00ad2ac3d71148a0c/Calendly-Teams-Workflows.png?w=1140&h=924&q=50&fm=webp" alt=""/>
        </div>
        <div style={{ width: "35%", marginTop: "60px" }}>
          <Text style={{ color: "blue", textAlign: "left" }}><b>TIME MANAGEMENT</b></Text>
          <Heading mt={6} style={{ textAlign: "left" }}>Automate scheduling, improve team performance</Heading>
          <Text mt={6} fontSize="xl" style={{ textAlign: "left" }}>
          Scheduling automation eliminates time-consuming admin tasks so your team can focus on higher priorities. With actionable insights into your team's scheduling activities and integrations with your team's favorite tools, you can identify potential process improvements and empower your team to work more efficiently.
          </Text>
        </div>
      </div>


      <div data-aos="flip-down" style={{ display: "flex", gap: "100px", marginTop: "80px"  }}>
        <div style={{ width: "30%", marginTop: "40px", marginLeft: "200px" }}>
          <Text style={{ color: "blue", textAlign: "left" }}>
          <b>TEAM STANDARDIZATION</b>
          </Text>
          <Heading mt={10} size="xl" style={{ textAlign: "left" }}>
          Improve the customer experience with consistent scheduling
          </Heading>
          <Text mt={8} fontSize="lg" style={{ textAlign: "left" }}>
          Managed Events let you assign and lock Event Type details — such as meeting descriptions, invitee questions, and notifications — so your team delivers a reliable and professional experience every time.
          </Text>
        </div>
        <div >
          <img
            style={{ width: "550px", height: "350px", marginTop:"30px" }}
            src="https://images.ctfassets.net/k0lk9kiuza3o/5LpXPs1wysp0sZGCKQK9oP/fa504413d146109e89647faadb2ab20d/Group_28529.png?w=1352&h=826&q=50&fm=webp"
            alt=""
          />
        </div>
      </div>


      <div data-aos="flip-right" style={{ display: "flex", gap: "70px", marginTop: "100px" }}>
        <div style={{ marginLeft: "180px" }}>
          <img style={{ width: "520px", height: "500px" }} src="https://images.ctfassets.net/k0lk9kiuza3o/wyOsTDMiF1GBZ0HYBEwCX/8f1181d4039431b7873443c8166cf543/Calendly-Automation-Streamline.png?w=1164&h=932&q=50&fm=webp" alt=""/>
        </div>
        <div style={{ width: "35%", marginTop: "60px" }}>
          <Text style={{ color: "blue", textAlign: "left" }}><b>CONSISTENCY IN EXECUTION</b></Text>
          <Heading mt={6} style={{ textAlign: "left" }}>Streamline communications across the meeting lifecycle</Heading>
          <Text mt={6} fontSize="xl" style={{ textAlign: "left" }}>
          From pre-call email questionnaires and confirmation texts to post-call follow-up links, meeting best practices can be automatically applied across your team. These templates and workflows increase engagement and ensure consistent, professional communications with your customers and candidates.
          </Text>
        </div>
      </div>
      

      <div data-aos="flip-left" style={{marginTop:"80px"}}>
        <Text><b>Features</b></Text>
        <Heading mt={8}>Favourite Team Features</Heading>
        <Tabpage2 />
      </div>


      <div data-aos="fade-down" style={{marginTop:"100px"}}>
        <Heading style={{width:"55%", margin: "auto"}} size="2xl">Smarter scheduling for teams</Heading>
        <Text style={{width:"55%", margin: "auto", marginTop:"40px"}}  fontSize="2xl">Get started on the scheduling automation platform that enables teams to hit goals faster.</Text>
        <div style={{width:"40%", margin:"auto", marginTop:"40px" }}>
            <Button colorScheme={"blue"}>Start for free</Button>
            <Button ml={5} style={{border:"1px solid blue", color:"blue"}}>Talk with sales</Button>
        </div>
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

export default Team;
