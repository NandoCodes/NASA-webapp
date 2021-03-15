import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:9000/nasa/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};


export default {
  getPublicContent,
  getUserBoard,
};