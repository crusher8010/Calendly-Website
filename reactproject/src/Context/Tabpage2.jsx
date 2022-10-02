import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Text,
} from "@chakra-ui/react";
import "../Components/Home.css";

function Tabpage2() {
  return (
    <div className="g5">
      <Tabs>
        <TabList className="g6">
          <Tab>
            <h1 style={{ fontSize: "20px" }}>
              <b>Team Scheduling Pages</b>
            </h1>
          </Tab>
          <Tab>
            <h1 style={{ fontSize: "20px" }}>
              <b>Automated Workflows</b>
            </h1>
          </Tab>
          <Tab>
            <h1 style={{ fontSize: "20px" }}>
              <b>Round Robin Events</b>
            </h1>
          </Tab>
          <Tab>
            <h1 style={{ fontSize: "20px" }}>
              <b>Salesforce Integration</b>
            </h1>
          </Tab>
          <Tab>
            <h1 style={{ fontSize: "20px" }}>
              <b>Analytics</b>
            </h1>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
              <div style={{ width: "35%",margin:"auto", marginTop: "40px", }}>
                <Heading mt={10} size="xl" style={{ textAlign: "left" }}>
                  Outperform the competition with faster connections
                </Heading>
                <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
                  You can't waste time when prospects, clients, and candidates
                  express interest. Avoid missed opportunities by automatically
                  qualifying and routing website visitors to specific team
                  members. You can also pool scheduling availability together to
                  offer more options to connect.
                </Text>
                <Text mt={5} fontSize="xl" style={{ textAlign: "left", color:"blue" }}><b>Learn More</b></Text>
              </div>
              <div>
                <img
                  style={{
                    width: "550px",
                    height: "500px",
                    paddingLeft: "30px",
                    paddingTop: "50px"
                  }}
                  src="https://images.ctfassets.net/k0lk9kiuza3o/zLDG89VPUNmWTS6SXf3W4/31f28cdea9417112d43e2270f554c289/Calendly-Availability-In-A-Click.png?w=1180&h=1107&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div style={{ display: "flex",  marginTop: "40px" }}>
              <div style={{ width: "35%",margin:"auto", marginTop: "40px", }}>
                <Heading mt={10} size="xl" style={{ textAlign: "left" }}>
                Automated Workflows
                </Heading>
                <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
                Apply pre-built notifications, reminders, and follow-ups to multiple event types that can be quickly managed and updated from one location.
                </Text>
                <Text mt={5} fontSize="xl" style={{ textAlign: "left", color:"blue" }}><b>Learn More</b></Text>
              </div>
              <div>
                <img
                  style={{
                    width: "550px",
                    height: "500px",
                   
                  }}
                  src="https://images.ctfassets.net/k0lk9kiuza3o/6rrSFLQXzyJUdnnnrAbhpb/16ec1ec41c24edc00ad2ac3d71148a0c/Calendly-Teams-Workflows.png?w=1140&h=924&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div data-aos="fade-left" style={{ display: "flex", gap: "25px", marginTop: "40px" }}>
              <div style={{ width: "35%",margin:"auto", marginTop: "40px", }}>
                <Heading mt={10} size="xl" style={{ textAlign: "left" }}>
                Round Robin Events
                </Heading>
                <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
                Surface times from multiple people’s calendars to provide customers with more options to choose from. Round Robin event types can be configured to automatically optimize by availability or equal distribution across your team.
                </Text>
                <Text mt={5} fontSize="xl" style={{ textAlign: "left", color:"blue" }}><b>Learn More</b></Text>
              </div>
              <div>
                <img
                  style={{
                    width: "550px",
                    height: "500px",
                    paddingLeft: "10px",
                    paddingTop: "50px"
                  }}
                  src="https://images.ctfassets.net/k0lk9kiuza3o/3fuQVHmQvBpB7tLpYkHoc2/7e9425808ec83edf9beb8b04f193810b/Calendly-Scheduling-Round-Robin.png?w=1180&h=977&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div data-aos="fade-left" style={{ display: "flex", gap: "10px", marginTop: "40px" }}>
              <div style={{ width: "35%",margin:"auto", marginTop: "40px", }}>
                <Heading mt={10} size="xl" style={{ textAlign: "left" }}>
                Salesforce Integration
                </Heading>
                <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
                With Calendly connected to Salesforce, customer records stay up to date, regardless of their status. When a Calendly meeting gets booked, a lead automatically gets created and if the lead already exists, the lead auto-updates with meeting activity.
                </Text>
                <Text mt={5} fontSize="xl" style={{ textAlign: "left", color:"blue" }}><b>Learn More</b></Text>
              </div>
              <div>
                <img
                  style={{
                    width: "550px",
                    height: "500px",
                    
                  }}
                  src="https://images.ctfassets.net/k0lk9kiuza3o/1qiCwDC3BYKpbqWy6z9Z3q/b386264c8b49eff466ee48b59caac587/Calendly-Salesforce-Integration.png?w=1140&h=924&q=50&fm=webp"
                  alt=""
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div data-aos="fade-left" style={{ display: "flex",  marginTop: "40px" }}>
              <div style={{ width: "40%",margin:"auto", marginTop: "40px", }}>
                <Heading mt={10} size="xl" style={{ textAlign: "left" }}>
                Analytics
                </Heading>
                <Text mt={8} fontSize="xl" style={{ textAlign: "left" }}>
                Discover activity and trends — such as popular meeting days, top performers, in-demand meeting types, and more.
                </Text>
                <Text mt={5} fontSize="xl" style={{ textAlign: "left", color:"blue" }}><b>Learn More</b></Text>
              </div>
              <div>
                <img
                  style={{
                    width: "550px",
                    height: "500px",
                    
                  }}
                  src="https://images.ctfassets.net/k0lk9kiuza3o/3rLEehwNS0Kj9h1NOl1NFI/12e07302825a3dba741b417fcd7b45fa/Popular_days___users_with_most_events__6_.png?w=1471&h=1210&q=50&fm=webp"
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

export default Tabpage2;
