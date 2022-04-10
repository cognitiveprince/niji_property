import { ActionTypes } from "../Constants/action-types";

const initialState = {
  rentContent: [],
};

const buyInitialState = {
  buyContent: [],
};

const loginInitialState = {
  loading: false,
  currentUser: null,
  error: null,
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

export const userReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER__START:
      return { ...state, loading: true };
    case ActionTypes.REGISTER__SUCCESS:
      return { ...state, loading: false, currentUser: action.payload };
    case ActionTypes.REGISTER__FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN__START:
      return { ...state, loading: true };
    case ActionTypes.LOGIN__SUCCESS:
      return { ...state, loading: false, currentUser: action.payload };
    case ActionTypes.LOGIN__FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ActionTypes.LOGIN__RESET:
      return { ...state, currentUser: null, error: null };
    default:
      return state;
  }
};

export const logoutReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGOUT__START:
      return { ...state, loading: true };
    case ActionTypes.LOGOUT__SUCCESS:
      return { ...state, loading: false, currentUser: null };
    case ActionTypes.LOGOUT__FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const setUserReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case ActionTypes.SET__USER:
      return { ...state, loading: false, currentUser: action.payload };
    default:
      return state;
  }
};
