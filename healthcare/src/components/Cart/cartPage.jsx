import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, addToCart, deleteCartItem } from '../../redux/cartAction';
import './cartPage.css'

const CartPage = ({ clearCart, removeFromCart }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems); // Make sure you use the correct selector
  
    useEffect(() => {
      // Dispatch the action when the component mounts to fetch cart items
      dispatch(getCartItems());
    }, [dispatch]);
      
    

    
  return (
    <div className="container cartpage">
      <h2 className="text-center carttitle">Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.medItems.imageUrl} alt={item.name} className="product-image" />
              </td>
              <td>{item.medItems.itemName}</td>
              <td>{item.quantity}</td>
              <td>${item.medItems.price}</td>
              <td>${item.quantity * item.medItems.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <p>Total Cost: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        <button className="btn btn-danger" onClick={clearCart}>
          Clear Cart
        </button>
        <button className="btn btn-primary">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CartPage;
