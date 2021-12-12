import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import jwt_decode from "jwt-decode";

import "./App.css";
import { selectUser, setUserLoginDetails } from "./App/Features/User/UserSlice";
import RequireAuth from "./App/Services/AuthGuard.service";
import Login from "./Components/Auth/Login/Login";
import ContentDetails from "./Components/Details/ContentDetails";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectUser);

  useEffect(() => {
    if (!loggedInUser.isLoggedIn && localStorage.getItem("refreshtoken")) {
      //ToDo:Should validate the token
      const decoded = jwt_decode(localStorage.getItem("refreshtoken"));
      dispatch(
        setUserLoginDetails({
          name: decoded.firstName + " " + decoded.lastName,
          email: decoded.email,
          photo: decoded.photoURL,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* ToDp:Add route guards */}
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
