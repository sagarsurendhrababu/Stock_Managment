import React,{useState} from 'react'
import { Flex,ButtonGroup,Button, FormControl,FormErrorMessage,Box,Input} from '@chakra-ui/react'

export default function AddStockForm({box}) {

    const formFields = {name:'',quantity:'', location:''}

    const [formValues,setFormValues] = useState(formFields)
    const [formErrors,setFormErrors] = useState({})

    let name = formValues.name.trim()
    let quantity = formValues.quantity.trim()
    let location = formValues.location.trim()

    const addStockItem = (e) => {
        e.preventDefault();
        if(formValidator()){
            console.log("Submited")
          }
    }

    const formValidator = () => {
        let isValid = true;
        const errors = {}

        if(name === ''){
          errors.name = 'Name cannot be empty'
          isValid = false
        }else if(name.length <3){
          errors.name = "Minimum 3 character required"
          isValid = false
        }

        if(quantity === ''){
          errors.quantity = 'Quantity cannot be empty'
          isValid = false          
        }else if(quantity.length <3){
          errors.quantity = "Minimum 3 character required"
          isValid = false
        }

        if(location === ''){
          errors.location = 'Location cannot be empty'
          isValid = false          
        }else if(location.length <3){
          errors.location = "Minimum 3 character required"
          isValid = false
        }        

        setFormErrors(errors)
        return isValid;
      }    

    const valueChange = (e) => {
        const{name,value} = e.target
        setFormValues({...formValues,[name]:value})
    }

  return (
    <Box mb={5} ref={box}>
        <form onSubmit={addStockItem}>
            <Flex gap={4} flexDirection={{base:'column',md:'row'}}>
            <FormControl w='100%' isInvalid={formErrors.name}>
                <Input onChange={valueChange} name='name' bg='white' type="text" placeholder='product name'></Input>
                {formErrors.name && <FormErrorMessage>{formErrors.name}</FormErrorMessage>}
            </FormControl>
            <FormControl w='100%' isInvalid={formErrors.quantity}>
                <Input onChange={valueChange} name='quantity' bg='white' type="text" placeholder='model number'></Input>
                {formErrors.quantity && <FormErrorMessage>{formErrors.quantity}</FormErrorMessage>}
            </FormControl>
            <FormControl w='100%' isInvalid={formErrors.location}>
                <Input onChange={valueChange} name='location' bg='white' type="text" placeholder='stock'></Input>
                {formErrors.location && <FormErrorMessage>{formErrors.location}</FormErrorMessage>}
            </FormControl> 
            <ButtonGroup >
                <Button type='submit' w={{base:'100%',md:'100%'}} colorScheme='blue'>Submit</Button>  
            </ButtonGroup>
            </Flex>
        </form>
    </Box>
  )
}
