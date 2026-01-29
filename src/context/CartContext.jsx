import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();


  //CartProvider manages the shopping experience for Buyers.
  //It handles adding/removing photos and calculating totals.
 
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from local storage on mount so user doesn't lose items on refresh
  useEffect(() => {
    const savedCart = localStorage.getItem('ahnayz_cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('ahnayz_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (photo) => {
    setCartItems((prevItems) => {
      // Check if photo is already in cart to prevent duplicates
      const isExist = prevItems.find((item) => item.id === photo.id);
      if (isExist) return prevItems;
      return [...prevItems, photo];
    });
  };

  const removeFromCart = (photoId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== photoId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price of all photos in the cart
  const cartTotal = cartItems.reduce((total, item) => total + Number(item.price), 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      clearCart,
      cartCount: cartItems.length,
      cartTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
};