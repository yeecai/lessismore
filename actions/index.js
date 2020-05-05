import {
  AUTH_USER,
  UNAUTH_USER,
  // AUTH_ERROR,
  // FETCH_MESSAGE,
  LOGIN_MODAL_SHOW,
  LOGIN_MODAL_HIDE
} from "./types";
import axios from "axios";

// const ROOT_URL = "https://www.easy-mock.com/mock/590766877a878d73716e4067/mock";
const ROOT_URL = "https://ai.rmbot.cn"
// const ROOT_URL = "http://120.78.214.127:8080/auth"
export const loginModalShow = () => dispatch => {
  console.log("----loginModalShow");

    dispatch({ type: LOGIN_MODAL_SHOW });
};

export const loginModalhide = () => dispatch => {
    dispatch({ type: LOGIN_MODAL_HIDE });
  };

export const signinUser = ({ userName, password }) => dispatch => {
  return new Promise ((resolve, reject) => {
    // axios({
    //   method: 'post',
    //   url: ROOT_URL + '/website/user/login',
    //   // url: "http://120.78.214.127/auth/login",
    //   // params: { userName, password }
    //   account: userName,
    //   password: password
    // })
    dispatch({ type: AUTH_USER });

// fetch( 'https://ai.rmbot.cn/website/user/login',
// {
//   method: 'post',
//    body: { userName, password }
// })

// cors 
    
    axios.post(
      // ROOT_URL + '/website/user/login',  cors
      '/website/user/login',
      {
        account: userName,
        password: password
      }
    )
    .then(response => {
      const { data } = response;  
      console.log('-----data' + data);
      
      if (data.success) {
        // localStorage.setItem("token", data.result.token);
        localStorage.setItem("token","a token");
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
    // return new Promise(resolve => {
      // localStorage.removeItem("token");
      // console.log("----signoutUser");
      dispatch({ type: UNAUTH_USER });
      // dispatch({ type: LOGIN_MODAL_SHOW });

      // resolve();
      
    // });
};