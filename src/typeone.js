
import React from "react";


class LoginInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "default"
    }
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={value => this.setState({value: value.target.value})} />
        123
      </div>
    )
  }
}

export default LoginInput;
