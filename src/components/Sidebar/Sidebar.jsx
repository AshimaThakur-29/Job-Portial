import React from "react";
import "./Sidebar.css"
import Salary from "../Salary/Salary.jsx";
import Location from "../Location/Location.jsx";
import Posting from "../Posting/Posting.jsx";
import Experience from "../Experience/Experience.jsx";
import Employment from "../Employment/Employment.jsx";
function Sidebar(){
    return(
        <div className="Sidebar">
<Location/>
<Salary/>
<Posting/>
<Experience/>
<Employment/>
        </div>
    )
}
export default Sidebar