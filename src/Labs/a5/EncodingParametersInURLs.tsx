import React, { useState } from "react";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input type="number" className="form-control mb-2"
        value={a}
        onChange={(e: any) => setA(e.target.value)}/>
      <input type="number" className="form-control"
        onChange={(e: any) => setB(e.target.value)} value={b}/>
      <h3>Path Parameters</h3>
      <a href={`http://localhost:4000/a5/add/${a}/${b}`} className="btn btn-primary me-2">
        Add {a} + {b}
      </a>
      <a href={`http://localhost:4000/a5/subtract/${a}/${b}`} className="btn btn-danger me-2">
        Substract {a} - {b}
      </a>
      <a href={`http://localhost:4000/a5/multiply/${a}/${b}`} className="btn btn-success me-2">
        Multiply {a} * {b}
      </a>
      <a href={`http://localhost:4000/a5/divide/${a}/${b}`} className="btn btn-warning">
        Divide {a} / {b}
      </a>

      <h3>Query Parameters</h3>
      <a className="btn btn-primary me-2"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger me-2"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Substract {a} - {b}
      </a>
      <a className="btn btn-success me-2"
        href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} * {b}
      </a>
      <a className="btn btn-warning"
        href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divide {a} / {b}
      </a>

    </div>
  );
}
export default EncodingParametersInURLs;