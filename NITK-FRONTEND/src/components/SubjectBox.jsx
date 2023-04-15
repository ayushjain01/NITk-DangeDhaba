import React from 'react';
import {Flex,Box,Text,Image, Stack, HStack,Container} from '@chakra-ui/react'

const SubjectsBox = () => {
    return ( 
        <Flex direction="column" width="100%" padding={{base:'5px',md:"120px"}}>
            <Stack direction={{base:'column',md:'row'}} spacing={{base:"10px",md:"30px"}}>
                <Box maxW={"100%"}>    
                <HStack maxW={{base:"100%",md:"50%"}} spacing="0" paddingX={{base:"10px",md:"none"}}>
                <Image  src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            borderRadius="15px">
                </Image>
                <Text margin="0" padding="15px" border="1px" display="flex" flexWrap="wrap">
                 History. History is now with Future.Tap to read more.
                </Text>
                </HStack>
                <HStack maxW={{base:"100%",md:"50%"}} spacing="0">
                <Image  src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            borderRadius="15px">
                </Image>
                <Text margin="0" padding="15px" border="1px" >
                 The perfect latte
Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
                </Text>
                </HStack>
                </Box>
                <Box maxW="100%">          
                <HStack maxW={{base:"100%",md:"50%"}} spacing="0" paddingX={{base:"10px",md:"none"}}>
                <Image  src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            borderRadius="15px">
                </Image>
                <Text margin="0" padding="15px" border="1px" display="flex" flexWrap="wrap" >
                 History. History is now with Future.Tap to read more.
                </Text>
                </HStack>
                <HStack maxW={{base:"100%",md:"50%"}} spacing="0">
                <Image  src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            borderRadius="15px">
                </Image>
                <Text margin="0" padding="15px" border="1px" >
                 The perfect latte
Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
                </Text>
                </HStack>
                </Box>
            </Stack>
            
        </Flex>
     );
}
 
export default SubjectsBox;