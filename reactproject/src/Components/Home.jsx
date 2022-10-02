import {Heading,Text,Button,Input,Flex,Select,Image,} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {useEffect} from "react";
import Tabpage from "./Tabpage";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

function Home() {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <div className="lay1">
        <div className="part1">
          <div className="g1">
            <Heading size={{ base: "2xl", md: "3xl" }} className="head1">
              Easy scheduling <span className="c1">ahead</span>
            </Heading>
            <Text mt={8} fontSize={{ base: "3xl", md: "xl" }} className="head1">
              Calendly is your scheduling automation platform for eliminating
              the hassle of back-and-forth emails for finding the perfect time —
              and so much more.
            </Text>
            <Flex mt={8} gap={2}>
              <Input
                text="text"
                placeholder="Enter your Username"
                p={8}
                fontSize={25}
              />
              <Button p={8} colorScheme="blue">
                <b className="btn1">Sign Up</b>
              </Button>
            </Flex>
          </div>
          <div className="g2">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/46W8NE43rD54MveL20rPp5/188c54e94778695132cfaa1fb65743e9/Homepage-Hero.png?w=1366&h=1100&q=50&fm=webp"
              alt=""
            />
          </div>
        </div>
      </div>


      <div data-aos="fade-down" className="lay2">
        <div className="part2">
          <Heading size="2xl">
            Simplified scheduling for more than{" "}
            <span className="c1">10,000,000</span> users worldwide
          </Heading>
        </div>
        <div style={{width: "80%", margin:"auto",  height:"100px", marginTop:"22px"}}>
        <Marquee play speed={80}>
          <div className="image-wrapper"><img src="https://cdn-icons-png.flaticon.com/512/888/888848.png" alt="" /></div>
          <div className="image-wrapper"><img src="https://seekvectorlogo.com/wp-content/uploads/2018/12/zenefits-vector-logo.png" alt="" /></div>
          <div className="image-wrapper"><img src="https://designbro.com/blog/wp-content/uploads/compass-real-estate-logo.jpg" alt="" /></div>
          <div className="image-wrapper"><img src="https://vectorlogoseek.com/wp-content/uploads/2018/12/twilio-vector-logo.png" alt="" /></div>
          <div className="image-wrapper"><img src="https://static.wixstatic.com/media/dfa37c_c445723cb0a545cea3c37d93020635f6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg" alt="" /></div>
          <div className="image-wrapper"><img src="https://cdn-icons-png.flaticon.com/512/888/888848.png" alt="" /></div>
          <div className="image-wrapper"><img src="https://seekvectorlogo.com/wp-content/uploads/2018/12/zenefits-vector-logo.png" alt="" /></div>
          <div className="image-wrapper"><img src="https://designbro.com/blog/wp-content/uploads/compass-real-estate-logo.jpg" alt="" /></div>
          <div className="image-wrapper"><img src="https://vectorlogoseek.com/wp-content/uploads/2018/12/twilio-vector-logo.png" alt="" /></div>
        </Marquee>
        </div>
      </div>


      <div data-aos="fade-left" className="lay3">
        <div className="part3">
          <Heading size="2xl">
            Special features for teams who conduct meetings at scale
          </Heading>
        </div>
        <Tabpage />
      </div>

      
      <div className="lay4">
        <Heading size="2xl">
          We make scheduling for you easier than ever
        </Heading>
      </div>

      {/* Crausol Part of the Page */}
      <div style={{width:"60%", margin:"auto", marginTop:"80px"}}>
        <Slider {...settings}>
          <div>
            <Heading>Share your Calendly availability with others</Heading>
            <Text fontSize="2xl" mt={10}>Grow your business with scheduling automation. Simply email, text, or add your Calendly availability to your website - and watch prospects and recruits book high-value meetings with you.</Text>
            <Text className="c1" fontSize="xl" mt={5}><b>Learn More</b></Text>
          </div>
          <div>
            <Heading>Schedule as a team</Heading>
            <Text fontSize="2xl" mt={10}>Calendly adapts to both you and your team's scheduling preferences. Co-host a client call with a colleague, email reminders and follow-ups, and integrate everything with your preferred software tools.</Text>
            <Text className="c1" fontSize="xl" mt={5}><b>Learn More</b></Text>
          </div>
          <div>
            <Heading>Hit your number</Heading>
            <Text fontSize="2xl" mt={10}>High-value meetings are the lifeblood of your business. Increase revenue, retain customers, and land recruits with the #1 scheduling automation platform.</Text>
            <Text className="c1" fontSize="xl" mt={5}><b>Learn More</b></Text>
          </div>
        </Slider>
      </div>
      

      <div data-aos="flip-up" className="lay1">
        <div className="part4">
          <div className="g7">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/1P9zuAkIFq322HPnDsTr0r/80fc18ea040a5b39e746bfdee015e9a0/Calendly-testimonial-Vonage__1_.png?w=1140&h=931&q=50&fm=webp"
              alt=""
            />
          </div>
          <div className="g8">
            <Text fontSize="3xl">
              “Calendly has increased meetings with customers by 216% for our
              Vonage team.”
            </Text>
            <img
              style={{ width: "200px", height: "80px", marginTop: "20px" }}
              src="https://images.ctfassets.net/k0lk9kiuza3o/2H4GbF1jpOyD7cNMW0Dv82/85a232765d647c41403ca471fe76589d/VonageLogo.svg"
              alt=""
            />
            <Heading mt={6} size="lg">
              Chris Williams
            </Heading>
            <Text fontSize="xl">Head of Customer Success UK/EMEA</Text>
            <h1 className="hit1">
              <b>Learn More</b>
            </h1>
          </div>
        </div>
      </div>


      <div className="lay7">
        <Heading size="2xl">
          Scheduling automation happens before and after meetings
        </Heading>
      </div>
      

      <div data-aos="fade-right" className="lay8">
        <div className="part6">
          <div className="g10">
            <Heading size={{ base: "2xl", md: "3xl" }}>
              Integrations and Extensions
            </Heading>
            <Text fontSize="2xl" mt={10}>
              Boost productivity with integrations that fold right into your
              workflow.
            </Text>
            <Button mt={10} colorScheme="blue">
              Explore Integrations
            </Button>
          </div>
          <div className="g11">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/7pnp3ZIJHHNMJEYXSCktL/b04ce26084a30501984a14a2058efa36/Integrations-Calendly__1_.png?w=1582&h=1283&q=50&fm=webp"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Component of It Team Secure */}
      <div data-aos="fade-left" className="lay5">
        <div className="g9">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/2L9MC4GQzvWk2uSZLbZO29/4d086ff64790b73fc82a63a49ffcf2b5/Calendly-Secure-IT.png?w=1140&h=930&q=50&fm=webp"
            alt=""
          />
        </div>
        <div className="part5">
          <Heading className="head3" size="2xl">
            Make your IT team feel secure and safe
          </Heading>
          <div className="hit2">
            <div>
              <img
                width="50px"
                src="https://images.ctfassets.net/k0lk9kiuza3o/3xAhNA94ZNW8SgygWcbKAU/3b33e8b180dba8023c0f7ead46da04ae/check.svg"
                alt=""
              />
            </div>
            <div className="head3">
              <Heading size="lg">Centralize billing</Heading>
              <Text fontSize="lg">
                Hundreds of coworkers use Calendly - bring them all together in
                one secure, managed account.
              </Text>
            </div>
          </div>
          <div className="hit2">
            <div>
              <img
                width="50px"
                src="https://images.ctfassets.net/k0lk9kiuza3o/3xAhNA94ZNW8SgygWcbKAU/3b33e8b180dba8023c0f7ead46da04ae/check.svg"
                alt=""
              />
            </div>
            <div className="head3">
              <Heading size="lg">Secure your Calendly usage</Heading>
              <Text fontSize="lg">
                Single-sign-on, SCIM, and more make it easy to onboard/offboard
                users, mandate passwords, and more.
              </Text>
            </div>
          </div>
          <div className="hit2">
            <div>
              <img
                width="50px"
                src="https://images.ctfassets.net/k0lk9kiuza3o/3xAhNA94ZNW8SgygWcbKAU/3b33e8b180dba8023c0f7ead46da04ae/check.svg"
                alt=""
              />
            </div>
            <div className="head3">
              <Heading size="lg">
                Standardize how your teams use Calendly
              </Heading>
              <Text fontSize="lg">
                Manage how your coworkers create meeting types, send consistent
                reminders, and adhere to brand standards.
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* Component of Free Sign up */}
      <div data-aos="flip-up" className="lay6">
        <Heading size="2xl">Sign up for free</Heading>
        <div className="hit3">
          <Link>
            <Button colorScheme="blue">Start for free</Button>
          </Link>
          <Button ml={6}>Talk to sales</Button>
        </div>
      </div>

      {/* Footer Part and all the contents */}
      <div data-aos="flip-down" className="lay9">
        <div className="part7">
          <Heading className="head4" mt={14} size="3xl">
            Easy<span style={{ color: "blue" }}> ahead</span>
          </Heading>
          <Text className="head6" mt={10} fontSize="lg">
            We take the work out of connecting with others so you can accomplish
            more.
          </Text>
          <div className="head5">
            <Select mt={20} placeholder="English">
              <option value="option1">English</option>
              <option value="option2">Francais</option>
              <option value="option3">Espanol</option>
              <option value="option3">Deutsch</option>
              <option value="option3">Portugues</option>
            </Select>
            <Flex mt={10} gap={3}>
              <Button>
                <Image
                  w="30px"
                  h="30px"
                  mr={2.5}
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                />
                Apple Store
              </Button>
              <Button>
                <Image
                  w="30px"
                  h="30px"
                  mr={2.5}
                  src="https://i1.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/07/current-google-play-icon.jpg?ssl=1"
                />
                Play Store
              </Button>
            </Flex>
            <Flex mt={20} gap={10}>
              <a href="https://twitter.com/calendly">
                <Image
                  w="25px"
                  h="25px"
                  src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                />
              </a>
              <a href="https://www.facebook.com/Calendly">
                <Image
                  w="25px"
                  h="25px"
                  src="https://cdn-icons-png.flaticon.com/512/59/59439.png"
                />
              </a>
              <a href="https://www.instagram.com/calendly/">
                <Image
                  w="25px"
                  h="25px"
                  src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                />
              </a>
              <a href="https://www.linkedin.com/company/calendly/life/lifeatcalendly/">
                <Image
                  w="25px"
                  h="25px"
                  src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                />
              </a>
              <a href="https://www.youtube.com/c/Calendly">
                <Image
                  w="25px"
                  h="25px"
                  src="https://cdn-icons-png.flaticon.com/512/152/152810.png"
                />
              </a>
            </Flex>
          </div>
        </div>
        <div className="part8">
          <ul className="part9">
            <li>
              <div>
                <h3>
                  <b>About</b>
                </h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>About Calendly</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Contact Sales</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Newsroom</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Careers</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Security</h3>
              </div>
            </li>
          </ul>
          <ul className="part9">
            <li>
              <div>
                <h3>
                  <b>Solutions</b>
                </h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Customer Success</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Sales</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Recruiting</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Information Technology</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Marketing</h3>
              </div>
            </li>
          </ul>
          <ul className="part9">
            <li>
              <div>
                <h3>
                  <b>Popular Features</b>
                </h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Embed Calendly</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Availabilty</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Send Notifications</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Using Calendly Mobile</h3>
              </div>
            </li>
          </ul>
          <ul className="part9">
            <li>
              <div>
                <h3>
                  <b>Support</b>
                </h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Help Center</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Video Tutorials</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Cookie Settings</h3>
              </div>
            </li>
          </ul>
          <ul className="part9">
            <li>
              <div>
                <h3>
                  <b>Add-Ons</b>
                </h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Download for Chrome</h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Download for Firefox</h3>
              </div>
            </li>
          </ul>
          <ul className="part9">
            <li>
              <div>
                <h3>
                  <b>Developers</b>
                </h3>
              </div>
            </li>
            <li style={{ marginTop: "20px" }}>
              <div>
                <h3>Developer Tools</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
