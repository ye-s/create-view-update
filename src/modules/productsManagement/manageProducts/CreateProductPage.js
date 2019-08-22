import React from 'react';
import { useProductsCRUD } from '../reducer';
import { ADD_PRODUCT } from '../actions';
import { useRouter, CHANGE_ROUTE } from '../../../router/router';
import useProductInput from '../../../customHooks/useProductInput';

const CreateProductPage = (props) => {

  const [, dispatchRouter] = useRouter();
  const [, dispatch] = useProductsCRUD();
  const [product, handleInputChange] = useProductInput(
    {
      name: '',
      type: '',
      price: 0
    }
  );

  const placeholders = {
    name: 'Enter product name',
    type: 'Enter product type',
    price: 'Enter last price'
  };

  const handleCreateProject = () => {
    dispatch({
      type: ADD_PRODUCT,
      product: product
    });
    dispatchRouter({ type: CHANGE_ROUTE, changeRoute: 'editPage' });
  }

  return (
    <>
      <h3>Create new Product</h3>
      <div className="createProduct">
        <div className="createProduct__inputRow">
          <label>Name:</label>
          <input name="name"
                 type="text"
                 value={product.name}
                 onChange={handleInputChange}
                 placeholder={placeholders.name}
          />
        </div>
        <div className="createProduct__inputRow">
          <label>Type:</label>
          <input name="type"
                 type="text"
                 value={product.type}
                 onChange={handleInputChange}
                 placeholder={placeholders.type}
          />
        </div>
        <div className="createProduct__inputRow">
          <label>Price:</label>
          <input name="price"
                 type="number"
                 value={product.price}
                 onChange={handleInputChange}
                 placeholder={placeholders.price}
          />
        </div>
      </div>
      <button className="button createProductButton"
              onClick={handleCreateProject}>Create Product</button>
    </>
  );
}

export default CreateProductPage;