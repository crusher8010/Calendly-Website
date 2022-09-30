import {Menu,MenuButton,MenuList,MenuItem,Heading,Text,} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import "./Dropdown1.css";
  
  function Dropdown1() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Menu>
        <MenuButton as="h1" rightIcon={<ChevronDownIcon />}>
          <b>Products</b>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <div className="main">
              <div className="first">
                <Heading size="xl">Product</Heading>
                <Text mt={10} fontSize="2xl">
                  Get to know the leader in automated scheduling and see why
                  millions connect using Calendly.
                </Text>
              </div>
              <div className="second">
                <div className="b1">
                  <div className="t1">
                    <div>
                      <Heading size="md">Features</Heading>
                    </div>
                    <div>
                      <Text>
                        Flexible, intuitive features for every scheduling need.
                      </Text>
                    </div>
                  </div>
                  <div className="t2">
                    <div>
                      <Heading size="md">Solutions</Heading>
                    </div>
                    <div>
                      <Text>
                        Explore how thought leaders in your industry use Calendly.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="cont">
                  <div className="temp">
                    <div className="box">
                      <img
                        width="50px"
                        height="50px"
                        src="https://static.vecteezy.com/system/resources/previews/005/988/959/original/calendar-icon-free-vector.jpg"
                        alt=""
                      />
                      <h2>
                        <b>Routing Forms</b>
                      </h2>
                      <p>
                        Request Information to efficiently screen and qualify
                        people before
                      </p>
                    </div>
                    <div className="box">
                      <img
                        width="50px"
                        height="50px"
                        src="data:image/png;base64,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"
                        alt=""
                      />
                      <h2>
                        <b>Embeds</b>
                      </h2>
                      <p>Add Calendly on your website to streamline scheduling</p>
                    </div>
                    <div className="box">
                      <img
                        width="50px"
                        height="50px"
                        src="https://c8.alamy.com/zooms/9/0cfe829655444638b5c1abccc179ce0c/wtey0c.jpg"
                        alt=""
                      />
                      <h2>
                        <b>Team Scheduling</b>
                      </h2>
                      <p>Customize exactly how and when you are picked</p>
                    </div>
                    <div className="box">
                      <img
                        width="50px"
                        height="50px"
                        src="https://cdn1.iconfinder.com/data/icons/network-sharing/24/calendar_connection_network_share_sharing_interaction-512.png"
                        alt=""
                      />
                      <h2>
                        <b>Calender Connections</b>
                      </h2>
                      <p>
                        Connect up to six calendars per user to check real-time
                        availability
                      </p>
                    </div>
                    <div className="box">
                      <img
                        width="50px"
                        height="50px"
                        src="https://www.freeiconspng.com/thumbs/meeting-icon/meeting-icon-png-presentation-icon-board-meeting-icon-meeting-icon--4.png"
                        alt=""
                      />
                      <h2>
                        <b>Meeting Polls</b>
                      </h2>
                      <p>
                        Let your invitees vote on preferred times before
                        scheduling
                      </p>
                    </div>
                    <div className="box">
                      <img
                        width="50px"
                        height="50px"
                        src="data:image/png;base64,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"
                        alt=""
                      />
                      <h2>
                        <b>Workflows</b>
                      </h2>
                      <p>Automate communications before and after meetings</p>
                    </div>
                  </div>
                  <div className="temp2">
                    <ul>
                      <li>
                        <div>
                          <h1>
                            <b>Sales</b>
                          </h1>
                        </div>
                      </li>
                      <li>
                        <div>
                          <h1>
                            <b>Recruiting</b>
                          </h1>
                        </div>
                      </li>
                      <li>
                        <div>
                          <h1>
                            <b>Revenue Operations</b>
                          </h1>
                        </div>
                      </li>
                      <li>
                        <div>
                          <h1>
                            <b>Customer Success</b>
                          </h1>
                        </div>
                      </li>
                      <li>
                        <div>
                          <h1>
                            <b>Information Technology</b>
                          </h1>
                        </div>
                      </li>
                      <li>
                        <div>
                          <h1>
                            <b>Marketing</b>
                          </h1>
                        </div>
                      </li>
                      <li>
                        <div>
                          <h1>
                            <b>Integrations</b>
                          </h1>
                          <p>
                            Seamless connection to your favourite calenders, tools
                            and apps.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
  
  export default Dropdown1;
  