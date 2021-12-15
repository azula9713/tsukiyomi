import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Login from "./Components/Auth/Login/Login";
import MovieDetails from "./Components/Details/MovieDetails";
import ContentDetails from "./Components/Details/MovieDetails";
import Home from "./Components/Home/Home";
import CommonLoader from "./Components/Loaders/CommonLoader";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/lol" element={<CommonLoader />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
