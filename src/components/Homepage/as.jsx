import React, { useState, useEffect } from "react";
import "./Home.css";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import Sidebar from "../Sidebar/sidebar";
import Sidebar1 from "../Sidebar1/Sidebar1";

function Home() {
  const [data, setData] = useState([]);

  const addData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();
      setData(result.users);
      console.log(result.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
        <div className="enter d-flex justify-start align-items-center">
          <div className="enter-left">
            <div className="search">
              <CiSearch />
            </div>
            <input
              type="text"
              name="position"
              placeholder="What position are you looking for?"
            />
          </div>

          <div className="enter-right">
            <div className="search">
              <CiLocationOn />
            </div>
            <input type="text" name="location" placeholder="Location" />
          </div>

          <button
            type="submit"
            className="enter-btn px-3 py-2 text-white bg-primary border border-1"
          >
            Search
          </button>
        </div>
      </form>

      <div className="content row mt-4">
        <div className="col-12 d-flex">
          {/* Left Sidebar */}
          <div className="Content-left col-3">
            <Sidebar />
          </div>

          {/* Center Content */}
          <div className="Content-center col-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vero
              sunt minima asperiores dolore nihil esse corrupti vel laboriosam,
              debitis quam nostrum culpa? Ipsa non libero minima commodi quidem
              beatae?
            </p>

            {data.map((user) => (
              <div className="about d-flex align-items-center my-3" key={user.id}>
                <img
                  src={user.image}
                  alt={user.username}
                  width="60"
                  height="60"
                  className="me-3 rounded-circle"
                />
                <p className="mb-0 fw-semibold">{user.username}</p>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="Content-right col-3">
            <Sidebar1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
