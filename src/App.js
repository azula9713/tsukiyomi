import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useQuery } from "react-query";

import "./App.css";
import { selectUser, setUserLoginDetails } from "./App/Features/User/UserSlice";
import { validateUser } from "./App/Api/Auth.api";
import Login from "./Components/Auth/Login/Login";
import ContentDetails from "./Components/Details/ContentDetails";
import Home from "./Components/Home/Home";
import Welcome from "./Components/Welcome/Welcome";
import CommonLoader from "./Components/Loaders/CommonLoader";

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectUser);

  const { isLoading: validating } = useQuery("validateToken", validateUser, {
    enabled:
      !loggedInUser.isLoggedIn && localStorage.getItem("refreshtoken") !== null,
    retry: false,
    onSuccess: (res) => {
      if (res.status === 200) {
        const user = res.data;

        dispatch(
          setUserLoginDetails({
            name: user.firstName + " " + user.lastName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      } else {
        //Add error handling
      }
    },
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={validating ? <CommonLoader /> : <Welcome />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contentdetail/:id" element={<ContentDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
