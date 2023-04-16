import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Card,
  CardBody,
  CardFooter,
  Image,
  Spacer,
} from "@chakra-ui/react";
import "./style.css";
import whyAr from "../assets/Landing/whyAr.webp";
import { ReactElement } from "react";

import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

const Problems = () => {
  return (
    <>
      <Box id="learn" p={4}>
        <center>
          {" "}
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Problems With Conventional Education
          </Heading>
          <Spacer h={35} />
          <Text
            fontSize={{ base: "sm", sm: "lg" }}
            color={"gray.800"}
            fontWeight={"bold"}
          >
            More than half of secondary schools in India do not have science labs.
          </Text>
        </center>

        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          margin="auto"
          textAlign={"center"}
          direction={["column", "row"]}
        >
          <Text
            fontSize={{ base: "sm", sm: "lg" }}
            color={"gray.600"}
          >
            Traditional education can be boring and engaging for many
            students. Many schools and classrooms do not have access to the
            latest textbooks, tools, or equipment thus, several students
            struggle with visualizing abstract concepts, such as complex
            mathematical equations or scientific principles. These issues can
            lead to disengagement and difficulty in learning for many students.
            Furthermore, schools in remote areas are not well setup with labs
            and other facilities.
          </Text>
        </Stack>
      </Box>
      <Spacer h={45} />
      <Box id="learn" p={4}>
        <center>
          {" "}
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Why Us?
          </Heading>
        </center>
        <Spacer h={35} />

        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          margin="auto"
          textAlign={"center"}
          alignContent={"space-around"}
          direction={["column", "column", "row"]}
        >
          <Image
            mx={"auto"}
            mt={5}
            borderRadius={10}
            src={whyAr}
            h={[40, 40, 60]}
            w={[60, 60, 80]}
          />

          <Text
            fontSize={{ base: "sm", sm: "lg" }}
            color={"gray.600"}
          >
            <b>We provide AR solutions for the web! NO APP Required!</b>{" "}
            Augmented reality education can address the challenges of
            traditional education by providing interactive and immersive
            learning experiences. AR can enhance engagement by making learning
            more fun and interesting. It can provide virtual simulations to
            overcome resource limitations and visualize abstract concepts
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export default Problems;
