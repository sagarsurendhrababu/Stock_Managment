import React,{memo} from 'react'
import { SearchIcon} from '@chakra-ui/icons'

import {Button, Flex, InputGroup,InputLeftElement,Input} from '@chakra-ui/react'

export default memo(function StockSearchBar({showFormBox}) {
  return (
    <Flex mb='15px' gap='15px'>
        <InputGroup  bg='white' borderRadius='10px' size='sm'> 
            <InputLeftElement pointerEvents='none'     
            height='100%' 
            display='flex' 
            alignItems='center'>
                <SearchIcon color='gray.500' />
            </InputLeftElement>
            <Input type='tel' borderRadius='10px' placeholder='Search Items' size='sm' />
        </InputGroup>
        <Button size='sm' colorScheme='blue' onClick={showFormBox}>Add New</Button>
    </Flex>
  )
})
