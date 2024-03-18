import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus, FaCaretRight, FaCaretDown} from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  
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

      <ul className="list-group">
        <li className="list-group-item">
          <div className="row align-items-center mb-2">
            <div className="col-6 col-md-4">
              <input className="form-control" value={module.name}
                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
              />
            </div>
            <div className="col-md-auto">
              <button className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>
                Update
              </button>
              <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                Add
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-4">
              <textarea className="form-control" value={module.description}
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
              />
            </div>
          </div>
        </li>
      </ul>

      <ul className="list-group wd-modules">

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              <FaCaretRight className="me-2" />
              {module.name}
              <span className="float-end ">
                <button className="btn btn-danger delete-button me-2"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                <button className="btn btn-success delete-button me-2"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>


                <FaCheckCircle className="text-success" />
                <FaCaretDown />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>

            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map(
                  (lesson: any) => (
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