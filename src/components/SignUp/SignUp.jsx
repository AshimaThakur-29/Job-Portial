import React,{useState} from "react";
import'./SignUp.css'
  
function SignUp() {
 
    
      const handleSubmit = () => {
  
    alert("job Posted Sucessfully")
      }
return(
<div className="container">
<div className="SignUp">
     <form>
    <h4>Sign Up</h4>
    <label>Email Address</label>
    <input type="email"   placeholder="name@email.com"/>
    <label>Password</label>
    <input type="password" placeholder="****************"/>
    <label>Confirm Password</label>
     <input type="password"/>
     <p id="demo"></p>
    <button onClick={handleSubmit} className="login-btn text-white">Sign in</button>
   
    </form>
    <p>©2023 JobPortal. All rights reserved.</p>
</div>

</div>    
)
}
export default SignUp