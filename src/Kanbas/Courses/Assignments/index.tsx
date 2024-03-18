import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus, FaCaretDown, FaRegFileAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PiDotsThreeVerticalBold, PiDotsSixVerticalBold } from "react-icons/pi";
import { assignments } from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  } from "./assignmentsReducer";
import { KanbasState } from "../../store";
import formatDate from "./dateFormat";


function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirmDeletion = (assignmentId: any) => {
    // Use window.confirm
    const isConfirmed = window.confirm("Are you sure you want to delete this assignment?");
    if (isConfirmed) {
      // proceed with the deletion
      dispatch(deleteAssignment(assignmentId));
    }
  };

  const createNewAssignment = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
  };

  return (
    <>
    <div className="my-4">
      <input className="form-control w-25 d-inline" type="text" 
        placeholder="Search for Assignment" aria-label="default input example" />
      <div className="float-end m-0 straight-button">
        <button className="btn btn-light btn-outline-secondary">
          <FaPlus className="mb-1"/> Group </button>
        <button onClick={ createNewAssignment } className="btn btn-danger">
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
                      {assignment.availableDate && <>| Not available until {formatDate(assignment.availableDate)} at 12:00 am </>}
                      | Due {formatDate(assignment.dueDate)} at 11:59pm | {assignment.points} pts
                    </span>

                  </p>
                  <span className="ms-auto">
                  <button className="btn btn-danger px-1 me-2" onClick={() => confirmDeletion(assignment._id)}>
                    Delete
                  </button>
                    <FaCheckCircle className="text-success fs-5 me-2" />
                    <PiDotsThreeVerticalBold className="fs-4 ms-2" />
                  </span>
                </div>
              </li>
              ) 
            )}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;