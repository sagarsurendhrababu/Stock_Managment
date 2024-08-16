import { useSignup } from "../useHooks/User/useSignup";
import {Link} from 'react-router-dom';
import {Box,FormControl,FormLabel,FormErrorMessage,Input,Heading,VStack,Button,ButtonGroup} from '@chakra-ui/react'


export default function SignUp() {
  const {changeValue,formSubmit,formErrors} = useSignup()

  return (
    <Box w={{ base: '90%', md: '30%' }} bg="white" borderRadius='15px' py='8' px='4'>
      <Heading mb='15px' fontSize='20px'>Signup</Heading>
      <form onSubmit={formSubmit}>
        <VStack spacing={4} align='start'>
          
          <FormControl isInvalid={formErrors.email}>
                <FormLabel>Email ID</FormLabel>
                <Input type='text' name='email' onChange={changeValue} placeholder='email id'></Input>
                {formErrors.email && <FormErrorMessage>{formErrors.email}</FormErrorMessage>}
            </FormControl>

            <FormControl isInvalid={formErrors.password}>
                <FormLabel>Password</FormLabel>
                <Input type='password' name='password' onChange={changeValue} placeholder='password'></Input>
                {formErrors.password && <FormErrorMessage>{formErrors.password}</FormErrorMessage>}
            </FormControl> 

            <FormControl isInvalid={formErrors.configPassword}>
                <FormLabel>Confirm Password</FormLabel>
                <Input type='password' name='configPassword' onChange={changeValue} placeholder='confirm password'></Input>
                {formErrors.configPassword && <FormErrorMessage>{formErrors.configPassword}</FormErrorMessage>}
            </FormControl> 

            <ButtonGroup mt='15px'>
              <Button type='submit' colorScheme='blue'>Create</Button>
              <Button colorScheme='gray' as={Link} to='/'>Cancel</Button>             
            </ButtonGroup> 

        </VStack>
      </form>
    </Box>
  )
}
