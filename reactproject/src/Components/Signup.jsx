import { useState} from "react";
import {Container,FormControl,FormLabel,Input,Heading,Button,Image,Box, Stack} from "@chakra-ui/react";
import {Navigate} from "react-router-dom";
import axios from "axios";

function Signup() {
  const [user, setUser] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    axios.post("http://localhost:4000/Details", {
      user: user,
      email: mail,
      password: pass,
    });

    <Navigate to="/login" />
  };

  return (
    <Container>
      <Stack mt={10} ml={38}>
        <Image
          w="240px"
          h="60px"
          src="https://assets.calendly.com/packs/authentication/media/logo-f885ef95906ef15bb6fb.png"
          alt="Calendly Logo"
        />
      </Stack>
      <Heading mt={10} as="h4" size="md">
        Sign up with Calendly for free
      </Heading>
      <FormControl pt={5}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <Button onClick={(e) => handleSubmit(e)} mt={5} colorScheme="blue">
          Submit
        </Button>
        <Box mt={10}>OR</Box>
        <Box mt={15}>
          <Button>
            <Image
              w="50px"
              h="50px"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt=""
            />
            Sign Up with Google
          </Button>
        </Box>
        <Box mt={15}>
          <Button>
            <Image
              w="28px"
              h="28px"
              src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
              alt=""
              mr={2.5}
            />
            Sign Up with Microsoft
          </Button>
        </Box>
      </FormControl>
    </Container>
  );
}

export default Signup;
