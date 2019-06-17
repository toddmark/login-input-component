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
        <p>maybe I can try another thing. But don't give up something easliy especially </p>
      </div>
    )
  }
}

export default Test;

ReactDOM.render(<Test />, document.getElementById("root"));
