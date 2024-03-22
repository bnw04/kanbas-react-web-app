import React, { useState } from "react";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", 
    completed: false, score: 0,
  });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"

  const [module, setModule] = useState({
    id: "module123",
    name: "Web Development",
    description: "Learn about developing modern web applications",
    course: "CS5610"
  });
  const MODULE_URL = "http://localhost:4000/a5/module"

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>

      <h5>Assignment</h5>
      <input type="text" className="me-4 " 
        onChange={ (e) => setAssignment({ ...assignment, title: e.target.value }) }
        value={assignment.title}/>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title || "?empty=true"}`} className="btn btn-primary mb-2 me-4 ">
        Update Assignment Title
      </a>
      <input type="number" className="me-4 " 
        onChange={ (e) => setAssignment({ ...assignment, score: e.target.valueAsNumber }) }
        value={assignment.score}/>
      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`} className="btn btn-primary mb-2 ">
        Update Assignment Score
      </a>
      <label className="form-control mb-2">
        <input type="checkbox" checked={assignment.completed}
              onChange={(e) => setAssignment({...assignment, completed: e.target.checked})} />
        Completed
      </label>
      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`} className="btn btn-primary mb-2 ">
        Update Assignment Completion Status
      </a>
      <h5>Module</h5>
      <div className="mb-2">
        <input type="text" className="me-4"
          onChange={ (e) => setModule({ ...module, name: e.target.value }) }
          value={module.name}/>
        <a href={`${MODULE_URL}/name/${module.name || "?empty=true"}`} className="btn btn-warning me-4">
          Update Module Name
        </a>
      </div>
      <textarea className="form-control mb-2"
        onChange={ (e) => setModule({ ...module, description: e.target.value }) }
        value={module.description}/>
      <a href={`${MODULE_URL}/description/${module.description || "?empty=true"}`} 
        className="btn btn-warning">
        Update Module Description
      </a>

      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment" className="btn btn-primary me-4 ">
        Get Assignment
      </a>
      <a href="http://localhost:4000/a5/module" className="btn btn-warning">
        Get Module
      </a>

      <h4>Retrieving Properties</h4>
      <div className="mb-2">  
        <a href="http://localhost:4000/a5/assignment/title" className="btn btn-primary me-2">
          Get Title
        </a>
        <a href="http://localhost:4000/a5/assignment/completed" className="btn btn-primary me-2">
          Get Completion Status
        </a>
        <a href="http://localhost:4000/a5/assignment/score" className="btn btn-primary">
          Get Score
        </a>
      </div>
      <a href="http://localhost:4000/a5/module/name" className="btn btn-warning me-2">
        Get Module Name
      </a>
      <a href="http://localhost:4000/a5/module/description" className="btn btn-warning">
        Get Module Description
      </a>
      

      
      
    </div>
  );
}
export default WorkingWithObjects;