import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              
      <hr />
      <h2>Published Courses (4)</h2> 
      <hr />

      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none" }}>
                <div className="card">
                  <img src={`/images/${course.image}`} className="card-img-top"
                      style={{ height: 150 }}/>
                  <div className="card-body">
                    <p className="card-title" style={{color: "navy", fontWeight: "bold"}}>
                      {course.number} {course.name} <br/>
                      <span className="card-text" style={{color: "black", fontWeight: "normal"}}>
                      {course.number} {course.name} <br/>
                      </span>
                      <small style={{color: "black", fontWeight: "normal"}}>
                        {course.number} {course.sec} {course.semester}
                      </small>
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                      Go </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))
          }

        </div>
      </div>
    </div>
  );
}
export default Dashboard;