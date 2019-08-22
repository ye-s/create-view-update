import React from 'react';
import { useProductsCRUD } from '../reducer';
import ProductItem from '../productItem/ProductItem';

const ManageProductsPage = (props) => {

  const [{ products } ] = useProductsCRUD();

  const productsList = products && products.length
    ? products.map((product, index) => (
        <ProductItem key={index + product.name}
                    id={index}
                    name={product.name}
        />
      ))
    : (<></>)

  return (
      <div className="">
        <h3>Manage Page</h3>
        {productsList}
      </div>
    )
}

export default ManageProductsPage;