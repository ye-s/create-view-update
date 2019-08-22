import React, { createContext, useReducer, useContext } from 'react';

export const CHANGE_ROUTE = 'CHANGE_ROUTE';

const RouterContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_ROUTE':
      const changesForRoute =  { ...state }.currentRoute;
      return {
        ...state,
        currentRoute: action.changeRoute,
        previousRote: changesForRoute
      };
      
    default:
      return state;
  }
};
export const RouterProvider = ({ initialState, children }) => (
  <RouterContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </RouterContext.Provider>
);

export const useRouter = () => useContext(RouterContext);