import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().required('Please enter your name').min(2, 'That\'s just your inicials.'),
  phone: yup.string().required('Please enter a phone number.').matches(/^[0-9]{10}$/, 'Please enter a valid phone number.')
})

const defaultFormState = {
  name: '',
  phone: '',
  toppings: {
      sausage: false,
      ham: false,
      mushrooms: false,
      olives: false,
      cheese: false,
      onion: false,
      jalapeno: false,
      bacon: false
  },
  instructions: ''
}

const defaultErrorState = {
  name: '',
  phone: ''
}

const PizzaForm = (props) => {
    const [formState, setFormState] = useState(defaultFormState);
    const [errors, setErrors] = useState(defaultErrorState);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        schema.isValid(formState).then(valid => setIsDisabled(!valid));
    }, [formState, schema])

    const validate = e => {
        e.persist();
        yup.reach(schema, e.target.name).validate(e.target.value)
        .then(valid => setErrors({...errors, [e.target.name]: ''}))
        .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}));
    }
  return (
    <FormContainer>
      <form>
      <label>
        <input/>
      </label>
      <label>
        <input/>
      </label>
      <label>
        <input/>
      </label>
      <label>
        <input/>
      </label>
      </form>
    </FormContainer>
    
  );
};
export default PizzaForm;
