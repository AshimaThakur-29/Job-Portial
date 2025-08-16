import React, { useState } from "react";
import "./Location.css";
function Location() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <div className="Location">
      <h2>Filters</h2>
      <div>
        <h3>Location</h3>

        <div className="radiobutton">
          <input
            type="radio"
            id="option1"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={() => handleRadioChange("option1")}
          />
          <label>All</label>
        </div>
        <div className="radiobutton">
          <input
            type="radio"
            id="option2"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={() => handleRadioChange("option2")}
          />
          <label>Location</label>
        </div>
        <div className="radiobutton">
          <input
            type="radio"
            id="option3"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={() => handleRadioChange("option3")}
          />
          <label>Seattle</label>
        </div>
          <div className="radiobutton">
          <input
            type="radio"
            id="option4"
            value="option4"
            checked={selectedValue === "option4"}
            onChange={() => handleRadioChange("option4")}
          />
          <label>Madrid</label>
        </div>
          <div className="radiobutton">
          <input
            type="radio"
            id="option5"
            value="option5"
            checked={selectedValue === "option5"}
            onChange={() => handleRadioChange("option5")}
          />
          <label>Boston</label>
        </div>
      </div>
    </div>
  );
}
export default Location;
