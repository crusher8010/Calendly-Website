import {Menu,MenuButton,MenuList,MenuItem,Heading,Text,} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import "./Dropdown2.css";

function Dropdown2(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Menu>
        <MenuButton as="h1" rightIcon={<ChevronDownIcon />}>
          <b>Resources</b>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <div className="main1">
              <div className="first1">
                <Heading size="xl">Resources</Heading>
                <Text mt={10} fontSize="2xl">
                  More in-depth information about every corner of the calendly scheduling ecosystem.
                </Text>
              </div>
              <div className="second1">
                <div className="box1">
                    <img width="50px" height="50px" src="https://aux.iconspalace.com/uploads/about-icon-256.png" alt="" />
                    <h2><b>About</b></h2>
                    <p>Learn about who we are</p>
                </div>
                <div className="box1">
                    <img width="50px" height="50px" src="https://www.freeiconspng.com/thumbs/customers-icon/customer-group-customers-forum-people-users-icon-2.jpg" alt="" />
                    <h2><b>Customer Stories</b></h2>
                    <p>Hear from our valid customers</p>
                </div>
                <div className="box1">
                    <img width="50px" height="50px" src="https://cdn-icons-png.flaticon.com/512/6352/6352498.png" alt="" />
                    <h2><b>Resource Center</b></h2>
                    <p>Explore all our resources</p>
                </div>
                <div className="box1">
                    <img width="50px" height="50px" src="https://cdn-icons-png.flaticon.com/512/682/682055.png" alt="" />
                    <h2><b>Help Center</b></h2>
                    <p>Explore how to use calendly</p>
                </div>
                <div className="box1">
                    <img width="50px" height="50px" src="https://cdn-icons-png.flaticon.com/512/4922/4922073.png" alt="" />
                    <h2><b>Blog</b></h2>
                    <p>Thoughts, news and best practices</p>
                </div>
                <div className="temp1">
                    <ul>
                        <hr />
                        <li><div><h1><b>Newsroom</b></h1></div></li>
                        <li><div><h1><b>Partners</b></h1></div></li>
                        <li><div><h1><b>Developers</b></h1></div></li>
                        <li><div><h1><b>Careers</b></h1></div></li>
                    </ul>
                </div>
              </div>
            </div>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
  
  export default Dropdown2;
