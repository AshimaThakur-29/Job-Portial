import React,{useState} from "react";
import './Salary.css'
import { PiLessThanLight } from "react-icons/pi";
function Salary(){
     const [selectedValue, setSelectedValue] = useState("");
    
      const handleRadioChange = (value) => {
        setSelectedValue(value);
      };
    return(
        <div className=" Salary">
            <h3>Salary</h3>
<div className="Salary-btn">
    <button>Hourly</button>
     <button>Monthly</button>
      <button>Yearly</button>
</div>
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
          <label> <PiLessThanLight />30000k</label>
        </div>
        <div className="radiobutton">
          <input
            type="radio"
            id="option3"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={() => handleRadioChange("option3")}
          />
          <label> <PiLessThanLight />50000k</label>
        </div>
          <div className="radiobutton">
          <input
            type="radio"
            id="option4"
            value="option4"
            checked={selectedValue === "option4"}
            onChange={() => handleRadioChange("option4")}
          />
          <label><PiLessThanLight /> 80000k</label>
        </div>
          <div className="radiobutton">
          <input
            type="radio"
            id="option5"
            value="option5"
            checked={selectedValue === "option5"}
            onChange={() => handleRadioChange("option5")}
          />
          <label><PiLessThanLight />100000k</label>
        </div>

</div>
        </div>
    )
}
export default Salary