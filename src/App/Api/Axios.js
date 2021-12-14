import axios from "axios";

import { apiServer } from "../Utils/Variables";

const api = axios.create({
  baseURL: `${apiServer}/api/v1`,
});

export default api;
