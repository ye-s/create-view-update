import React from 'react';
import { RouterProvider } from './router/router';
import { Routes } from './router/routes';
import ManageProductsContainer from './modules/productsManagement/manageProducts/ManageProductsContainer';

function App() {
  return (
    <div className="App">
      <RouterProvider initialState={Routes}>
        <ManageProductsContainer />
      </RouterProvider>
    </div>
  );
}

export default App;
