import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelopeOpenText,
  FaHistory, FaDesktop, FaRegArrowAltCircleRight, FaQuestionCircle } from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 wd-account-icon" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",     icon: <FaEnvelopeOpenText className="fs-2" /> },
    { label: "History",   icon: <FaHistory className="fs-2" /> },
    { label: "Studio",    icon: <FaDesktop className="fs-2" /> },
    { label: "Commons",   icon: <FaRegArrowAltCircleRight className="fs-2" /> },
    { label: "Help",      icon: <FaQuestionCircle className="fs-2" /> }
  ];
  const { pathname } = useLocation();

  return (
    <div className="wd-height">
      <ul className="wd-kanbas-navigation">
        <li className="neu-icon">
          <Link to='/Kanbas/Dashboard'>
            <img src={`/images/logo.jpg`}/>
          </Link>
        </li>
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}> 
              {link.icon} {link.label} 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;