import axios from "axios";
import {
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS
} from '../constants/userConstants';
import { Link, useNavigate } from "react-router-dom";

export const signin = (email, password) => async(dispatch) =>{

    dispatch({type: USER_SIGNIN_REQUEST, payload:{email, password}});

    console.log("email, ", email)
    console.log("pass, ", password)
    try {


          const headers = {
            "Content-Type" : "application/json"
          }
      
          return fetch('https://infinite-headland-77957.herokuapp.com/:5000/api/users/signin' , {
            method: "POST",
            headers,
            body: JSON.stringify({
                email: email,
                password: password
              })
          }).then( response => {
            if(response.ok){

                response.json().then(data => {
                dispatch({type:USER_SIGNIN_SUCCESS, payload:data})
                localStorage.setItem("userInfo", JSON.stringify(data));
                });


            }
          })

        
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
}