import React from 'react';
import {Flex,Box,Text,Image, Stack, HStack, VStack, Heading} from '@chakra-ui/react'

const SubjectsBox = () => {
    return ( 
        <Flex direction="column" width="100%" padding={{base:'5px',md:"120px"}}>
            <Stack direction="column" spacing={{base:"10px",md:"30px"}}>
                <Flex direction={{base:"column",md:"row"}}>                
                <HStack maxW={{base:"100%",md:"50%"}} spacing="0" paddingX={{base:"10px",md:"none"}} paddingY={{base:"5px"}}>
                <Image  bg = "#ff91bd" className = "shadowBox-1" w = "30%"src={
              './src/assets/Landing/Sub1.webp'
            }
            borderRadius="15px">
                </Image>
                <Text margin="0" padding="15px" border="1px" display="flex" flexWrap="wrap">
                 Biology: The study of living organisms and their interactions with the environment.
                </Text>
                </HStack>
               <HStack maxW={{base:"100%",md:"50%"}} spacing="0" paddingX={{base:"10px",md:"none"}} paddingY={{base:"5px"}}>
                <Image  src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            borderRadius="15px">
                </Image>
                <Text margin="0" padding="15px" border="1px" display="flex" flexWrap="wrap">
                Physics: The study of matter, energy, and their interactions in the universe.
                </Text>
                </HStack>
                </Flex>
                <Flex direction={{base:"column",md:"row"}}>
                <HStack maxW={{base:"100%",md:"50%"}} spacing="0" paddingX={{base:"10px",md:"none"}} paddingY={{base:"5px"}}>
                <Image  src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            borderRadius="15px">
                </Image>
                <Text margin="0" padding="15px" border="1px" display="flex" flexWrap="wrap">
                 Chemistry: The study of the composition, structure, properties, and reactions of matter.
                </Text>
                </HStack>
                <HStack maxW={{base:"100%",md:"50%"}} spacing="0" paddingX={{base:"10px",md:"none"}} paddingY={{base:"5px"}}>
                <Image  src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            borderRadius="15px">
                </Image>
                <Text margin="0" padding="15px" border="1px" >
                    History: The study of past events and their impact on societies and individuals.
                </Text>
                </HStack>
                </Flex>
            </Stack>
            
        </Flex>
     );
}
 
export default SubjectsBox;
