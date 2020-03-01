// import {
//   // AUTH_USER,
//   // UNAUTH_USER,
//   // AUTH_ERROR,
//   // FETCH_MESSAGE,
//   LOGIN_MODAL_SHOW,
//   LOGIN_MODAL_HIDE
// } from "./types";

export const LOGIN_MODAL_SHOW = "login_modal_show";
export const LOGIN_MODAL_HIDE= "login_modal_hide";


export const signoutUser = () => dispatch => {
    return new Promise(resolve => {
      localStorage.removeItem("token");
      dispatch({ type: UNAUTH_USER });
      resolve();
    });
  };

export const loginModalShow = () => dispatch => {
    dispatch({ type: LOGIN_MODAL_SHOW });
};

export const loginModalhide = () => dispatch => {
    dispatch({ type: LOGIN_MODAL_HIDE });
  };