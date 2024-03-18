import { FaCheckCircle,FaFileImport,FaRegArrowAltCircleRight, FaBullseye, 
  FaChartBar, FaRegBell, FaBan } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { PiNumberCircleFiveFill } from "react-icons/pi";
import { FaXmark } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { assignments } from "../../../Database";
import "./index.css";
import formatDate from "../../Assignments/dateFormat";

function Status() {

  const buttons = [
    { text: "Import Existing Content", icon:  <FaFileImport />},
    { text: "Import From Commons", icon: <FaRegArrowAltCircleRight />},
    { text: "Choose Home Page", icon: <FaBullseye /> },
    { text: "View Course Stream", icon: <FaChartBar /> },
    { text: "New Announcement", icon: <GrAnnounce />},
    { text: "New Analytics", icon: <FaChartBar /> },
    { text: "View Course Notifications", icon: <FaRegBell />},]

    const { courseId } = useParams();
    const todos = assignments.filter(
      (assignment) => assignment.course === courseId);

  return (
    <>

    <h4 className="mt-4">Course Status</h4>
    <hr/>
    <div className="d-flex button-one mb-4">
      <button
        type="button" className="btn btn-light btn-outline-secondary">
        <FaBan /> Unpublish
      </button>
      <button type="button" className="btn btn-success" disabled>
          <FaCheckCircle /> Published
      </button>
    </div>

    <div className="button-two mb-3">
        {buttons.map((btn, index) => (
          <button
            type="button"
            className="btn btn-light btn-outline-secondary mt-1">
            {btn.icon} {btn.text}
            </button>
        )
        )}
    </div>

    <h4>To-Do</h4>
    <hr/>
    {todos.map((item, index) => (
      <div className="d-flex" key={index}>
        <PiNumberCircleFiveFill className="text-danger fs-4 me-2"/>
        <p className="todo-grade">
          Grade {item.title} <br/>
          <span className="todo-grade-small m-0"> {item.points} points • {formatDate(item.dueDate)} at 11:59pm</span>
        </p>
        <div className="ms-auto">
          <FaXmark />
        </div>
      </div>
            ))}


      
    </>
  );
}
export default Status;