/** @format */

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
		text: '+++'
    };
  }
  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
		text: state.text +"+"
    }));
  };
  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name},surname- {surname}, age-{this.state.years}
        </h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <WhoAmI
        name="John"
        surname="Smith"
        link="facbook.com"
      />
      <WhoAmI
        name="Alex"
        surname="Smith"
        link="Vk.com"
      />
    </div>
  );
}

export default App;
