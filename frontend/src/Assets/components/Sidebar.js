import React from 'react'
import { Link} from 'react-router-dom';
import {Menu,MenuButton,VStack,Text,Spacer, Box, Heading} from '@chakra-ui/react'

export default function Sidebar() {
  return (
    <VStack align="start" spacing={2} p='15px'>
        <Box><Heading as='h4' color='white'>M</Heading></Box>
        <Spacer/>
        <Menu> <MenuButton as={Link} to="/home" _hover={{ bg: "gray.700" } }>
        <Text color='white' fontSize='sm'>Home</Text></MenuButton></Menu>   
        <Menu> <MenuButton as={Link} to="/" >
        <Text color='white' fontSize='sm'>Login</Text></MenuButton></Menu>   
        <Menu> <MenuButton as={Link} to="/list">
        <Text color='white' fontSize='sm'>Stock</Text></MenuButton></Menu>   
        <Menu> <MenuButton as={Link} to="/test">Open menu</MenuButton></Menu>           
    </VStack>
  )
}
