import api from "./Axios";

export const getAllMovies = async () => {
  try {
    const movies = await api.get("/movies", {
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      // },
    });

    return movies.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieData = async (id) => {
  try {
    const movie = await api.get(`/movies/${id}`, {
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      // },
    });

    return movie.data;
  } catch (err) {
    console.log(err);
  }
};
