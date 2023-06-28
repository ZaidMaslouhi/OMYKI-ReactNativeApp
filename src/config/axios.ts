import { API_BASE } from "@env";
import axios from "axios";

const AxiosClient = axios.create({
  baseURL: API_BASE,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer <TOKEN>",
    validateStatus: false,
  },
});

export default AxiosClient;
