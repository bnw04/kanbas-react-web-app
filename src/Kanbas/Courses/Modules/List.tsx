import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus, FaCaretRight, FaCaretDown} from "react-icons/fa";
import { useParams } from "react-router";


function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (

    <>

      <div className="d-flex flex-row justify-content-end straight-button my-4 ">
        <button className="btn btn-light btn-outline-secondary">Collapse All</button>
        <button className="btn btn-light btn-outline-secondary">View Progress</button>
        <div className="dropdown">
          <button className="btn btn-light btn-outline-secondary dropdown-toggle" 
            type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <FaCheckCircle className="ms-2 text-success" /> Publish All
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li className="dropdown-item">Publish</li>
          </ul>
        </div>
        <button className="btn btn-danger">
        <FaPlus className="mx-2 mb-1"/>Module</button>
        <button className="btn btn-light btn-outline-secondary">
          <FaEllipsisV className="mb-1"/>
        </button>
      </div>

      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              <FaCaretRight className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaCaretDown />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>

            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;