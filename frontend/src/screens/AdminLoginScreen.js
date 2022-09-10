import React from 'react';
import './AdminLoginScreen.css';
export default function AdminLoginScreen() {
    return(  
      <div class="login">
        <div class="loginContainer">
          <h2>Login</h2>
          <p>Please fill in your credentials to login.</p>       
          <form action="" method="post">
            <div class="form-group">
                <input 
                  type="text" 
                  name="username" 
                  autocomplete="off" 
                  placeholder="Email address or username" />                
            </div>    
            <div class="form-group">
                <input 
                  type="password" 
                  name="password" 
                  autocomplete="off" 
                  placeholder="Password" />
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