import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Text,
} from "@chakra-ui/react";
import "./Home.css";

function Tabpage() {
  return (
    <div className="g5">
      <Tabs>
        <TabList className="g6">
          <Tab>
            <h1 style={{fontSize:"20px"}}>
              <b>Sales</b>
            </h1>
          </Tab>
          <Tab>
            <h1 style={{fontSize:"20px"}}>
              <b>Marketing</b>
            </h1>
          </Tab>
          <Tab>
            <h1 style={{fontSize:"20px"}}>
              <b>Customer Success</b>
            </h1>
          </Tab>
          <Tab>
            <h1 style={{fontSize:"20px"}}>
              <b>Recruiting</b>
            </h1>
          </Tab>
          <Tab>
            <h1 style={{fontSize:"20px"}}>
              <b>Information Technology</b>
            </h1>
          </Tab>
          <Tab>
            <h1 style={{fontSize:"20px"}}>
              <b>Education</b>
            </h1>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className="jack1">
              <div className="ryu">
                <div className="rose">
                  <div>
                    <img
                      src="https://images.ctfassets.net/k0lk9kiuza3o/NEDsJchfNbmWlZfLpsaMt/ceee40e03e9d2519682cbb743d55ccaf/dollar-sign.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">Drive more revenue</Heading>
                    <Text fontSize="lg">
                      Book high-value meetings in seconds and turn scheduling
                      into a competitive advantage.
                    </Text>
                  </div>
                </div>
                <div className="rose">
                  <div>
                    <img
                      src="https://images.ctfassets.net/k0lk9kiuza3o/5aXlssJwlogukbzhbqCXwN/d1b5063e4db4ade82fa452783bea99c7/refresh-ccw.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">Speed up your sales cycle</Heading>
                    <Text fontSize="lg">
                      Keep your deal momentum high and remove scheduling
                      friction at every stage of your sales cycle.
                    </Text>
                  </div>
                </div>
                <div className="rose">
                  <div>
                    <img
                      style={{ width: "50px" }}
                      src="https://images.ctfassets.net/k0lk9kiuza3o/5kHORGT1xDSEehcB0L28vn/c0d4b81c4ae47b7a50dc0a22077a2027/Agreement-Icon.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">Close more deals</Heading>
                    <Text fontSize="lg">
                      Customize reminder and follow-up workflows to move deals
                      along, integrate with sales tools, and remove logistical
                      tasks to focus on selling.
                    </Text>
                  </div>
                </div>
                <div className="head2">
                  <h1>
                    <b className="c1">Learn More</b>
                  </h1>
                </div>
              </div>
              <div className="g2">
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/Uf3sW4TV1LnoVOsEdFpnr/8821d527b78f6b59c8a81502dbd9e748/Frame_28761.png?w=1060&h=896&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="jack1">
              <div className="ryu">
                <div className="rose">
                  <div>
                    <img
                      src="https://images.ctfassets.net/k0lk9kiuza3o/3CNVZBIM7dzQX9Duz3VJmS/4cf2ee8e26cf1a3ef57f00f95d6547d1/users.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">Drive more revenue</Heading>
                    <Text fontSize="lg">
                      Turn marketing leads into booked meetings, faster.
                    </Text>
                  </div>
                </div>
                <div className="rose">
                  <div>
                    <img
                      src="https://images.ctfassets.net/k0lk9kiuza3o/5N4rDTMNBhZ1xGlKll6nTJ/8a7cdd3c2526ad1bc1ebfe9a67532af9/clock.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">Improve lead response times</Heading>
                    <Text fontSize="lg">
                      Gain a competitive advantage when you qualify, route, and
                      book leads instantly.
                    </Text>
                  </div>
                </div>
                <div className="rose">
                  <div>
                    <img
                      src="https://images.ctfassets.net/k0lk9kiuza3o/SwMOEz2HNxr5l1WErGh9d/35f5ae2e807a6e1b3b5d94bf246ce177/trending-up.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">Boost conversion rates</Heading>
                    <Text fontSize="lg">
                      Reduce friction in the sales funnel and close more deals.
                    </Text>
                  </div>
                </div>
                <div className="head2">
                  <h1>
                    <b className="c1">Learn More</b>
                  </h1>
                </div>
              </div>
              <div className="g2">
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/3R2W0MDmosGALExuuZI4kH/65642520c96e12d5ecaeac1cf928188d/Calendly-Demand-Gen-Small.png?w=1141&h=936&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="jack1">
              <div className="ryu">
                <div className="rose">
                  <div>
                    <img
                      style={{ width: "50px" }}
                      src="https://images.ctfassets.net/k0lk9kiuza3o/3m8Pa01PGKx6JSEUHqDUKl/2b088d78224e6c5d2f5c1d4a232ddc63/smile.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">Drive more retention</Heading>
                    <Text fontSize="lg">
                      Bring all of your experts together and connect with
                      customers at every stage of their journey to build
                      long-lasting partnerships.
                    </Text>
                  </div>
                </div>
                <div className="rose">
                  <div>
                    <img
                      style={{ width: "30px" }}
                      src="https://images.ctfassets.net/k0lk9kiuza3o/5N4rDTMNBhZ1xGlKll6nTJ/8a7cdd3c2526ad1bc1ebfe9a67532af9/clock.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">Speed up your response times</Heading>
                    <Text fontSize="lg">
                      Quickly book time to solve customer's needs and help them
                      self-serve to support their goals.
                    </Text>
                  </div>
                </div>
                <div className="rose">
                  <div>
                    <img
                      style={{ width: "50px" }}
                      src="https://images.ctfassets.net/k0lk9kiuza3o/6WU4r9N96I7TBZjTECoIX9/0ba6bbaedd42457823598a1baf8c1d7c/Positive-Review-1.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">Improve NPS and customer health</Heading>
                    <Text fontSize="lg">
                      Change the way you schedule meetings to increase customer
                      satisfaction and keep engagement high with reminder and
                      follow-up workflows.
                    </Text>
                  </div>
                </div>
                <div className="head2">
                  <h1>
                    <b className="c1">Learn More</b>
                  </h1>
                </div>
              </div>
              <div className="g4">
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/3uXk38DyGLTndU6k9MEUv2/fccfec5b3f3bc6ab1fc1c7ca6b524a58/Image__1_.png?w=740&h=417&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="jack1">
              <div className="ryu">
                <div className="rose">
                  <div>
                    <img
                      style={{ width: "50px" }}
                      src="https://images.ctfassets.net/k0lk9kiuza3o/6aellrgdB1SPFMoLlRk04f/0810b81eb3665c50fcd94541814bb505/Search-Person-Icon.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">Hire more efficiently</Heading>
                    <Text fontSize="lg">
                      Spend less time wrangling calendars and more time meeting
                      candidates.
                    </Text>
                  </div>
                </div>
                <div className="rose">
                  <div>
                    <img
                      src="https://images.ctfassets.net/k0lk9kiuza3o/pDkrrNBtyfWzmUODPY8bW/2e006cbcade2755dd214e00706562946/Timed-Meeting-Icon.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">Speed up your recruiting cycle</Heading>
                    <Text fontSize="lg">
                      Book interviews in seconds and reduce time-to-fill.
                    </Text>
                  </div>
                </div>
                <div className="rose">
                  <div>
                    <img
                      style={{ width: "50px" }}
                      src="https://images.ctfassets.net/k0lk9kiuza3o/nrDlXWuX6bbC2N9Y0Vaxc/c028590d087071fb0e42924832fb596c/Job-Icon__2_.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">
                      Improve the candidate experience
                    </Heading>
                    <Text fontSize="lg">
                      Eliminate friction and make your recruiting process a
                      competitive advantage.
                    </Text>
                  </div>
                </div>
                <div className="head2">
                  <h1>
                    <b className="c1">Learn More</b>
                  </h1>
                </div>
              </div>
              <div className="g2">
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/5bRUJlBmceJsppwBnX8R9U/c34c85dfb198f3d59d63da6d6ee5e021/Calendly-Recruiting-Small.png?w=1140&h=930&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="jack1">
              <div className="ryu">
                <div className="rose">
                  <div>
                    <img
                      style={{ width: "50px" }}
                      src="https://images.ctfassets.net/k0lk9kiuza3o/7aaZgS3dOsQOkUcj5vSx2g/1687e65c95aef6f526c241d50bb601e6/Security-Icon.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">
                      Maintain enterprise-grade security with scheduling
                      automation
                    </Heading>
                    <Text fontSize="lg">
                      Stay aligned with your security requirements and reduce
                      risk across the org.
                    </Text>
                  </div>
                </div>
                <div className="rose">
                  <div>
                    <img
                      style={{ width: "50px" }}
                      src="https://images.ctfassets.net/k0lk9kiuza3o/4TFqa9xvUR0S1uwXFgBBtm/8a34ab0a64aa024139d325f2f9ad3abe/Happy-Laptop-Icon.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">Implement and govern at ease</Heading>
                    <Text fontSize="lg">
                      Eliminate the manual processes of implementing, managing
                      user access and permissions on the platform.
                    </Text>
                  </div>
                </div>
                <div className="rose">
                  <div>
                    <img
                      style={{ width: "50px" }}
                      src="https://images.ctfassets.net/k0lk9kiuza3o/NEDsJchfNbmWlZfLpsaMt/ceee40e03e9d2519682cbb743d55ccaf/dollar-sign.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">
                      Drive adoption and ROI across teams
                    </Heading>
                    <Text fontSize="lg">
                      Partner with our team to onboard, drive adoption, and
                      identify success metrics to achieve greater value, faster.
                    </Text>
                  </div>
                </div>
                <div className="head2">
                  <h1>
                    <b className="c1">Learn More</b>
                  </h1>
                </div>
              </div>
              <div className="g2">
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/6ifHgXasdWZn9MzKDaNjnK/d4fb22bcdafe0d298d36ff53381a3696/Calendly-IT_Small.png?w=1141&h=938&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="jack1">
              <div className="ryu">
                <div className="rose">
                  <div>
                    <img
                      style={{ width: "50px" }}
                      src="https://images.ctfassets.net/k0lk9kiuza3o/2hCmx8ux2ZaZYpi1LfeZGS/768111b4cd3ab7c82d709b4123fbb13b/Marketing_Solution_Icon.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">
                      Drive more valuable connections with automated scheduling
                    </Heading>
                    <Text fontSize="lg">
                      Spend more quality time supporting students, whether
                      you're advising, tutoring, career planning, or counseling.
                    </Text>
                  </div>
                </div>
                <div className="rose">
                  <div>
                    <img
                      style={{ width: "50px" }}
                      src="https://images.ctfassets.net/k0lk9kiuza3o/7vpOOUUewl6Sk6ZtQegrgO/5aabedcd30143dacb84b96b9179b00c2/Meeting-Time-Icon.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">
                      Increase communication and foster coordination
                    </Heading>
                    <Text fontSize="lg">
                      Make your schedule more accessible to students and
                      prospects, allowing them to book time when they need it
                      most.
                    </Text>
                  </div>
                </div>
                <div className="rose">
                  <div>
                    <img
                      style={{ width: "50px" }}
                      src="https://images.ctfassets.net/k0lk9kiuza3o/4AvHlG4L8zt6i0cHDlWawV/64a00792fa9673dfe9f0bb1daa6c741e/Education_Solution_Icon.svg"
                      alt=""
                    />
                  </div>
                  <div className="head3">
                    <Heading size="md">
                      Deliver a better educational experience
                    </Heading>
                    <Text fontSize="lg">
                      Focus on what matters most: supporting and connecting with
                      your students, so they can succeed.
                    </Text>
                  </div>
                </div>
                <div className="head2">
                  <h1>
                    <b className="c1">Learn More</b>
                  </h1>
                </div>
              </div>
              <div className="g2">
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/71TnxLDU8ttK06n8Jh0bso/f7359779526ad5059fa5ab2f6618985c/Calendly-Education-Small.png?w=1140&h=935&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Tabpage;
