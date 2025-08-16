import React,{useState} from "react";
import "./Humburger.css"
import {   NavLink } from "react-router-dom";
import Home from "../Homepage/Home";
import Job from "../Job/Job";
import Estimate from "../Estimate/Estimate";
import Login from "../Login/Login";
import { FaBarsStaggered } from "react-icons/fa6";
function Humburger() {
  const [isOpen, setIsOpen]= useState(false);

  const togglemenu= ()=>{ 
    setIsOpen(!isOpen);
  }

  return (
   <>
      <div className= {`humburger ${isOpen ? 'open' : ''}`}>
<div className="menu-icon" onClick={togglemenu}>
              <FaBarsStaggered />
            </div>
   
   <div className="bar-icon"> 
    <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
      <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
       Start a search
     </NavLink>
     <NavLink to="/Estimate" className={({ isActive }) => isActive ? "active-link" : ""}>
       Salary estimate
     </NavLink>
     
     <NavLink to="/Job" className={({ isActive }) => isActive ? "active-link" : ""}>
       Post A Job
     </NavLink>
      <NavLink to="/Login" className={({ isActive }) => isActive ? "active-link" : ""}>
       Login
     </NavLink>
     
     <NavLink to="/SignUp" className={({ isActive }) => isActive ? "active-link" : ""}>
       SignUp
     </NavLink>
    </nav>
    </div>
    </div>
    </>
  )
}
export default Humburger
