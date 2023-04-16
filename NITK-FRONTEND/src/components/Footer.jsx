import {
  Box,
  chakra,
  Container,
  Center,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import logo from "../assets/logo.png";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("#262627", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      id="Footer"
      bg={useColorModeValue("#262627", "gray.900")}
      color={useColorModeValue("white", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Image src={logo} boxSize="100px" objectFit="contain" />
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <hr></hr>
        < br/>
        <Center>
          <Text textAlign="center">© 2023 - Team Dange Dhaba. All rights reserved</Text>
        </Center>
        <br />
      </Box>
    </Box>
  );
}
