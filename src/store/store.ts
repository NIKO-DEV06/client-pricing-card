import { configureStore } from "@reduxjs/toolkit";
import pricingCardReducer from "./PricingCardSlice";

const store = configureStore({
  reducer: {
    pricingCard: pricingCardReducer,
  },
});

export default store;
