import React, { useState, useEffect } from "react";
import "./Home.css";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Sidebar1 from "../Sidebar1/Sidebar1.jsx";

function Home() {
  const [data, setData] = useState([]);

  const addData = async () => {
    try {
      const get = await fetch("https://dummyjson.com/users?limit=8");
      const output = await get.json();
       console.log(output);
      setData(output.users);
      console.log(output.users);
    }
    catch (error) {
      console.error("Error fetching data:", error);
    };
  };

  // Fetch data on component mount
  useEffect(() => {
    addData();
  }, []);


  return (
    <div className="container">
      <div className="Home p-5">
        <h1 className="fw-bold">
          Find Your <span className="text-primary">new job </span> today
        </h1>
        <p className="fs-5">
          Thousands of jobs in the computer, engineering and technology sectors
          are waiting for you.
        </p>
      </div>
      <form>
        <div className="enter d-flex justify-content-center align-items-center">
          <div className="enter-left">
            <div className="search">
              <CiSearch />
            </div>
            <input
              type="text"
              name="username"
              placeholder="what position are you looking  for ?"
            />
          </div>
          <div className="enter-right">
            <div className="search">
              <CiLocationOn />
            </div>
            <input type="text" name="username" placeholder="location" />
          </div>
          <button className="enter-btn  px-3 py-2 text-white bg-primary border border-1">Search</button>
        </div>
      </form>
      <div className="content row">
        <div className="col-12 d-flex justify-content-between ">
          {/* Left Sidebar */}
          <div className="Content-left">
            <div className="col-3 w-full">
              <Sidebar />
            </div>
          </div>
           {/* Center Content */}
          <div className="Content-center">
            <div className="col-5 w-full">

            {data.map((user) => (
  <div className="about d-flex align-items-center my-3" key={user.id}>
    <img
      src={user.image}
      alt={user.username}
      width="80"
      height="80"
      className="me-3 rounded-circle"
    />
    <div>
      <p className="mb-0 fw-semibold">{user.firstName} {user.lastName}</p>
      <p className="mb-0">{user.company?.name} - {user.company?.department}</p>
      <p className="mb-0">{user.address?.city}, {user.address?.state}</p>
    </div>
  </div>
))}

            </div>
          </div>
          {/* Right Sidebar */}
          <div className="Content-right">
            <div className="col-3 ">
              <Sidebar1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
