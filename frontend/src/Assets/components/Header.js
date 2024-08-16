import React from 'react';

//chakra UI
import {Flex,Avatar,Button,Text,HStack,Spacer} from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex alignItems='center' h='100%' p='15px'>        
        <Spacer/>
        <HStack as='nav' spacing="15px">
            <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' border='1px solid #fff' />
            <Text fontWeight='500'>sagarts@live.com</Text>
            <Button colorScheme='red' size='sm'>Logout</Button>
        </HStack>
    </Flex>
  )
}
