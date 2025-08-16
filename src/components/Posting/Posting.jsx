import React,{useState}from "react";
import'./Posting.css'
function Posting(){
     const [selectedValue, setSelectedValue] = useState("");
        
          const handleRadioChange = (value) => {
            setSelectedValue(value);
          };
        return(
            <div className="Posting">
                <h3>Date of Posting</h3>
    <div>
         <div className="radiobutton">
              <input
                type="radio"
                id="option1"
                value="option1"
                checked={selectedValue === "option1"}
                onChange={() => handleRadioChange("option1")}
              />
              <label>All time</label>
            </div>
            <div className="radiobutton">
              <input
                type="radio"
                id="option2"
                value="option2"
                checked={selectedValue === "option2"}
                onChange={() => handleRadioChange("option2")}
              />
              <label> Last 24 hours</label>
            </div>
            <div className="radiobutton">
              <input
                type="radio"
                id="option3"
                value="option3"
                checked={selectedValue === "option3"}
                onChange={() => handleRadioChange("option3")}
              />
              <label>Last 7 days</label>
            </div>
              <div className="radiobutton">
              <input
                type="radio"
                id="option4"
                value="option4"
                checked={selectedValue === "option4"}
                onChange={() => handleRadioChange("option4")}
              />
              <label>Last Month</label>
            </div>
            
    </div>
            </div>
        )
}
export default Posting