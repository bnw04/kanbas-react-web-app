import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../../Database"
import "./index.css"; 

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === courseId);

  return (
    <>
      <ul className="wd-navigation">
        <li className="wd-overflow">
          {course?.number} {course?.name} {course?.startDate}
        </li>
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
            <Link to={link}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default CourseNavigation;