import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, FormControl, FormErrorMessage, Text, FormLabel, Input, VStack, Heading } from '@chakra-ui/react';

export default function Login() {
  const [formValues, setFormValues] = useState({ username: '', password: '' });
  const [formErrors, setFormErrors] = useState({ username: '', password: '' });

  const formValidator = () => {
    const errors = { username: '', password: '' };
    let isValid = true;

    if (formValues.username.length < 6) {
      errors.username = 'Username is required';
      isValid = false;
    }

    if (formValues.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidator()) {
      console.log(formValues.username, formValues.password);
      // Add further form submission logic here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Box w={{ base: '90%', md: '30%' }} bg="white" borderRadius="15px" py="8" px="4">
      <Heading mb="15px" fontSize="20px">Login</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={3} align="start">
          <FormControl  isInvalid={formErrors.username}>
            <FormLabel>User Name:</FormLabel>
            <Input type="text" name="username" onChange={handleChange} />
            {formErrors.username && <FormErrorMessage>{formErrors.username}</FormErrorMessage>}
          </FormControl>

          <FormControl  isInvalid={formErrors.password}>
            <FormLabel>Password:</FormLabel>
            <Input type="password" name="password" onChange={handleChange} />
            {formErrors.password && <FormErrorMessage>{formErrors.password}</FormErrorMessage>}
          </FormControl>

          <Button type="submit" mt="15px" colorScheme="blue">Login</Button>
          <Text>Create an <Link to="/Signup">account</Link></Text>
        </VStack>
      </form>
    </Box>
  );
}
