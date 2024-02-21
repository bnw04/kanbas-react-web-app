import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport, FaCaretDown, FaKeyboard } from "react-icons/fa"
import { FaGear, FaMagnifyingGlass, FaFilter } from "react-icons/fa6";
import { PiCaretDown } from "react-icons/pi";
import "./index.css"

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  
  return (
    <div className="mt-4 me-2">
      <div className="row">
        <div className="col wd-table-name">
          <div className="d-flex justify-content-between">
            <div className="dropdown">
                <button className="btn btn-white text-danger dropdown-toggle" 
                  type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Gradebook
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">Grades</li>
                </ul>
            </div> 
            <FaKeyboard className="mt-3"/>
          </div>
        </div>
        <div className="col mb-2">
          <div className="d-flex justify-content-end mb-2">
            <button type="button" className="me-2 btn btn-light btn-outline-secondary">
                <FaFileImport className="mb-1 me-2"/>
                Import
            </button>
            <div className="dropdown me-2">
              <button className="btn btn-light btn-outline-secondary dropdown-toggle" 
                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FaFileExport className="mb-1 me-2"/>
                  Export
              </button>
              <ul className="dropdown-menu">
                  <li className="dropdown-item">Publish All</li>
              </ul>
            </div>
            <button type="button" className="btn btn-light btn-outline-secondary">
              <FaGear className="mb-1"/>
            </button>
          </div>
        </div>
      </div>

      <div className="row mb-2 g-2">
        <div className="col">
          <label htmlFor="search-stu" className="fw-bold mb-2">Student Names</label>
          <div className="input-group mb-2">
            <span className="input-group-text" id="magni1">
              <FaMagnifyingGlass />
            </span>
            <input type="text" className="form-control" id="search-stu"
              placeholder="Search Students" aria-label="search-stu" aria-describedby="magni1"/>
            <span className="input-group-text bg-light">
              <PiCaretDown />
            </span>
          </div>
          <button className="btn btn-light btn-outline-secondary px-3">
            <FaFilter />
            Apply Filters
          </button>
        </div>
        <div className="col">
          <label htmlFor="search-assi" className="fw-bold mb-2">Assignment Names</label>
          <div className="input-group">
            <span className="input-group-text" id="magni2">
              <FaMagnifyingGlass />
            </span>
            <input type="text" className="form-control" id="search-assi"
              placeholder="Search Assignments" aria-label="Username" aria-describedby="magni2"/>
            <span className="input-group-text bg-light">
              <PiCaretDown />
            </span>
          </div>    
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered wd-table">
          <thead className="border">
            <th className=""> Student Name</th>
            {as.map((assignment) => (<th className="wd-table-assi">
                {assignment.title}<br/>Out of {assignment.points}
              </th>))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return ( user?.role === 'STUDENT' &&
                <tr>
                   <td className="wd-table-name">{user?.firstName} {user?.lastName}</td>
                   {assignments.map((assignment) => {
                     const stu_grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (
                        courseId === assignment.course && 
                        <td className="wd-table-assi">{stu_grade?.grade || ""}%</td>);})}
                </tr> );
            })}
          </tbody></table>
      </div></div>
      );
}

export default Grades;
