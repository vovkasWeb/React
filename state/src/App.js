/** @format */

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+++",
		position: "",
    };
  }
  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
      text: state.text + "+",
      
    }));
  };
  commitInputChanges = (e,color) =>  {
	console.log(color);
		this.setState({
			position: e.target.value
		})
	};

  render() {
    const { name, surname, link } = this.props;
	 const {position,years,text} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>{text}</button>
        <h1>
          My name is {name},
			 surname- {surname}, 
			 age-{years},
			  position = {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введение должность</span>
          <input
            type="text"
            onChange={(e)=>this.commitInputChanges(e,"some color")}
          />
        </form>
      </>
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
