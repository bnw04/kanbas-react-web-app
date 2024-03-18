import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseBar from "./CourseBar";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";


function Courses( { courses }: { courses: any[]; } ) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  const [mdScreen, setMd] = useState(window.innerWidth >= 768);
  useEffect(() => {
    function handleResize() {
      setMd(window.innerWidth >= 768); 
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  


  return (
    <div>
      <CourseBar 
        courses={courses} />
      <div>
        <CourseNavigation />
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{top: "50px", left: mdScreen ? "320px" : "0px"}}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

    </div> 
  );
}
export default Courses;