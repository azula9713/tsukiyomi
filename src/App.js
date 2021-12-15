import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import jwt_decode from "jwt-decode";

import "./App.css";
import { selectUser, setUserLoginDetails } from "./App/Features/User/UserSlice";
import Login from "./Components/Auth/Login/Login";
import ContentDetails from "./Components/Details/ContentDetails";
import Home from "./Components/Home/Home";
import Welcome from "./Components/Welcome/Welcome";
import { getSessions } from "./App/Api/Auth.api";

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectUser);

  const validateSession = async () => {
    const res = await getSessions();
    console.log(res);
    if (res.status === 200) {
      const decoded = jwt_decode(localStorage.getItem("refreshtoken"));
      dispatch(
        setUserLoginDetails({
          name: decoded.firstName + " " + decoded.lastName,
          email: decoded.email,
          photo: decoded.photoURL,
        })
      );
    }
  };

  useEffect(() => {
    if (!loggedInUser.isLoggedIn && localStorage.getItem("refreshtoken")) {
      validateSession();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser.isLoggedIn]);

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
