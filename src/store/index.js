import { configureStore } from "@reduxjs/toolkit";
import { userReducer, updateUsername } from "./slices/userSlice";
import {
  cartReducer,
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQueantity,
  clearCart,
} from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export {
  store,
  updateUsername,
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQueantity,
  clearCart,
};
