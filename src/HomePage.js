import React from 'react';
import styled from 'styled-components';
import burgerSplash from '../Wireframes/Pizza.jpg';
import { Link } from '.react-router-dom';


const HomePage = (props) => {
  return (
    <HomeContainer>
      <h1>Lambda Eats</h1>
      <p>Make It the Way You Want It!</p>
      <Link to='/buildaburger'>Build Your Burger</Link>
        {props.orders.map((order, i) => <OrderCard key={i} order={order} />)}
    </HomeContainer>
  );
};
export default HomePage;
