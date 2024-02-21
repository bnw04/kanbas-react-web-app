import Nav from "../Nav";
import Assignment3 from "./a3";
import { Routes, Route, Link, Navigate } from "react-router-dom";


function Labs() {
  return (
    <div className="container-fluid">
      <h1>Labs</h1>
      <Nav />
      <Link to="/Labs/a3">Assignment 3</Link> |
      <Link to="/Labs/a4">Assignment 4</Link>

      <Routes>
        <Route path="/" element={<Navigate to="a3"/>} />
        <Route path="/a3/*" element={<Assignment3 />} />

      </Routes>
    </div>
  );
}
export default Labs;
