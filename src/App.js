import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components'; 
import HomePage from "./HomePage";

const App = () => {
  return (
    <AppContainer>
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
    <div>
      <Pizza />
      <HomePage orders={orders} />
    </div>
    </AppContainer>
  );
};

const AppContainer = styled.div`

`
export default App;
