import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cartList")) || [],
  },
  reducers: {
    add: (state, action) => {
      if (state.value.findIndex((item) => item.id == action.payload.id) < 1) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("cartList", JSON.stringify(state.value));
    },
    remove: (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload);
      localStorage.setItem("cartList", JSON.stringify(state.value));
    },
    update: (state, action) => {
      state.value = state.value.map((item, idx) =>
        item.id == action.payload.id
          ? (state.value[idx] = action.payload.cart)
          : item
      );
    },
  },
});

export const { add, remove, update } = cart.actions;
export default cart.reducer;
