import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex paddingTop={16} h={16} alignItems={"center"} justifyContent={'space-between'} flexDir={{base:"column", sm:"row"}}>
        <Text fontSize={{base: "22", sm: "36"}} fontWeight={"bold"} textAlign={"center"}>
          <Link to={"/"}>Product Store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
          <Button>
          <AiOutlinePlusCircle fontSize={20}/>
          </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MdDarkMode fontSize={20}/> : <FiSun fontSize={20}/>}
          
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar