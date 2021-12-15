import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Login from "./Components/Auth/Login/Login";
import ContentDetails from "./Components/Details/ContentDetails";
import Home from "./Components/Home/Home";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contentdetail/:id" element={<ContentDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
