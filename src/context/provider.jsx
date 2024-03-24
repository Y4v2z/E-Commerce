//import liraries
import React, {useState} from 'react';
import StoreContext from './context';

// create a component
const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const addCart = product => {
    setCart([...cart, product]);
    // console.log(product);
  };
  return (
    <StoreContext.Provider value={{cart, setCart, addCart}}>
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
