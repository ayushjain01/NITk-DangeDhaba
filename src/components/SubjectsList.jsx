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
  Spacer
} from "@chakra-ui/react";
import "./style.css";
import sub1 from '../assets/Landing/Sub1.webp';
import sub2 from '../assets/Landing/Sub2.webp';
import sub3 from '../assets/Landing/Sub3.webp';
import sub4 from '../assets/Landing/Sub4.webp';

import { ReactElement } from "react";

import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

const Subjects = () => {
  return (
    <>
      <Box id = "Learn" p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} margin = "auto" textAlign={"center"}>
          <br>
          </br><Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Start your ARez experience today!
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Get ready to experience education like never before with ARez! Our augmented reality app lets you explore and interact with 3D models of real-world objects, bringing your learning to life.
          </Text>
        </Stack>
        <Container maxW={{base: "5xl", md : "8xl"}} mt={12}>
          <Flex
            direction={{ base: "column", md: "row" }}
            flexWrap="wrap"
            gridGap={6}
            justify="center"
          >
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              maxW={{ base: "90%", md: "40%" }}
            >
              <Image
              bg = "#ff91bd" className = "shadowBox-1" w = "40%"src={
                sub1
              }
              borderRadius="15px"
                objectFit="contain"
                maxW={{ base: "100%", sm: "200px" }}
              />

              <Stack>
                <CardBody>
                  <Heading size="md">Physics</Heading>

                  <Text py="2">
                  The study of matter, energy, and their interactions in the universe.
                  </Text>
                </CardBody>

                <CardFooter>
                  <Link href = "https://phy-nu.vercel.app/" >
                  <Button color = "white" variant="solid" bg = "#2EC4B6" >
                    Learn Physics
                  </Button></Link>
                </CardFooter>
              </Stack>
            </Card>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              maxW={{ base: "90%", md: "40%" }}
            >
              <Image
              bg = "#c280f2" className = "shadowBox-2" w = "40%"src={
                sub2
              }
              borderRadius="15px"
                objectFit="contain"
                maxW={{ base: "100%", sm: "200px" }}
              />

              <Stack>
                <CardBody>
                  <Heading size="md">Biology</Heading>

                  <Text py="2">
                  The study of living organisms and their interactions with the environment.
                  </Text>
                </CardBody>

                <CardFooter>
                  <Link href = "https://biology-dhruvdange.vercel.app/" >
                  <Button color = "white" variant="solid" bg = "#2EC4B6" >
                    Learn Biology
                  </Button></Link>
                </CardFooter>
              </Stack>
            </Card>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              maxW={{ base: "90%", md: "40%" }}
            >
              <Image
              bg = "#fcd658" className = "shadowBox-3" w = "40%"src={
                sub3
              }
              borderRadius="15px"
                objectFit="contain"
                maxW={{ base: "100%", sm: "200px" }}
              />

              <Stack>
                <CardBody>
                  <Heading size="md">Chemistry</Heading>

                  <Text py="2">
                  The study of the composition, structure, properties, and reactions of matter.
                  </Text>
                </CardBody>

                <CardFooter>
                  <Link href = "https://chemistry-dhruvdange.vercel.app/" >
                  <Button color = "white" variant="solid" bg = "#2EC4B6" >
                    Learn Chemistry
                  </Button></Link>
                </CardFooter>
              </Stack>
            </Card>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              maxW={{ base: "90%", md: "40%" }}
            >
              <Image
              bg = "#5be9fc" className = "shadowBox-4" w = "40%"src={
                sub4
              }
              borderRadius="15px"
                objectFit="contain"
                maxW={{ base: "100%", sm: "200px" }}
              />

              <Stack>
                <CardBody>
                  <Heading size="md">History</Heading>

                  <Text py="2">
                  The study of past events and their impact on societies and individuals.
                  </Text>
                </CardBody>

                <CardFooter>
                  <Link href = "https://history-dhruvdange.vercel.app/" >
                  <Button color = "white" variant="solid" bg = "#2EC4B6" >
                    Learn History
                  </Button></Link>
                </CardFooter>
              </Stack>
            </Card>
          </Flex>
        </Container>
      </Box>
      <Spacer h={45}/>
    </>
  );
};

export default Subjects;
