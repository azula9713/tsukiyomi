import api from "./Axios";

export const loginUser = async ({ email, password }) => {
  const res = await api.post("/sessions/login", {
    email,
    password,
  });

  return res;
};

export const getSessions = async () => {
  const res = await api.get("/sessions", {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      "x-refresh": localStorage.getItem("refreshtoken"),
    },
  });
  return res;
};

export const validateUser = async () => {
  const res = await api.get("/sessions/validate", {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      "x-refresh": localStorage.getItem("refreshtoken"),
    },
  });
  return res;
};

export const logoutUser = async () => {
  const res = await api.patch(
    "/sessions/logout",
    {},
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        "x-refresh": localStorage.getItem("refreshtoken"),
      },
    }
  );
  return res;
};
