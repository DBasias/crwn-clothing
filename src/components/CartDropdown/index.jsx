import React from 'react';

import CustomButtom from '../CustomButton';

import './styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
);

export default CartDropdown;
