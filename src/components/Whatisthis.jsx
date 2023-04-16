import {
  Box,
  Button,
  Heading,
  Link,
  Text,
  VStack,
  Image,
  Flex,
  Spacer,
  Center,
  Show,
  Hide,
  HStack
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { useState, useEffect } from "react";
import "./style.css";
import img1 from "../assets/Landing/1.webp";
import img2 from "../assets/Landing/2.webp";
import img3 from "../assets/Landing/3.png";
import img4 from "../assets/Landing/4.png";

function useLoopingText(texts, interval) {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((textIndex) => (textIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return texts[textIndex];
}

const Whatisthis = ({ ...rest }) => {
  const [showVideo, setShowVideo] = useState(false);

  const texts1 = [
    "Engage, interact,",
    "Learn beyond",
    "Progress to",
    "Augmented",
  ];
  const texts2 = ["and learn", "definitions", "the next level", "learning"];
  const imagePath = [
    img1,
    img2,
    img3,
    img4,
  ];
  const loopingText1 = useLoopingText(texts1, 5000);
  const loopingText2 = useLoopingText(texts2, 5000);
  const imageSlide = useLoopingText(imagePath, 5000);
  return (
    <Box bg="#262627" height="100vh" py="10" color="white" id="Home" >
      <Flex direction={{base:"column",md:"row"}} alignItems="center" flexWrap="wrap">
        <Spacer />
        <Hide breakpoint='(max-width: 786px)'>
        <Heading
          float="left"
          className="typeWriter"
          as="h1"
          fontSize={"5xl"}
          maxW={{ base: "lg", md: "xl", lg: "4xl" }}
        >
          {loopingText1}
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #fb5607,#ffbe0b,#ff006e, #3a86ff,#2EC4B6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {loopingText2}
          </span>
        </Heading>
        <Image
          className="imageAnimate"
          position="relative"
          float="right"
          width={["400px","500px"]}
          marginTop="100px"
          px="14"
          src={imageSlide}
        />
        </Hide>
        <Show breakpoint='(max-width: 780px)'>
          <VStack>
          <Heading
          as="h1"
          display={"block"}
          padding={4}
          fontSize={"5xl"}
          maxW={{ base: "lg", md: "xl", lg: "4xl" }}
        >
          {loopingText1}
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #fb5607,#ffbe0b,#ff006e, #3a86ff,#2EC4B6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {loopingText2}
          </span>
        </Heading>
        <Image
        position={'relativeDescendant'}
        top={'40vh'}
          className="imageAnimate"
          display={"block"}
          width={["500px","600px"]}
          px="14"
          src={imageSlide}
        />
          </VStack>
        
        </Show>
      <Box marginTop="10" w={'100vw'}>
      <Center>
        <Link href = "#"> <Button rightIcon={<BiChevronRight />} bg="#2EC4B6"> 
          Start Learning
        </Button></Link>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link href = "https://github.com/ayushjain01/NITK-Frontend"isExternal>
        <Button
          variant="outline"
          borderColor="#2EC4B6"
          _hover={{
            backgroundColor: "White",
            textColor: "black",
          }}
        >
          View Code
        </Button>
        </Link>
      </Center>
      </Box>
      </Flex>
      
    </Box>
  );
};

export default Whatisthis;
