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

    const handleChange = e => {
      if (e.target.type === 'checkbox') {
          setFormState({
              ...formState,
              condiments: {
                  ...formState.condiments,
                  [e.target.value]: e.target.checked
              }
          })
      } else {
          setFormState({
              ...formState,
              [e.target.name]: e.target.value
          })
      }
      if (e.target.name === 'name' || e.target.name === 'phone') {
          validate(e);
      }
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formState);
    axios.post("https://reqres.in/api/users", formState)
    .then(res => props.addOrder(res.data))
    .catch(err => console.log(err));
}


  return (
   
      <form onSubmit={handleSubmit}>
          <label>Name
                    <input type='text' name='name' onChange={handleChange} data-cy='name' value={formState.name} />
                    {errors.name.length > 0 && <p style={{color:'red'}}>{errors.name}</p>}
          </label>
          <label>Phone Number
                    <input type='tel' name='phone' onChange={handleChange} data-cy='phone' value={formState.phone} />
                    {errors.phone.length > 0 && <p style={{color:'red'}}>{errors.phone}</p>}
          </label>
          <label>Select Pizza Size
                <select name='size' data-cy='size' defaultValue='Medium' onChange={handleChange}>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='Extra Large'>Extra Large</option>
                    <option value='Personal'>Personal</option>
                </select>
            </label>
      {/* <fieldset>
          <label>
              <input checked type='size' name='size' onChange={handleChange} data-cy='small' value='small' />
              Small Pizza
          </label>
          <label>
              <input type='size' name='size' onChange={handleChange} data-cy='medium' value='medium' />
              Medium Pizza
          </label>
          <label>
              <input type='size' name='size' onChange={handleChange} data-cy='large' value='large' />
              Large Pizza
          </label>
          <label>
              <input type='size' name='size' onChange={handleChange} data-cy='ex-large' value='ex-large' />
              Extra Large Pizza
          </label>
      </fieldset> */}
      <fieldset>
          <label>
              <input type='checkbox' name='toppings' onChange={handleChange} data-cy='sausage' value='sausage' />
              Sausage
          </label>
          <label>
              <input type='checkbox' name='toppings' onChange={handleChange} data-cy='ham' value='ham' />
              Ham
          </label>
          <label>
              <input type='checkbox' name='toppings' onChange={handleChange} data-cy='mushrooms' value='mushrooms' />
              Mushrooms
          </label>
          <label>
              <input type='checkbox' name='toppings' onChange={handleChange} data-cy='olives' value='olives' />
              Olives
          </label>
          <label>
              <input type='checkbox' name='toppings' onChange={handleChange} data-cy='cheese' value='cheese' />
              Cheese
          </label>
          <label>
              <input type='checkbox' name='toppings' onChange={handleChange} data-cy='onion' value='onion' />
              Onion
          </label>
          <label>
              <input type='checkbox' name='toppings' onChange={handleChange} data-cy='jalapeno' value='jalapeno' />
              Jalapeno
          </label>
          <label>
              <input type='checkbox' name='toppings' onChange={handleChange} data-cy='bacon' value='bacon' />
              Bacon
          </label>
      </fieldset>
          <label>
                <textarea name='instructions' data-cy='instructions' onChange={handleChange} value={formState.instructions} />
          </label>
            <button data-cy="submit-button" disabled={isDisabled} type='submit'>Order Your Pizza</button>
      </form>
    
    
  );
};
export default PizzaForm;
