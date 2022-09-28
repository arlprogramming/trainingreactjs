import React, { Component } from "react";

class Classcomponent extends Component {
  //menggunakan useState di ClassComponent, bentuknya object
  state = {
    counter: 0,
    players: ["Jordan", "Lebron", "Curry"],
  };

  addCounter = () => {
    this.setState({ counter: 12 });
  };

  render() {
    return <div></div>;
  }
}

export default Classcomponent;
