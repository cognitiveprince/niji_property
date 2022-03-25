import { ActionTypes } from "../Constants/action-types";

export const getRentContents = (rentContent) => {
  return {
    type: ActionTypes.GET__RENT__CONTENT,
    payload: rentContent,
  };
};

export const getRentInfo = (rentInfo) => {
  return {
    type: ActionTypes.GET__RENT__INFO,
    payload: rentInfo,
  };
};

export const getBuyContents = (buyContent) => {
  return {
    type: ActionTypes.GET__BUY__CONTENT,
    payload: buyContent,
  };
};

export const getBuyInfo = (buyInfo) => {
  return {
    type: ActionTypes.GET__BUY__INFO,
    payload: buyInfo,
  };
};
