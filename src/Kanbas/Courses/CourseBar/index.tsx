import { courses } from "../../../Kanbas/Database";
import { useParams, useLocation, Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { PiEyeglassesBold } from "react-icons/pi";
import "./index.css";

function CourseBar() {
  const { courseId } = useParams();
  const course = courses.find((c) => c._id === courseId);
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const navPaths = paths.slice(paths.findIndex((p) => p === courseId) + 1);

  return (
    <div className="mx-3 my-1">
      <div className="d-none d-md-flex  my-2 align-items-center ">
        <HiMiniBars3 className="course-red-icon"/>
        <nav className="breadcrumbNav" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to={`../Courses/${courseId}`} className= "course-red-bar"
                style={{ textDecoration: "none" }}>
                {course?.number} {course?.sec} {course?.semester}
              </Link>
            </li>

            {navPaths.map((path, index) => {
              let navAcvtive = "";
              {index === navPaths.length - 1 ? navAcvtive = "active": navAcvtive=""}

              return (
                <>
                  {navAcvtive === "" 
                  ? <li className="breadcrumb-item">
                      <Link to={`../Courses/${courseId}/${path}`} className= "course-red-bar"
                        style={{ textDecoration: "none" }}>
                        {path}
                      </Link>
                    </li>
                  : <li className={`breadcrumb-item ${navAcvtive}`} aria-current="page">
                    {path}
                    </li>
                  }
                  
                  
                </>
              );
            })}
          </ol>
        </nav>

        <div className="ms-auto mb-0">
          <button className="btn btn btn-light float-end glasses-icon">
            <PiEyeglassesBold />
            Student View
          </button>
        </div>
      </div>
      <hr className="mt-0"/>
    </div>
  );
}

export default CourseBar;
      