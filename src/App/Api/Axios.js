import axios from "axios";

import { apiServer } from "../Utils/Variables";

const api = axios.create({
  baseURL: `${apiServer}/api/v1`,
  headers: {
    "Content-Type": "application/json",
    "x-refresh": localStorage.getItem("refreshtoken"),
    authorization: localStorage.getItem("accesstoken"),
  },
});

export default api;
