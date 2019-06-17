import React from "react";
import ReactDOM from "react-dom";
import toddmark from "@toddmark/login-input-component";


class Test extends React.Component {

  render() {
    console.log(toddmark);
    return (
      <div>
        <toddmark.one />
        <toddmark.two />
      </div>
    )
  }
}

export default Test;

ReactDOM.render(<Test />, document.getElementById("root"));
