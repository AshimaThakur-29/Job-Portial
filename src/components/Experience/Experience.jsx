import React,{useState} from "react";
import'./Experience.css'
function Experience(){
 const [selectedValue, setSelectedValue] = useState("");
    
      const handleRadioChange = (value) => {
        setSelectedValue(value);
      };
    return(
        <div className="Experience">
            <h3>Work Experience</h3>

<div>
     <div className="radiobutton">
          <input
            type="radio"
            id="option1"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={() => handleRadioChange("option1")}
          />
          <label>Any Experence</label>
        </div>
        <div className="radiobutton">
          <input
            type="radio"
            id="option2"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={() => handleRadioChange("option2")}
          />
          <label> internship</label>
        </div>
        <div className="radiobutton">
          <input
            type="radio"
            id="option3"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={() => handleRadioChange("option3")}
          />
          <label>Work remotely</label>
        </div>
        </div>
        </div>
)
}
export default Experience