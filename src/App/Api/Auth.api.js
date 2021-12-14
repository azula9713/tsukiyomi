import api from "./Axios";

export const loginUser = async (email, password) => {
  try {
    const res = await api.post("/sessions/login", {
      email,
      password,
    });

    localStorage.setItem("accesstoken", res.data.accessToken);
    localStorage.setItem("refreshtoken", res.data.refreshToken);

    return res.data.user;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const getSessions = async () => {
  try {
    const res = await api.get("/sessions", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        "x-refresh": localStorage.getItem("refreshtoken"),
      },
    });
    return res.data;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const logoutUser = async () => {
  try {
    const res = await api.patch(
      "/sessions/logout",
      {},
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err.response.data);
  }
};
