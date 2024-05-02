//import liraries
import React, {useState} from 'react';
import StoreContext from './context';

// create a component
const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [login, setLogin] = useState(false);
  const addCart = product => {
    setCart([...cart, product]);
  };
  const addFavorites = product => {
    product.favorites = true;
    // console.log(product);
    setFavorites([...favorites, product]);
  };
  return (
    <StoreContext.Provider
      value={{
        cart,
        setCart,
        addCart,
        login,
        setLogin,
        favorites,
        setFavorites,
        addFavorites,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
