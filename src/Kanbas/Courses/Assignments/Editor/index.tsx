import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
import { KanbasState } from "../../../store";

function AssignmentEditor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignmentId, courseId } = useParams();
  const assignments = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );

  const assignment = assignments.find(assignment => assignment._id === assignmentId) || 
    {
      _id: new Date().toString,
      title: "New Assignment",
      description: "New Assignment Description",
      points: 100,
      course: courseId
    };

  const [localAssignment, setLocalAssignment] = useState({ ...assignment });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLocalAssignment((prev: any) => ({ ...prev, [name]: value }));
  };


  const handleSave = () => {
    {assignmentId === "new" ? dispatch(addAssignment(localAssignment)) 
      : dispatch(updateAssignment(localAssignment))};
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="mt-4 mx-2">
      <div className="d-flex justify-content-end align-items-center straight-button">
          <FaCheckCircle className="text-success"/>
        Published
      <button className="btn btn-light btn-outline-secondary ms-2 p-2 ">             
      <FaEllipsisV className="mb-1"/></button>
      </div>
      
      <hr />
      <>
      <p className="mb-1">Assignment Name</p>
      <input defaultValue={assignment.title} className="form-control mb-2" name="title"
        onChange={handleChange}
         />
      <textarea className="form-control mb-3" id="assiDes" name="description"
        onChange={handleChange}>
          {assignment.description}
      </textarea>
      <div className="row mb-3 g-3">
        <div className="col-3 text-end">
            <label htmlFor="points">Points</label>
        </div>
        <div className="col-7">
            <input type="number" id="points" className="form-control" defaultValue="100" max="100" min="0"
            name="points"
            onChange={handleChange}/>
        </div>
      </div>
      <div className="row mb-5 g-3">
        <div className="col-3 text-end">
          <label htmlFor="assign">Assign</label>
        </div>
        <div className="col-7">
          <div className="border rounded">
            <div className="my-3 mx-3">
              <label htmlFor="due-date" className="fw-bold">Due</label>
              <input type="date" className="form-control mb-3" defaultValue={assignment?.dueDate} 
                name="dueDate" id="due-date"
                onChange={handleChange}/>

              <div className="row"> 
                <div className="col">
                  <label htmlFor="a-date" className="col-form-label fw-bold">Available from</label>
                </div>
                <div className="col">
                  <label htmlFor="until-date" className="col-form-label fw-bold">Until</label>
                </div>
              </div>
              <div className="row g-2 mb-4">
                <div className="col">
                  <input type="date" className="form-control" defaultValue={assignment?.availableDate} id="a-date" 
                  name="availableDate"
                  onChange={handleChange} />
                </div>
                <div className="col">
                  <input type="date" className="form-control" defaultValue={assignment?.untilDate} id="until-date"
                  name="untilDate" 
                  onChange={handleChange}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light btn-outline-secondary float-end">
        Cancel
      </Link>
      </>
    </div>
  );
}
export default AssignmentEditor;