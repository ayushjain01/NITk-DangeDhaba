import { Box, Link, Image, Text, Tooltip } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import Apples from "../assets/Apples.jpeg";
import AmanClement from "../assets/AmanClement.jpeg";
import DhruvDange from "../assets/DhruvDange.jpeg";

function Dhabawale() {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontSize: "64px",
        color: "#2EC4B6",
      }}
    >
      <Box display="flex" justifyContent="center" justifyItems="center">
        <Box textAlign="center">
          <Heading
            textAlign="center"
            as="h1"
            fontSize={{ base: "2xl", md: "4xl" }}
            maxW={{ base: "sm", md: "xl", lg: "4xl" }}
            paddingtop={6}
          >
            <br></br>
            Meet The Team -
          </Heading>
          <Text
            textAlign="center"
            as="h1"
            fontSize={{ base: "2xl", md: "3xl" }}
            maxW={{ base: "sm", md: "xl", lg: "2xl" }}
            paddingtop={6}
            textDecoration="underline"
          >
            Dange Dhaba
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        className="collection"
        maxW={{ base: "sm", md: "xl", lg: "xl" }}
        margin="0 auto"
        width="75%"
      >
        <Box
          marginTop="50px"
          className="profile"
          position="relative"
          sx={{ transition: "all 0.3s" }}
          display="flex"
        >
          <Tooltip
            label="Ayush Jain"
            bg="#FF9F1C"
            placement="top"
            arrowPadding={25}
            gutter={20}
          >
            <Link href="https://www.linkedin.com/in/ayush-jain-b4540a17b">
              <Image
                boxSize={{ base: "100px", md: "150px" }}
                borderRadius="50%"
                border="5px solid #f7f7f7"
                sx={{ filter: "drop-shadow(-20px 0 10px rgba(0,0,0,0.1))" }}
                _hover={{ transform: "translateY(25px)" }}
                cursor="pointer"
                src={Apples}
                alt="Your"
              />
            </Link>
          </Tooltip>
          <Tooltip
            label="Aman Clement"
            bg="#FF9F1C"
            placement="top"
            arrowPadding={25}
            gutter={20}
          >
            <Link href="https://www.linkedin.com/in/aman-aranha-13a4a6204/">
              <Image
                boxSize={{ base: "100px", md: "150px" }}
                borderRadius="50%"
                border="5px solid #f7f7f7"
                ml="-20px"
                sx={{ filter: "drop-shadow(20px 20px 20px rgba(0,0,0,0.1))" }}
                _hover={{ transform: "translateY(25px)" }}
                cursor="pointer"
                src={AmanClement}
                alt="mo"
              />
            </Link>
          </Tooltip>
          <Tooltip
            label="Dhruv Dange"
            bg="#FF9F1C"
            placement="top"
            arrowPadding={25}
            gutter={20}
          >
            <Link
              href="https://www.linkedin.com/in/dhruv-dange/"
            >
              <Image
                boxSize={{ base: "100px", md: "150px" }}
                borderRadius="50%"
                border="5px solid #f7f7f7"
                ml="-20px"
                sx={{ filter: "drop-shadow(20px 0 10px rgba(0,0,0,0.1))" }}
                _hover={{ transform: "translateY(25px)" }}
                cursor="pointer"
                src={DhruvDange}
                alt="m"
              />
              <br />
            </Link>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}

export default Dhabawale;
