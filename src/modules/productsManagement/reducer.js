import React, { createContext, useReducer, useContext } from 'react';

const ProductsContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const changesForState = { 
        products: [...state.products, action.product]
      };
      return {
        ...state,
        ...changesForState
      };
      
    default:
      return state;
  }
};
export const ProductProvider = ({ initialState, children }) => (
  <ProductsContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ProductsContext.Provider>
);

export const useProductsCRUD = () => useContext(ProductsContext);