import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import Home from './Home.jsx'
import Login from '../Login/Login.jsx';
import Estimate from '../Estimate/Estimate.jsx';
import Job from '../Job/Job.jsx';


function Hamburger() {
  const [isOpen, setIsOpen]= useState(false);

  const togglemenu= ()=>{ 
    setIsOpen(!isOpen);
  }

  return (
   <>
      <div className= {hamburger ${isOpen ? 'open' : ''}}onClick={togglemenu}>
              <FaBarsStaggered />
            
   
    
    <nav className={nav-links ${isOpen ? 'open' : ''}}>
        <NavLink to='/' className={({ isActive }) => (isActive ? "nav-link-active":"")} element ={<Home />}>Start a search</NavLink>
            <NavLink to='/Login' className={({ isActive }) => (isActive ? "nav-link-active":"")} element ={<Login />}>My Jobs</NavLink>
            <NavLink to='/Estimate' className={({ isActive }) => (isActive ? "nav-link-active":"")} element ={<Estimate />}>Salary estimate</NavLink>
            <NavLink to='/Job' className={({ isActive }) => (isActive ? "nav-link-active":"")} element ={<Job />}>A Job</NavLink>
            
    </nav>
    </>
  )
}

export default Hamburger