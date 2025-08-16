import React,{useState} from "react";
import'./Employment.css'
function Employment(){
 const [selectedValue, setSelectedValue] = useState("");
    
      const handleRadioChange = (value) => {
        setSelectedValue(value);
      };
    return(
        <div className="Employment">
            <h3>Type Of Employment</h3>

<div>
     <div className="radiobutton">
          <input
            type="radio"
            id="option1"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={() => handleRadioChange("option1")}
          />
          <label>Any</label>
        </div>
        <div className="radiobutton">
          <input
            type="radio"
            id="option2"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={() => handleRadioChange("option2")}
          />
          <label> Full-time</label>
        </div>
        <div className="radiobutton">
          <input
            type="radio"
            id="option3"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={() => handleRadioChange("option3")}
          />
          <label>Temporary</label>
        </div>
          <div className="radiobutton">
          <input
            type="radio"
            id="option4"
            value="option4"
            checked={selectedValue === "option4"}
            onChange={() => handleRadioChange("option4")}
          />
          <label>part-time</label>
        </div>
        </div>
        </div>
)
}
export default Employment