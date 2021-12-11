import api from "./Axios";

export const loginUser = async (email, password) => {
  try {
    const res = await api.post("/sessions/login", {
      email,
      password,
    });

    sessionStorage.setItem("accesstoken", res.data.accessToken);
    localStorage.setItem("refreshtoken", res.data.refreshToken);

    return res.data.user;
  } catch (err) {
    alert(err.response.data);
    console.log(err.response.data);
  }
};
