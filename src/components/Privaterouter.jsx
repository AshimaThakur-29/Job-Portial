import react, { createContext, useContext, useState, useLocation, Navigate } from "react";

import { AuthContext } from "../../../frontend/src/component/Auth";

export const Privaterouter = ({ children }) => {
    const [isAuthenticate] = useContext(AuthContext);
    const location = useLocation()

    if (isAuthenticate) {
        return children
    }
    return (<Navigate to="/Login" state={{ from: location }}></Navigate >);
};

export default Privaterouter
