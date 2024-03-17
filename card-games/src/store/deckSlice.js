import { createSlice } from "@reduxjs/toolkit";
import { getInitialBoardState } from "../utils/util";

const deckSlice = createSlice({
  name: "deckSlice",
  initialState: getInitialBoardState(),
  reducers: {
    turnCard: (state, action) => {
      const card = action.payload;
      const cardState = state[card];
      cardState.showFront = !cardState.showFront;
    },
    hideCard: (state, action) => {
      const card = action.payload;
      const cardState = state[card];
      cardState.hideCard = true;
    },
    showBackForAllCard: (state, action) => {
      const currentFirstCard = action.currentFirstCard;
      Object.entries(state).forEach(([key, value]) => {
        if (key !== currentFirstCard) {
          value.showFront = false;
        }
      });
    },
  },
});

export const { turnCard, hideCard, showBackForAllCard } = deckSlice.actions;

export default deckSlice.reducer;
