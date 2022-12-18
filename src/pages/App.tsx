import './../styles/index.css';
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={() => navigate("/login")} style={{backgroundColor: 'red'}}>Login</button>
    </div>
  );
}

export default App;
