
import React from "react";


class LoginInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "test"
    }
  }
  render() {
    return (
      <div>
        <input value={this.state.value} />
        <h2>it's a gift for you.</h2>
      </div>
    )
  }
}

export default LoginInput;
