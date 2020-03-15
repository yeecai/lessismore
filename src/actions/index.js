import {
  AUTH_USER,
  UNAUTH_USER,
  // AUTH_ERROR,
  // FETCH_MESSAGE,
  LOGIN_MODAL_SHOW,
  LOGIN_MODAL_HIDE
} from "./types";
import axios from "axios";

const ROOT_URL = "https://www.easy-mock.com/mock/590766877a878d73716e4067/mock";
// export const LOGIN_MODAL_SHOW = "login_modal_show";
// export const LOGIN_MODAL_HIDE= "login_modal_hide";

export const loginModalShow = () => dispatch => {
    dispatch({ type: LOGIN_MODAL_SHOW });
};

export const loginModalhide = () => dispatch => {
    dispatch({ type: LOGIN_MODAL_HIDE });
  };

export const signinUser = ({ userName, password }) => dispatch => {
  return new Promise ((resolve, reject) => {
    axios({
      url: ROOT_URL + '/login',
      params: { userName, password }
    })
    .then(response => {
      const { data } = response;  
      if (data.success) {
        localStorage.setItem("token", data.result.token);
        dispatch({ type: AUTH_USER });
        resolve( data || { success: "ok" });
      }
    })
    .catch(err => {
      reject(err);
    })
  }) 
}

export const signoutUser = () => dispatch => {
    return new Promise(resolve => {
      localStorage.removeItem("token");
      dispatch({ type: UNAUTH_USER });
      resolve();
    });
};