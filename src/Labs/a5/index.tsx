import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <a href="http://localhost:4000/a5/welcome" 
        className="form-control border text-reset text-decoration-none mb-2">
        Welcome
      </a>
      <EncodingParametersInURLs />
      <WorkingWithObjects/>
      <WorkingWithArrays/>

    </div>
  );
}
export default Assignment5;