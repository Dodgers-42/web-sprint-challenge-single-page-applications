import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components'; 
import HomePage from "./HomePage";
import PizzaForm from "./PizzaForm";

const App = () => {

  const [orders, setOrders] = useState([]);

  const addOrder = order => {
    setOrders([...orders, order]);
  }

  return (
    <AppContainer>
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
    <div>
      <PizzaForm />
      <HomePage orders={orders} />
    </div>
    </AppContainer>
  );
};

const AppContainer = styled.div`

`
export default App;
