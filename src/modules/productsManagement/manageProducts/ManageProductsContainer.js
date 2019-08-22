import React from 'react';
import { useRouter, CHANGE_ROUTE } from '../../../router/router';
import CreateProductPage from './CreateProductPage';
import ManageProductsPage from './ManageProductsPage';
import { ProductProvider } from '../reducer';
import './manageProducts.css';

export const initialState = { products: [] }

const ManageProductsContainer = (props) => {

  const [{ currentRoute }, dispatch] = useRouter();
  
  const showCreatePage = !currentRoute || currentRoute === 'createPage';
  const currentPage = showCreatePage
    ? (<CreateProductPage />)
    : (<ManageProductsPage />);

  const nextPage = showCreatePage
      ? 'editPage'
      : 'createPage';

  const handleChangePage = () => {
    dispatch({ type: CHANGE_ROUTE, changeRoute: nextPage });
  };

  return (
    <ProductProvider initialState={initialState} >
      <div className="pageContainer">
        <div className="currentPage">
          <p>Current Page {currentRoute}</p>
          <button className="button currentPage__nextPageButton"
                  onClick={handleChangePage}>Go to {nextPage}</button>
        </div>
        {currentPage}
      </div>
    </ProductProvider>
  );
}

export default ManageProductsContainer;