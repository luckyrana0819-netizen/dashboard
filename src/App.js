// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import Signup from "./signup/Signup";
import Login from "./signup/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <Login /> : <Signup />}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {showLogin ? (
          <button onClick={() => setShowLogin(false)}>
            Go to Signup
          </button>
        ) : (
          <button onClick={() => setShowLogin(true)}>
            Go to Login
          </button>
        )}
      </div>
    </div>
  );
}

export default App;