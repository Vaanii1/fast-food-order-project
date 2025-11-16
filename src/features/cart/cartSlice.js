import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

// the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = new food item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = foodId
      state.cart = state.cart.filter((item) => item.foodId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //find the item you want to increase the quantity
      //payload = foodId
      const item = state.cart.find((item) => item.foodId === action.payload);
      //increase the quantity
      item.quantity++;
      //get hte new total price
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //find the item you want to decrease the quantity
      //payload = foodId
      const item = state.cart.find((item) => item.foodId === action.payload);

      //decrease the quantity
      item.quantity--;
      //get hte new total price
      item.totalPrice = item.quantity * item.unitPrice;
      //delete item if quantity is 0
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      //clear the cart
      state.cart = [];
    },
  },
});

//export the action creators

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

//export the reducer
export default cartSlice.reducer;

// the cart
export const getCart = (state) => state.cart.cart;

//get total cart quantity
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

//get total cart price
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

//get the current quantity by id
//a selector function that return another function
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.foodId === id)?.quantity ?? 0;

// reselect
