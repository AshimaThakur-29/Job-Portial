import React, { useState } from "react";
import "./Estimate.css";
import { Link } from "react-router-dom";
function Estimate() {
  return (
    <div className="container">
      <div className="Estimate">
        <div className="Salary-Estimate text-center">
          <h1 className="text-primary">Estimate Salary</h1>
          <p className="fs-4">Home/Salary</p>
        </div>
        <div className="Estimate-Search">
          <input type="text" name="username" />
          <button className="Estimate-btn  px-3 py-2 text-white bg-primary border border-1">
            Search
          </button>
        </div>
        <div className="Developer">
          <div className="row ">
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="Shadow">
                    <h3>Warehouse Associate</h3>
                    <p>Average Salary $34,331 per year</p>
                    <div className="opening">
                      <Link to="/">Job Openings</Link>
                      <Link to="/">Skills</Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="Shadow">
                    <h3>Backend Developer</h3>
                    <p>Average Salary $46,330 per year</p>
                    <div className="opening">
                      <Link to="/">Job Openings</Link>
                      <Link to="/">Skills</Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="Shadow">
                    <h3>Front Desk Agent</h3>
                    <p>Average Salary $43,831 per year</p>
                    <div className="opening">
                      <Link to="/">Job Openings</Link>
                      <Link to="/">Skills</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="Shadow">
                    <h3>Crew Member</h3>
                    <p>Average Salary $38,690 per year</p>
                    <div className="opening">
                      <Link to="/">Job Openings</Link>
                      <Link to="/">Skills</Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="Shadow">
                    <h3>Software Engineer</h3>
                    <p>Average Salary $134,331 per year</p>
                    <div className="opening">
                      <Link to="/">Job Openings</Link>
                      <Link to="/">Skills</Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="Shadow">
                    <h3>App Developer</h3>
                    <p>Average Salary $92,331 per year</p>
                    <div className="opening">
                      <Link to="/">Job Openings</Link>
                      <Link to="/">Skills</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="Shadow">
                    <h3>UI/UX Designer</h3>
                    <p>Average Salary $102,331 per year</p>
                    <div className="opening">
                      <Link to="/">Job Openings</Link>
                      <Link to="/">Skills</Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="Shadow">
                    <h3>Web Developer</h3>
                    <p>Average Salary $78,331 per year</p>
                    <div className="opening">
                      <Link to="/">Job Openings</Link>
                      <Link to="/">Skills</Link>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="Shadow">
                    <h3>Full Stack Developer</h3>
                    <p>Average Salary $96,430 per year</p>
                    <div className="opening">
                      <Link to="/">Job Openings</Link>
                      <Link to="/">Skills</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Estimate;
