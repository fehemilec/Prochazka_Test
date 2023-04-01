import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from "../constants/userConstants";
import { config } from "../../environment";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });

  try {
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`${config.url.API_URL}/api/users/signin`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
          localStorage.setItem("userInfo", JSON.stringify(data));
        });
      }
    });
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
