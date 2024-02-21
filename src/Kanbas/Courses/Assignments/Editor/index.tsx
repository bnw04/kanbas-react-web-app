import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();

  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);


  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
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
      <input value={assignment?.title} id="assignmentName"
             className="form-control mb-2" />
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