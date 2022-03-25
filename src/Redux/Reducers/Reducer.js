import { ActionTypes } from "../Constants/action-types";

const initialState = {
  rentContent: [],
};

const buyInitialState = {
  buyContent: [],
};

export const rentContentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET__RENT__CONTENT:
      return { ...state, rentContent: payload };
    default:
      return state;
  }
};

export const rentInfoReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET__RENT__INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const buyContentReducer = (
  state = buyInitialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.GET__BUY__CONTENT:
      return { ...state, buyContent: payload };
    default:
      return state;
  }
};

export const buyInfoReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET__BUY__INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
