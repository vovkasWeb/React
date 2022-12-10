/** @format */

import "./App.css";
import React from "react";
import Header from "./Header";
import About from "./About";
import Users from "./Users";
import Main from "./Main";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import UsersId from "./UserId";
import Error from "./Error";
import { useState } from "react";

function App() {
  let a = 5;
  let textInput = React.createRef();
  let textOut = React.createRef();
  const [output, setOutput] = useState('');
  const f1 = (arg) => {
    console.log("f1 work" + arg);
  };
  const f2 = () => {
    console.log("move");
  };
  function showInput() {
    console.log("WORK");
    console.log(textInput.current.value);
	 setOutput(textInput.current.value);
  }
  return (
    <>
      <>
        {/* <Header />
      <BrowserRouter>
        <nav>
          <li><NavLink to="/">MAIN</NavLink></li>
			 <li><NavLink to="/about">About</NavLink></li>
			 <li><NavLink to="/users">Users</NavLink></li>
        </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={<Main />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            exact
            path="/users"
            element={<Users />}
          />
          <Route
            exact
            path="/users/:userName"
            element={<UsersId />}
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </BrowserRouter> */}
      </>
      <h1>Cобытия</h1>
      <section>
        <h2>Button</h2>
        <button onClick={() => f1(1)}>Push</button>
      </section>
      <section>
        <h2> duble click Button</h2>
        <div
          className="test"
          onDoubleClick={() => f1(2)}
          onMouseMove={f2}></div>
      </section>
      {/* <section>
        <h2>Input</h2>
        <input
          type="text"
          onInput={showInput}
          ref={textInput}
          defaltValue="HI"
        />
        <p> ref={textOut}</p>
      </section> */}
		<section>
        <h2> hyke</h2>
        <input
          type="text"
          onInput={showInput}
          ref={textInput}
        />
			<h3>{output}</h3>
      </section>
    </>
  );
}

export default App;
