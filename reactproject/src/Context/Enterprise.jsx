import Marquee from "react-fast-marquee";
import { Button, Heading, Text, Select, Image, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css"

function Enterprise() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });

  return (
    <div>
      <div style={{marginTop: "60px",height: "320px",backgroundColor: "white"}}>
        <div>
          <Heading size={"4xl"}><span className="c1">Way more</span> than a scheduling link</Heading>
        </div>
        <div style={{ width: "60%", margin: "auto" }}>
          <Text mt={5} fontSize="2xl">Standardize on the #1 scheduling platform and deliver the power of Calendly across your entire organization</Text>
        </div>
        <Button p={6} fontSize="lg" colorScheme={"blue"} mt={5}>Talk with Sales</Button>
      </div>


      <div style={{ marginTop: "4.5rem",backgroundColor: "white", height:"350px"}}>
        <div style={{ width: "55%", margin: "auto" }}>
          <Heading size="xl">
            Trusted by more than <span className="c1">50,000</span> of the
            world's leading organizations
          </Heading>
        </div>
        <div style={{width: "70%", margin:"auto",  height:"100px", marginTop:"22px"}}>
        <Marquee play speed={80} style={{backgroundColor: "white"}}>
            <div className="image-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888848.png"
                alt=""
              />
            </div>
            <div className="image-wrapper">
              <img
                src="https://seekvectorlogo.com/wp-content/uploads/2018/12/zenefits-vector-logo.png"
                alt=""
              />
            </div>
            <div className="image-wrapper">
              <img
                src="https://designbro.com/blog/wp-content/uploads/compass-real-estate-logo.jpg"
                alt=""
              />
            </div>
            <div className="image-wrapper">
              <img
                src="https://vectorlogoseek.com/wp-content/uploads/2018/12/twilio-vector-logo.png"
                alt=""
              />
            </div>
            <div className="image-wrapper">
              <img
                src="https://static.wixstatic.com/media/dfa37c_c445723cb0a545cea3c37d93020635f6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
                alt=""
              />
            </div>
            <div className="image-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888848.png"
                alt=""
              />
            </div>
            <div className="image-wrapper">
              <img
                src="https://seekvectorlogo.com/wp-content/uploads/2018/12/zenefits-vector-logo.png"
                alt=""
              />
            </div>
            <div className="image-wrapper">
              <img
                src="https://designbro.com/blog/wp-content/uploads/compass-real-estate-logo.jpg"
                alt=""
              />
            </div>
            <div className="image-wrapper">
              <img
                src="https://vectorlogoseek.com/wp-content/uploads/2018/12/twilio-vector-logo.png"
                alt=""
              />
            </div>
        </Marquee>
        </div>
      </div>


      <div style={{marginTop:"100px"}}>
        <Text fontSize={"xl"}><b className="c1">Solutions</b></Text>
        <Heading mt={6} size={"2xl"}>The right Calendly for the work you do</Heading>
      </div>


      <div data-aos="flip-right" style={{textAlign:"left", width:"72%", margin:"auto", marginTop:"80px", display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"40px",}}>
        <div className="experts" style={{backgroundColor:"white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"15px", transition:"1s"}}>
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/2k4JUWdoiELNlIOiAgY8ZP/989d5854e82505f2c711363ed9d002e4/Icon-Sales.svg" alt="" />
            <Text mt={4} fontSize={"2xl"}><b>Sales</b></Text>
            <Text mt={4} fontSize={"lg"}>Spend more time selling, and less time on admin. Shorten your scales cycle by letting prospects schedule while they are in peak bullying mode</Text>
            <Text mt={4} fontSize={"2xl"}><b className="c1">Learn More</b></Text>
        </div>
        <div className="experts" style={{backgroundColor:"white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"15px", transition:"1s"}}>
        <img style={{width:"30px", height:"25px"}} src="https://images.ctfassets.net/k0lk9kiuza3o/2WoX1M1Mu6lUwJrfSGjX5b/a42359992f267f338df0161ba40acc7f/Icon-Demand-Generation.svg" alt="" />
            <Text mt={4} fontSize={"2xl"}><b>Marketing</b></Text>
            <Text mt={4} fontSize={"lg"}>Convert interested prospects into scheduled meetings and demos faster. Skip steps that cause customer friction.</Text>
            <Text mt={4} fontSize={"2xl"}><b className="c1">Learn More</b></Text>
        </div>
        <div className="experts" style={{backgroundColor:"white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"15px", transition:"1s"}}>
        <img src="https://images.ctfassets.net/k0lk9kiuza3o/6KO0vF2ofioxGmQJGQBdT1/329be086ba555bf2393dd99c32753521/Icon-Customer-Success.svg" alt="" />
            <Text mt={4} fontSize={"2xl"}><b>Customer Success</b></Text>
            <Text mt={4} fontSize={"lg"}>Offer exceptional support: Your clients will be delighted with one-click scheduling and increased responsiveness.</Text>
            <Text mt={4} fontSize={"2xl"}><b className="c1">Learn More</b></Text>
        </div>
        <div className="experts" style={{backgroundColor:"white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"15px", transition:"1s"}}>
        <img style={{width:"30px", height:"25px"}} src="https://images.ctfassets.net/k0lk9kiuza3o/1kecwP9aYPUOD7cgexPgW5/bf271becdb7ff17e2939353e82792f9c/Icon-Revenue-Ops.svg" alt="" />
            <Text mt={4} fontSize={"2xl"}><b>Revenue Operations</b></Text>
            <Text mt={4} fontSize={"lg"}>Streamline meeting and activity data. Calendly's native integrations with Salesforce and Hubspot ensure up-to-date reporting.</Text>
            <Text mt={4} fontSize={"2xl"}><b className="c1">Learn More</b></Text>
        </div>
        <div className="experts" style={{backgroundColor:"white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"15px", transition:"1s"}}>
        <img src="https://images.ctfassets.net/k0lk9kiuza3o/Qze1UNJ9kIVk4kZVopC7z/ac18ecb4e93a0c7096c132181fa1f2bf/Icon-Recruiting.svg" alt="" />
            <Text mt={4} fontSize={"2xl"}><b>Recruiting</b></Text>
            <Text mt={4} fontSize={"lg"}>Simplify recruitment by smoothing every aspect of the interview scheduling process, including automated follow-ups.</Text>
            <Text mt={4} fontSize={"2xl"}><b className="c1">Learn More</b></Text>
        </div>
        <div className="experts" style={{backgroundColor:"white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"15px", transition:"1s"}}>
        <img style={{width:"30px", height:"25px"}} src="https://images.ctfassets.net/k0lk9kiuza3o/4y0cQDGC4yqwssAQYvFivo/3fec9fbec6f26274fd09b9bcffc18c32/IT_Solution.svg" alt="" />
            <Text mt={4} fontSize={"2xl"}><b>Information Technology</b></Text>
            <Text mt={4} fontSize={"lg"}>Increase scheduling productivity across your org while maintaining full security and control over users.</Text>
            <Text mt={4} fontSize={"2xl"}><b className="c1">Learn More</b></Text>
        </div>
      </div>


      <div data-aos="flip-down" style={{marginTop:"100px", backgroundColor:"white"}}>
        <div style={{width:"50%", margin:"auto"}}><Heading>Outperform the competition with fast, frictionless interactions</Heading></div>
        <div style={{width:"72%", margin:"auto", marginTop:"50px", display:"flex",  gap:"25px", textAlign:"left"}}>
            <div style={{padding:"30px", width:"33%", borderRight:"1px solid #D0D0D0", borderWidth:"medium"}}>
                <Heading size="3xl">45%</Heading>
                <Text style={{color:"#484848"}} mt={5} fontSize={"2xl"}>faster meeting scheduling</Text>
            </div>
            <div style={{padding:"30px", width:"33%", borderRight:"1px solid #D0D0D0", borderWidth:"medium"}}>
                <Heading size="3xl">25%</Heading>
                <Text style={{color:"#484848"}} mt={5} fontSize={"2xl"}>more revenue per lead</Text>
            </div>
            <div style={{padding:"30px", width:"33%", }}>
                <Heading size="3xl">100%</Heading>
                <Text style={{color:"#484848"}} mt={5} fontSize={"2xl"}>more candidate screens</Text>
            </div>
        </div>
      </div>


      <div data-aos="fade-up" style={{ display: "flex", gap: "80px", marginTop: "100px" }}>
        <div style={{ marginLeft: "180px" }}>
          <img style={{ width: "520px", height: "500px" }} src="https://images.ctfassets.net/k0lk9kiuza3o/4WUlooNUjQMjAGhtA7JTgk/4c74fa9cbace4e7feb965d1b6ac4c07b/Enterprise_-_Immediate_adoption__1_.svg" alt=""/>
        </div>
        <div style={{ width: "35%", marginTop: "60px" }}>
          <Text style={{ color: "blue", textAlign: "left" }}><b>THE LEADER IN SCHEDULING</b></Text>
          <Heading mt={6} style={{ textAlign: "left" }}>Immediate adoption and happier teams</Heading>
          <Text mt={6} fontSize="xl" style={{ textAlign: "left" }}>
          Enterprise software doesn't have to be clunky or complicated. As the No. 1 rated scheduling solution, your teams will actually enjoy using Calendly. More than 50,000 companies and 10 million users worldwide rely on Calendly's intuitive scheduling platform to power delightful, frictionless experiences.
          </Text>
        </div>
      </div>


      <div data-aos="fade-left" style={{ display: "flex", gap: "40px", marginTop: "30px",  }}>
        <div style={{ width: "35%", marginTop: "40px", marginLeft: "200px" }}>
          <Heading mt={10} size="xl" style={{ textAlign: "left" }}>
          Enterprise-grade security and management
          </Heading>
          <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
          Centralized team management: Manage users, teams, reporting, and shared event types from one centralized admin dashboard.
          </Text>
          <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
          Secure and compliant: Securely deploy Calendly with SAML SSO and SCIM provisioning. GDPR compliant and SOC 2 Type II certified.
          </Text>
          <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
          Complete data privacy: Calendly never stores passwords, content, or PII associated with your team's accounts.
          </Text>
        </div>
        <div >
          <img
            style={{ width: "620px", height: "600px", paddingLeft: "30px" }}
            src="https://images.ctfassets.net/k0lk9kiuza3o/65zCqXNj8uSrLd5XNkQpnz/2daa055c61f57b424e76286051e9e474/Image_Feature_auditing_4.png?w=1470&h=1210&q=50&fm=webp"
            alt=""
          />
        </div>
      </div>


      <div data-aos="fade-up" style={{ display: "flex", gap: "80px", marginTop: "40px" }}>
        <div style={{ marginLeft: "180px" }}>
          <img style={{ width: "600px", height: "250px" }} src="https://images.ctfassets.net/k0lk9kiuza3o/6DLCZsdqWOdGcRs06eZA7U/4b65473ad01fa6d4612ed26068393030/Enterprise_-_Integrations_2x.png?w=1289&h=610&q=50&fm=webp" alt=""/>
        </div>
        <div style={{ width: "35%",  }}>
          <Heading mt={6} style={{ textAlign: "left" }}>Easy to use, easy to integrate</Heading>
          <Text mt={6} fontSize="xl" style={{ textAlign: "left" }}>
          Calendly powers your external interactions so you can standardize your scheduling workflows across multiple teams and systems, providing “wow” experiences for all.
          </Text>
          <Text mt={5} style={{ textAlign: "left" }}><b className="c1">View our integrations</b></Text>
        </div>
      </div>


      <div data-aos="flip-right" style={{marginTop:"100px"}}>
        <Heading size="2xl">Our experts are here to help</Heading>
        <div style={{width:"70%", margin:"auto", marginTop:"50px", display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"30px", textAlign:"left"}}>
            <div className="experts" style={{padding:"15px",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px", transition: "1s"}}>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg" alt="" />
                <Heading mt={5} size="md">Designated customer success team</Heading>
                <Text mt={5}>Enterprise customers receive designated support to help them get the most value from Calendly.</Text>
            </div>
            <div className="experts" style={{padding:"15px", backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px", transition: "1s"}}>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg" alt="" />
                <Heading mt={5} size="md">Training and change management plans</Heading>
                <Text mt={5}>Ensure successful and timely Calendly rollouts across your organization with our customer success teams.</Text>
            </div>
            <div className="experts" style={{padding:"15px", backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px", transition: "1s"}}>
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg" alt="" />
                <Heading mt={5} size="md">Integrate seamlessly with the way you work</Heading>
                <Text mt={5}>Embed Calendly into your team’s existing tools and processes. Easily adjust as you grow and scale.</Text>
            </div>
        </div>
      </div>


      <div data-aos="flip-left" style={{marginTop:"150px"}}>
        <Heading size="2xl">Get in touch with Calendly sales</Heading>
        <Button mt={10} colorScheme={"blue"}>Talk with Sales</Button>
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

export default Enterprise;
