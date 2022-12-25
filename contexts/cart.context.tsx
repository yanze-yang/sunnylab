import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type cartProductProps = {
  id: number | string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
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
  removeItemFromCart: (productToRemove: cartProductProps) => void;
  clearItemFromCart: (productToRemove: cartProductProps) => void;
  updateItemInCart: (
    productToUpdate: cartProductProps,
    quantity: number
  ) => void;
  quantityInCart: (product: cartProductProps) => number;
  cartCount: number;
}

export const CartContext = createContext<CartContextInterface | null>(null);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

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

  const removeItemFromCart = (productToRemove) => {
    const item = cartItems.find((item) => item.id === productToRemove.id);
    if (item.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== productToRemove.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const clearItemFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== productToRemove.id));
  };

  const updateItemInCart = (productToUpdate, quantity) => {
    const item = cartItems.find((item) => item.id === productToUpdate.id);
    if (item) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productToUpdate.id
            ? { ...item, quantity: quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...productToUpdate, quantity: 1 }]);
    }
  };

  // it's used in the Product page to show the quantity of the product in the cart
  const quantityInCart = (product) => {
    const item = cartItems.find((item) => item.id === product.id);
    return item ? item.quantity : 0;
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    quantityInCart,
    updateItemInCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
