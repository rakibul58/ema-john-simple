import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    
    let total = 0;
    let shipping = 0
    for(const product of cart){
        total += product.price;
        shipping+=product.shipping;
    }
    const tax = total * 0.1;
  return (
    <div className="cart">
      <h1>This order Summery</h1>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total: {parseFloat(total+tax+shipping)}</h5>
    </div>
  );
};

export default Cart;
