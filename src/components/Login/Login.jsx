import React from "react";
import'./Login.css'
function Login(){
    function login_btn(){

    }
return(
<div className="container">
<div className="login">
     <form>
    <h4>Please Login!</h4>
    <label>Email Address</label>
    <input type="email" id="email" placeholder="name@email.com"/>
    <label>Password</label>
    <input type="password" id="password" placeholder="****************"/>
    <button className="login-btn"><a href="">Sign in</a></button>
    <p id="demo"></p>
    <div className="sign">
        <p>or</p><span> <a href="">Sign Up</a></span>
   
    </div>
   

    </form>
    <p>©2023 JobPortal. All rights reserved.</p>
</div>

</div>    
)
}
export default Login