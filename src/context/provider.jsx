//import liraries
import React, {useState} from 'react';
import StoreContext from './context';

// create a component
const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [login, setLogin] = useState(false);
  const addCart = product => {
    setCart([...cart, product]);
    // console.log(product);
  };
  return (
    <StoreContext.Provider value={{cart, setCart, addCart, login, setLogin}}>
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
