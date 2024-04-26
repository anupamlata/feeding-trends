
import Toggle from './Toggle';
import Alert from './Alert';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
    <Routes> 
        <Route path="/toggle"  element={<Toggle />} /> 
       <Route path="/alert" element={<Alert/>} /> 
      </Routes> 
    </Router>
  );
}

export default App;
