import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { BiChevronRight } from "react-icons/bi";
import { useState, useEffect } from "react";


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

const Whatisthis = ({...rest}) => {
    const [showVideo, setShowVideo] = useState(false);

    const texts1 = ["Million Fans, 22 players, 1 ball ", "Countless emotions, Infinite ", "Football - The Beautiful "];
    const texts2 =["90 Minutes","Possibilities","Game"];
    const loopingText1 = useLoopingText(texts1, 5000);
    const loopingText2 = useLoopingText(texts2, 5000);
    return ( 
        <Box bg="#262627" height="100vh" py='10'>
            <VStack color="white" textAlign='center' spacing='10' py='28'>
                <Heading 
                    as='h1'
                    fontSize='6xl' 
                    maxW={{base:'lg',md:'xl',lg:'4xl'}}>
                    {loopingText1}<br/>
                    <span style={{ background: 'linear-gradient(135deg,#0b6ec5,#5e49af,#f35815,#fed54a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                        {loopingText2}
                    </span> 
                </Heading>
                {/* </Box> */}
                <Text color="whiteAlpha.600" fontSize='3xl' >
                    It is Home
                </Text>
                <HStack spacing='6'>
                    <Button rightIcon={<BiChevronRight/>} colorScheme='purple'>Get Started</Button>
                    <Button variant='outline' borderColor='purple' _hover={{
                        backgroundColor:"White"
                        ,textColor:"black"
                    }}>Sign in</Button>
                </HStack>
            </VStack>
        </Box>

     );
}
 
export default Whatisthis;
