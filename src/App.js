import { useSelector } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { selectUser } from "./App/Features/User/UserSlice";
import RequireAuth from "./App/Services/AuthGuard.service";
import Login from "./Components/Auth/Login/Login";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  const loggedInUser = useSelector(selectUser);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth auth={loggedInUser.isLoggedIn}>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
