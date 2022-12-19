import React from "react";
import "./../styles/index.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const counterRef = React.useRef({ counter: 0 });
  return (
    <div className="App">
      <p>Contador: {counterRef.current.counter}</p>
      <button onClick={() => counterRef.current.counter++}>Somar</button>
      <button
        onClick={() => navigate("/login")}
        style={{ backgroundColor: "red" }}
      >
        Login
      </button>
    </div>
  );
}

export default App;
