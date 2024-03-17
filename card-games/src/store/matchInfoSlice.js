import { createSlice } from "@reduxjs/toolkit";

function getInitialState() {
  return [{ round: 1, firstCard: null, secondCard: null, winner: null }];
}

const matchInfoSlice = createSlice({
  name: "matchInfoSlice",
  initialState: getInitialState(),
  reducers: {
    addWinner: (state, action) => {
      const lastRoundInfo = state[state.length - 1];
      lastRoundInfo.winner = action.payload;
    },
    moveToNextRound: (state) => {
      const lastRound = state[state.length - 1].round;
      state.push({
        round: lastRound + 1,
        firstCard: null,
        secondCard: null,
        winner: null,
      });
    },
    addFirstCard: (state, action) => {
      const currentRoundInfo = state[state.length - 1];
      currentRoundInfo.firstCard = action.payload;
    },
    addSecondCard: (state, action) => {
      const currentRoundInfo = state[state.length - 1];
      currentRoundInfo.secondCard = action.payload;
    },
  },
});

export const { moveToNextRound, addFirstCard, addSecondCard, addWinner } =
  matchInfoSlice.actions;

export default matchInfoSlice.reducer;
