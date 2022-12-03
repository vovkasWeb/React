/** @format */

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://www.svgrepo.com/show/303340/woocommerce-logo.svg" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" />
        </div>
        <div>ava + description</div>
        <div>
          My posts
          <div>Mew post</div>
			 <div>
				<div>post 1</div>
				<div>post 2</div>
			 </div>
        </div>
      </div>
    </div>
  );
}

export default App;
