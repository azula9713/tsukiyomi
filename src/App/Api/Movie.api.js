import api from "./Axios";

export const getAllMovies = async () => {
  const res = await api.get("/movies", {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      "x-refresh": localStorage.getItem("refreshtoken"),
    },
  });

  return res;
};

export const getMovieData = async (id) => {
  const res = await api.get(`/movies/${id}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      "x-refresh": localStorage.getItem("refreshtoken"),
    },
  });

  return res;
};
