import React from 'react';

const Cart = ({cart}) => {
   
    return (
        <div>
            <h1>This order Summery</h1>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;