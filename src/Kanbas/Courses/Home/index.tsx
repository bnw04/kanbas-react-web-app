import ModuleList from "../Modules/List";
import Status from "./Status";

function Home() {
  return (
    <div className="d-flex">

      <div className="flex-fill">
        <ModuleList />
      </div>
      <div className="flex-grow-0 mx-4 d-none d-lg-block" style={{width: "250px"}}>
        <Status />
      </div>

    </div>
  );
}
export default Home;