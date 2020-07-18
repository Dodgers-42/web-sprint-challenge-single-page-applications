import React from 'react';
// import styled from 'styled-components';
// import Pizza from '../Wireframes/Pizza.jpg';
import { Link } from '.react-router-dom';
import OrderCard from './OrderCard';


const HomePage = (props) => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <p>Make It the Way You Want It!</p>
      <Link to='/'>Build Your Pizza</Link>
        {props.orders.map((order, i) => <OrderCard key={i} order={order} />)}
    </div>
  );
};
export default HomePage;
