import { useState } from 'react'

export  function useSignup() {
    const formFields = {email:'',password:'', configPassword:''}

    const [formValues,setFormValues] = useState(formFields)
    const [formErrors,setFormErrors] = useState({})
  
    //SubmitForm Function
    const formSubmit = (e) => {
      e.preventDefault();    
      if(formValidator()){
        console.log("Submited")
      }
    }
    //Validator Function
    const formValidator = () => {
      let isValid = true;
      const errors = {}
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  
      let email = formValues.email.trim()
      let password = formValues.password.trim()
      let configPassword = formValues.configPassword.trim()
  
      //email field validator
      if( email === ''){
         errors.email = "Name cannot be empty"
         isValid = false;
      }else if(!emailRegex.test(email)){
        errors.email = "Invalid Email ID"
        isValid = false
      }
      //password field validator
      if(password === ''){
        errors.password = "Pasword can't be empty"
        isValid = false
      }else if(!passwordRegex.test(password)){
        if (password.length < 6) {
          errors.password = "Minimum of 6 characters."
        }
        if (!/[A-Z]/.test(password)) {
          errors.password = "Must include at least one capital letter."
        }
        if (!/\d/.test(password)) {
          errors.password = "Must include at least one number."
        }
        if (/[_-]/.test(password)) {
         errors.password = "No symbols like _ or - are allowed."
        }
        isValid = false
      }
      //confirm password validator
      if(configPassword === ''){
        errors.configPassword = "conform password must be filled"
      isValid = false
      }else if(configPassword !== password){
        errors.configPassword = "password are not matching"
        isValid = false
      }
      setFormErrors(errors)
      return isValid;
    }
  
   //Change Value Function
    const changeValue = (e) => {
      const{name,value} = e.target
      setFormValues({...formValues,[name]:value})
    }

    return {changeValue,formSubmit,formErrors}
}
