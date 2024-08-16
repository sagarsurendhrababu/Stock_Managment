
import React, { useState } from 'react'
import { FormControl,FormLabel,Input,ButtonGroup,Button,Box, FormErrorMessage } from '@chakra-ui/react'

export default function Test() {

    const formField = {name:'',place:''}

    const[formValue,setFormValue] = useState(formField)
    const[formError,setFormError] = useState({})

    const formSubmit = (e) => {
        e.preventDefault()
        if(validateForm()){
            console.log(formValue)
        }          
    }

    const validateForm = () => {
        let isValid = true;
        const errors = {};
    
        // Trim and validate name
        const name = formValue.name.trim();
        if (name === '') {
            errors.name = 'Name cannot be empty';
            isValid = false;
        } else if (name.length < 6) {
            errors.name = 'Name must be at least 6 characters long';
            isValid = false;
        }
    
        // Trim and validate place
        const place = formValue.place.trim();
        if (place === '') {
            errors.place = 'Place cannot be empty';
            isValid = false;
        } else if (place.length < 7) {
            errors.place = 'Place must be at least 7 characters long';
            isValid = false;
        }    
        setFormError(errors)
        return isValid;
    };

    console.log('state Errors:', formError);

    const valueChange = (e) => {
        const {name,value} = e.target;
        setFormValue({...formValue, [name] : value}) 
    }

  return (
    <div>
        <Box bg='gray.400' p={5}>
            <form onSubmit={formSubmit}>
                <FormControl isInvalid={formError.name}>
                    <FormLabel color='white'>Name</FormLabel>
                    <Input onChange={valueChange} name='name' bg='white' placeContent='Name'></Input>
                    {formError.name && <FormErrorMessage>{formError.name}</FormErrorMessage>}
                </FormControl>
                <FormControl isInvalid={formError.place}>
                    <FormLabel  color='white'>Place</FormLabel>
                    <Input onChange={valueChange} bg='white' name='place'></Input>
                    {formError.place && <FormErrorMessage>{formError.place}</FormErrorMessage>}
                </FormControl>
                <ButtonGroup mt="15px">
                    <Button colorScheme='purple' type='submit'>Submit</Button>
                </ButtonGroup>
            </form>
        </Box>
    </div>
  )
}
