import { Navigate } from "react-router";

const RequireAuth = ({ children, auth }) => {
  return auth === true ? children : <Navigate to="/" />;
};

export default RequireAuth;
