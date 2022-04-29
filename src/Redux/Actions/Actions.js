import { ActionTypes } from "../Constants/action-types";
import { auth } from "../../firebase-config";
import { db } from "../../firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

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

export const registerStart = () => {
  return {
    type: ActionTypes.REGISTER__START,
  };
};

export const registerSuccess = (user) => {
  return {
    type: ActionTypes.REGISTER__SUCCESS,
    payload: user,
  };
};

export const registerFailure = (error) => {
  return {
    type: ActionTypes.REGISTER__FAILURE,
    payload: error,
  };
};

export const registerInitiate = (email, password, username) => {
  return function (dispatch) {
    dispatch(registerStart());
    try {
      const user = createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          dispatch(registerSuccess(user));
          return setDoc(doc(db, "users", cred.user.uid), {
            username: username,
          });
        })
        .catch((error) => {
          dispatch(registerFailure(error));
          toast(error.message + " Please Refresh And Fill The Form Again", {
            type: "error",
          });
        });
    } catch (error) {
      dispatch(registerFailure(error.message));
    }
  };
};

export const loginStart = () => {
  return {
    type: ActionTypes.LOGIN__START,
  };
};

export const loginSuccess = (user) => {
  return {
    type: ActionTypes.LOGIN__SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: ActionTypes.LOGIN__FAILURE,
    payload: error,
  };
};

export const loginReset = () => {
  return {
    type: ActionTypes.LOGIN__RESET,
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          dispatch(loginSuccess(user));
        })
        .catch((error) => {
          dispatch(loginFailure(error.message));
          toast("Invalid Credentials", {
            type: "error",
          });
        });
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export const logoutStart = () => {
  return {
    type: ActionTypes.LOGOUT__START,
  };
};

export const logoutSuccess = () => {
  return {
    type: ActionTypes.LOGOUT__SUCCESS,
  };
};

export const logoutFailure = (error) => {
  return {
    type: ActionTypes.LOGOUT__FAILURE,
    payload: error,
  };
};

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    try {
      signOut(auth);
      console.log("User Logged Out Sucessfully");
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(logoutFailure(error.message));
    }
  };
};

export const setUser = (user) => {
  return {
    type: ActionTypes.SET__USER,
    payload: user,
  };
};
