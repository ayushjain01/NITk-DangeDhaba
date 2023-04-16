import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Logo from "../assets/logo.png";

const Links = ["Home", "Learn", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    fontWeight={"bold"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("#2EC4B6"),
    }}
    href={"#" + children}
  >
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("#262627")} px={4} position="sticky" top="0px" sx = {{zIndex: "1000"}}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link href="#top">
              {" "}
              <Box>
                <Image width={"100px"} src={Logo} />
              </Box>
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              color="white"
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Link
              href="https://github.com/ayushjain01/NITK-Frontend"
              isExternal
            >
              <Button variant={"solid"} bg="but.100" size={"md"} mr={4}>
                <Image
                  boxSize="25px"
                  src="https://www.pngkey.com/png/full/178-1787366_coming-soon-github-white-icon-png.png"
                />
              </Button>
            </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} color="white" display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
