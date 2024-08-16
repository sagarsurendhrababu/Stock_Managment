import React from 'react'
import { Outlet} from 'react-router-dom';
import {Flex} from '@chakra-ui/react'

export default function LoginLayout() {
  return (
        <Flex h='100vh' maxW='container.2xl' bg='darkblue' justifyContent='center' alignItems='center'>
            <Outlet/>
        </Flex>
  )
}
