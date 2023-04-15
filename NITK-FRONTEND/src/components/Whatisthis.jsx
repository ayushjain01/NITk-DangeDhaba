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
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { useState, useEffect } from "react";
import "./style.css";

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
  const texts2 = ["and learn", "the definitions", "the next level", "learning"];
  const imagePath = [
    "./src/assets/Landing/1.webp",
    "./src/assets/Landing/2.webp",
    "./src/assets/Landing/3.png",
    "./src/assets/Landing/4.png",
  ];
  const loopingText1 = useLoopingText(texts1, 5000);
  const loopingText2 = useLoopingText(texts2, 5000);
  const imageSlide = useLoopingText(imagePath, 5000);
  return (
    <Box bg="#262627" height="100vh" py="10" color="white">
      <Flex alignItems="center">
        <Spacer />
        <Heading
          float="left"
          className="typeWriter"
          as="h1"
          fontSize="5xl"
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
          width="600px"
          px="14"
          src={imageSlide}
        />
      </Flex>
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
  );
};

export default Whatisthis;
