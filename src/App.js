import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components'; 
import HomePage from "./HomePage";
import PizzaForm from "./PizzaForm";
import NavBar from './/NavBar';
import OrderCard from './OrderCard';

const App = () => {

  const [orders, setOrders] = useState([]);

  const addOrder = order => {
    setOrders([...orders, order]);
  }

  return (
    
    <AppContainer>
      <NavBar />
      <Switch>
        <Route path='/'>
          <PizzaForm addOrder={addOrder} />
        </Route>
        <Route exact path='/'>
          <HomePage orders={orders} />
        </Route>
      </Switch>
  </AppContainer>
  );
};

const AppContainer = styled.div`

`
export default App;
