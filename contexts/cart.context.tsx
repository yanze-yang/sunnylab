import { createContext, Dispatch, SetStateAction, useState } from "react";

type cartProductProps = {
  id: number;
  name: string;
  price: number;
};

// union type
type cartItemProps = cartProductProps & {
  quantity: number;
};

interface CartContextInterface {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: cartItemProps[];
  addItemToCart: (productToAdd: cartProductProps) => void;
}

export const CartContext = createContext<CartContextInterface | null>(null);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    const item = cartItems.find((item) => item.id === productToAdd.id);
    if (item) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    }
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
