import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().required('Please enter your name').min(2, 'That\'s just your inicials.'),
  // phone: yup.string().required('Please enter a phone number.').matches(/^[0-9]{10}$/, 'Please enter a valid phone number.')
})

const PizzaForm = (props) => {
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
