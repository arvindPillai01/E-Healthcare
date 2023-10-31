import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './card.css'; // Import the CSS file for styling
import fetchMedItems from '../../redux/taskAction';
import { addToCart } from '../../redux/cartAction';

const Card = () => {
  const dispatch = useDispatch();
  const medItems = useSelector(state => state.task.medItems);

  const [newItem, setNewItem] = useState({
    userId: 1,
    itemId:null,
    quantity: 1,
    medItems: {
      itemId: 0,
      categoryId: 0,
      itemName: "string",
      price: 0,
      imageUrl: "string",
      seller: "string",
      description: "string",
      medCategory: {
        categoryId: 0,
        categoryName: "string"
      }
    }
  });

  useEffect(() => {
    dispatch(fetchMedItems());
  }, [dispatch]);


  const handleAddCart = (item) => {
    if (item.itemId === null) {
      alert('Please select an item to add to the cart.');
      return;
    }

    setNewItem({ ...newItem, itemId: item.itemId });
    console.log(newItem);
    dispatch(addToCart(newItem)); // Dispatch the addToCart action
    console.log('Item dispatched to the cart.');
  };

  if (!medItems) {
    return <div>Loading...</div>;
  }
  
  return (
    
    <div className="card-container">
       {console.log('medItems:', medItems)}
      {medItems.map((item) => (
        
        <div key={item.itemId} className={`card ${item.Name}`}>
          <div className={`$cardImage {item.ItemId}`}>
            <img src={`${item.imageUrl}`} alt={`${item.Name}`} style={{ width: '150px', display: 'block', margin: '0 auto' }}></img>
          </div>
          <div className="card-title">
            <h3>{item.itemName}</h3>
          </div>
          <div className="card-description">
            <h6>{item.description}</h6>
          </div>
          <p className="card-text">{item.Price}</p>
          <div className="form-group d-flex align-items-center">
            <button
              className="btn btn-primary add-to-cart-button ml-auto"
              onClick={() => handleAddCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;