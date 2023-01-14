import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate } from 'react-router-dom';
import { signin } from '../redux/actions/userActions';
import './AdminLoginScreen.css';

export default function AdminLoginScreen() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin;

  const control_email =(e) =>{
    const value = e.target.value;
    setEmail(value);
 
 }
 const control_pass =(e) =>{
  const value = e.target.value;
  setPassword(value);

}

  const handleLogin = (e) =>{
    e.preventDefault()
    dispatch(signin(email,password))
  };


  useEffect(() => {
    let jsonTokenObj=JSON.parse(localStorage.getItem("userInfo"))
    console.log("TOKEN USER, ", jsonTokenObj.token)
    if(localStorage.getItem("userInfo")){
      navigate('/orders')
    }
  }, [userInfo])
    return(  
      <div className="login">
        <div className="loginContainer">
          <h2>Login</h2>
          <p>Please fill in your credentials to login.</p>       
          <form  className="login_screen" onSubmit={handleLogin}>
            <div className="form-group">
                <input 
                  type="text" 
                  name="email" 
                  autocomplete="off" 
                  placeholder="Email address"
                  value={email} 
                  onChange={control_email}/>                
            </div>    
            <div className="form-group">
                <input 
                  type="password" 
                  name="password" 
                  autocomplete="off" 
                  placeholder="Password"
                  value={password} 
                  onChange={control_pass}/>  
            </div>
            <input type="submit" value="loginSubmit" id="btnSubmit" name="loginbutton"/>
            <label htmlFor="btnSubmit" className="btnLoginSubmit">                   
                <span className="loginLabel">Log in</span>
            </label>
        </form>
    </div>
	</div>
    ) 
  }