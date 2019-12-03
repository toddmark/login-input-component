import React from "react";
import ReactDOM from "react-dom";
// import toddmark from "@toddmark/login-input-component";
import toddmark from "../../src/index";

class Test extends React.Component {

  render() {
    console.log(toddmark);
    return (
      <div>
        <h5>
          Component: 1
        </h5>
        <toddmark.one />
        <h5>
          Component: 2
        </h5>
        <toddmark.two />
      </div>
    )
  }
}

export default Test;

ReactDOM.render(<Test />, document.getElementById("root"));
