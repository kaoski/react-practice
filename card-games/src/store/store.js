import { configureStore } from "@reduxjs/toolkit";
import deckReducer from "./deckSlice";
import matchInfoReducer from "./matchInfoSlice";

export const store = configureStore({
  reducer: { deck: deckReducer, matchInfo: matchInfoReducer },
});
