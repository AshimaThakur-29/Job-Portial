import React from "react";
import "./Sidebar.css"
import Salary from "../Salary/Salary";
import Location from "../Location/Location";
import Posting from "../Posting/Posting";
import Experience from "../Experience/Experience";
import Employment from "../Employment/Employment";
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