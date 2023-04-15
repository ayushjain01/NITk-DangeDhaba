import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import Apples from "../assets/Apples.jpeg";
import AmanClement from "../assets/AmanClement.jpeg";
import DhruvDange from "../assets/DhruvDange.jpeg";


function Dhabawale() {
  return (
       <Box sx={{
      textAlign: "center",
      fontSize: "64px",
      color: "#10996d",
      margin: "0 0 70px",
    }}>
      <Box display="flex" justifyContent="center">
      <Heading textAlign="center"
          as='h1'
          fontSize={{base:'2xl',md:'6xl'}} 
          maxW={{base:'sm',md:'xl',lg:'4xl'}}
          paddingBottom={6}>
          Meet The Team<br/> 
      </Heading>
      </Box>
    <Box display="flex" justifyContent="center" className="collection" maxW={{base:'sm',md:'xl',lg:'xl'}} margin="0 auto" width="90%">
        <Box className="profile" position="relative" sx={{transition:"all 0.3s"}} display="flex">
            <Tooltip label='Apples' bg='purple.600' placement="bottom" arrowPadding={25} gutter={20}>
            <Image boxSize={{base:"100px",md:"150px"}} borderRadius="50%" border="5px solid #f7f7f7" sx={{filter:"drop-shadow(-20px 0 10px rgba(0,0,0,0.1))"}}  _hover={{transform:"translateY(25px)"}} cursor="pointer" src={Apples} alt="Your"/>
            </Tooltip>
            <Tooltip label='Aman Clement' bg='purple.600' placement="bottom" arrowPadding={25} gutter={20}>
            <Image boxSize={{base:"100px",md:"150px"}} borderRadius="50%" border="5px solid #f7f7f7" ml="-20px" sx={{filter:"drop-shadow(20px 20px 20px rgba(0,0,0,0.1))"}}  _hover={{transform:"translateY(25px)"}} cursor="pointer" src={AmanClement} alt="mo"/>
            </Tooltip>    
            <Tooltip label='Dhruv Dange' bg='purple.600' placement="bottom" arrowPadding={25} gutter={20}>
            <Image boxSize={{base:"100px",md:"150px"}} borderRadius="50%" border="5px solid #f7f7f7" ml="-20px" sx={{filter:"drop-shadow(20px 0 10px rgba(0,0,0,0.1))"}}  _hover={{transform:"translateY(25px)"}} cursor="pointer" src={DhruvDange} alt="m"/>
            </Tooltip>
        </Box>
    </Box>
    </Box>
  );
}

export default Dhabawale;
