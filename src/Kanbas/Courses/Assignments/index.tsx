import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus, FaCaretDown, FaRegFileAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { PiDotsThreeVerticalBold, PiDotsSixVerticalBold } from "react-icons/pi";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);

  
    
  return (
    <>
    <div className="my-4">
      <input className="form-control w-25 d-inline" type="text" 
        placeholder="Search for Assignment" aria-label="default input example" />
      <div className="float-end m-0 straight-button">
        <button className="btn btn-light btn-outline-secondary">
          <FaPlus className="mb-1"/> Group </button>
        <button className="btn btn-danger">
          <FaPlus className="mb-1"/> Assignment</button>
        <button className="btn btn-light btn-outline-secondary">             
        <FaEllipsisV className="mb-1"/></button>
      </div>
      <hr className="mt-3 mb-2"/>
    </div>

      <ul className="list-group wd-assignment">
        <li className="list-group-item">
          <div>
            <PiDotsSixVerticalBold className="fs-4 mb-1" /> <FaCaretDown className="me-1 mb-1"/>ASSIGNMENTS
            <span className="float-end">
              <span className="mx-4 p-2 bg-gray border border-secondary rounded-pill">
                40% of total</span>
              <FaPlus className="me-2" />
              <PiDotsThreeVerticalBold className="fs-4 ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <div className="d-flex align-items-center">
                  <PiDotsSixVerticalBold className="fs-4 me-2"/>
                  <FaRegFileAlt className="fs-5 me-4 text-success"/>
                  <p>
                    <Link className="wd-link"
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                        {assignment.title}
                    </Link><br />
                    <Link className="wd-link-small me-2"
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                        Multiple Modules 
                    </Link>
                    <span className="wd-due-points">
                      {assignment.availibility && <>| Not available until {assignment.availibility} at 12:00 am </>}
                      | Due {assignment.due} at 11:59pm | {assignment.points} pts
                    </span>

                  </p>
                  <span className="ms-auto">
                    <FaCheckCircle className="text-success fs-5 me-2" />
                    <PiDotsThreeVerticalBold className="fs-4 ms-2" />
                  </span>
                </div>
              </li>
              ))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;