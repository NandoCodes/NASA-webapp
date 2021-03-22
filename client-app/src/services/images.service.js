import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:9000/nasa/test/";
const NASA_URL = "https://api.nasa.gov/planetary/apod";
const api_key = "fPtAONuB5dsPgnfAMjBmN6pifyKhHcSHtIohgFLD";

var today = new Date();
const todayDate =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const getNasaImage = () => {
  return axios.get(`${NASA_URL}?api_key=${api_key}&date=${todayDate}`);
};

const getNasaRandomImages = () => {
  return axios.get(`${NASA_URL}?api_key=${api_key}&count=100`);
};

const getNasaImagesDates = (startDate,endDate) => {
  return axios.get(`${NASA_URL}?api_key=${api_key}&start_date=${startDate}&end_date=${endDate}`);
};

export default {
  getNasaImage,
  getNasaRandomImages,
  getNasaImagesDates
};
