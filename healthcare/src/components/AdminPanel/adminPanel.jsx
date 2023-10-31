import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, addCategory, deleteCategory, getItems, addItem, deleteItem } from '../../redux/adminAction';
import './adminstyle.css';

const AdminPanel = () => {
  const categories = useSelector(state => state.admin.categories);
  const items = useSelector(state => state.admin.items);
  const dispatch = useDispatch();

  const [newCategory, setNewCategory] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [newItem, setNewItem] = useState({
    itemName: '',
    categoryId: '',
    description: '',
    imageUrl: '',
    price: '',
    seller: '',
    medCategory: {
      categoryId: 0, // Set the categoryId to 0 or the appropriate value
      categoryName: "string", // Set the categoryName to the appropriate value
    },
  });

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getItems());
  }, [dispatch]);


console.log('Categories:', categories); // Log categories if they exist
console.log('Items:', items); // Log items if they exist


//category add
  const handleAddCategory = () => {
    dispatch(addCategory({ categoryName: newCategory }));
    setNewCategory('');
    console.log("new categorn adding",newCategory);
  };

//category delete

const handleDeleteCategory = (categoryId) => {
  dispatch(deleteCategory(categoryId))
    .then(() => {
      console.log("deleting category",categoryId)
      dispatch(getCategories());
    })
    .catch((error) => {
      // Handle any errors that occur during deletion or fetching.
      console.error("Error deleting category", error);
    });
};


//items add

  const handleAddItem = () => {
    dispatch(addItem(newItem));
    console.log(newItem);
    // Reset the newItem fields
    setNewItem({
      itemName: '',
      categoryId: '',
      description: '',
      imageUrl: '',
      price: '',
      seller: '',
    });
  };


//deletem item
  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId))
    .then(() => {
      console.log("deleting item",itemId)
      dispatch(getItems());
    })
    .catch((error) => {
      // Handle any errors that occur during deletion or fetching.
      console.error("Error deleting item", error);
    });
};

  return (
    <div className='adminbox'>
      <button className='manage' onClick={() => setShowCategories(!showCategories)}>
        Manage Categories
      </button>

      {showCategories && (
        <div>
          {/* <h2>Categories</h2> */}
          {categories && categories.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Category Id</th>
                  <th>Category Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {categories.map((category) => (
                <tr key={category.categoryId}>
                  <td>{category.categoryId}</td>
                  <td>{category.categoryName}</td>
                  <td><button onClick={() => handleDeleteCategory(category.categoryId)}>Delete</button></td>
                </tr>
              ))}

              </tbody>
            </table>
          ) : (
            <p>Loading categories...</p>
          )}
          <div>
            <input
              type="text"
              placeholder="Enter Category Name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button id='addCategoryBtn' onClick={handleAddCategory}>Add Category</button>
          </div>
        </div>
      )}

      <button className='manage' onClick={() => setShowItems(!showItems)}>Manage Items</button>

      {showItems && (
        <div>
          {/* <h2>Items</h2> */}
          {items && items.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Item Name</th>
                  <th>Category ID</th>
                  <th>Description</th>
                  <th>Image Url</th>
                  <th>Price</th>
                  <th>Seller</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {items.map((item) => (
                <tr key={item.itemId}>
                  <td>{item.itemId}</td>
                  <td>{item.itemName}</td>
                  <td>{item.categoryId}</td>
                  <td className='longText description'>{item.description}</td>
                  <td className='longText imageUrl'>{item.imageUrl}</td>
                  <td>{item.price}</td>
                  <td>{item.seller}</td>
                  <td><button onClick={() => handleDeleteItem(item.itemId)}>X</button></td>
                </tr>
              ))}

              </tbody>
            </table>
          ) : (
            <p>Loading items...</p>
          )}
          <div className='entryarea'>
          <input
              type="text"
              placeholder="Item Name"
              value={newItem.itemName}
              onChange={(e) => setNewItem({ ...newItem, itemName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category ID"
              value={newItem.categoryId}
              onChange={(e) => setNewItem({ ...newItem, categoryId:Number(e.target.value) })}
            />
            <input
              type="text"
              placeholder="Description"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newItem.imageUrl}
              onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
            />
            <input
              type="text"
              placeholder="Price"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
            />
            <input
              type="text"
              placeholder="Seller"
              value={newItem.seller}
              onChange={(e) => setNewItem({ ...newItem, seller: e.target.value })}
            />
            <button onClick={handleAddItem}>Add Item</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
