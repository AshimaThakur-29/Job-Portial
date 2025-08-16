import React from "react";
import './Job.css';
function Job() {
  const handleSubmit = () => {

    alert("job Posted Sucessfully")
  }
  return (
    <div className="Container-fluid ">
      <div className="Job-Title">

        <form>
          <div className="col-12">
            <div className="row">

              <div className="col-6">
                <label>Job Title</label>
                <input type="text" className="form-control" placeholder="Web Developer" />
              </div>
              <div className="col-6">
                <label>Company Name</label>
                <input type="text" className="form-control" placeholder="Ex:Microsoft" />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>Minimum Salary</label>
                <input type="text" className="form-control" placeholder="$20k" />
              </div>
              <div className="col-6 ">
                <label>Maximum Salary</label>
                <input type="text" className="form-control" placeholder="$100k" />
              </div>
            </div>
            <div className="row">
              <div className="col-6 ">
                <label>Minimum Salary</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Choose Your Salary</option>
                  <option value="1">Hourly</option>
                  <option value="2">Monthly</option>
                  <option value="3">Yearly</option>
                </select>
              </div>
              <div className="col-6">
                <label>Job Location</label>
                <input type="text" className="form-control" placeholder="Ex:New York" />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>Job Posting Date</label>
                <input type="datetime-local" class="form-control" name="date" />
              </div>
              <div className="col-6" >
                <label>Experience Level</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Select Your Experience Level</option>
                  <option value="1">Fresher</option>
                  <option value="2">Intership</option>
                  <option value="3">Work remotely</option>
                </select>
              </div>

            </div>
            <div className="row">
              <label>Required Skill Sets:</label>
              <select className="form-select" aria-label="Size 5 select example">
                <option selected>Select...</option>
                <option value="1">C++</option>
                <option value="3">Javascript</option>
                <option value="2">HTML</option>
                <option value="3">CSS</option>
                <option value="4">Nodejs</option>
                <option value="5">React</option>
                <option value="6">MongoDB</option>
              </select>
            </div>
            <div className="row">
              <div className="col-6">
                <label>Company Logo</label>
                <input type="file" class="form-control" placeholder="Paste your image url: https://weshare.com/img1.jpg" />
              </div>
              <div className="col-6">
                <label>Employment Type</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Select Your Job Type</option>
                  <option value="1">Full-time</option>
                  <option value="2">Part-time</option>
                  <option value="3">TemPorary</option>
                </select>
              </div>

            </div>
            <div className="row">
              <div>
                <label>Job Description</label>
                <br />
                <textarea className="form-control" rows="6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quo consequuntur accusamus eum voluptates omnis placeat cumque, corporis, dolore, praesentium ea ullam. Facilis aliquid consequuntur alias ipsum fugiat, corporis nisi.</textarea>
              </div>
              <div>
                <label>Job Posted by</label>
                <input type="email" className="form-control" placeholder="your email" />
              </div>

            </div>
            <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
          </div>


        </form>
      </div>
    </div>
  );
}
export default Job