import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import Privaterouter from '../Privaterouter'
import Login from "../Login/Login";
import Job from '../Job/Job';
import Home from '../Homepage/Home';
import Estimate from '../Estimate/Estimate';
import App from "../../App"
import SignUp from '../Sign Up/Signup';
const Router = createBrowserRouter([{
    path: "/", element: <App />, children: [
        { path: "/", element: <Home /> },
{path:"/Job",element:
<Privaterouter>
<Job/>
</Privaterouter>}
,
{path:"/Estimate", element:<Estimate />}
    ]
}, { path: "/login", element: <Login /> },
    {path:"/SignUp",element:<SignUp/>}])

export default Router
