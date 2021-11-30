import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
