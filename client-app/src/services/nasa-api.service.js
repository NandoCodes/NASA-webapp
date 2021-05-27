import axios from "axios";

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

const getSearchedImages = (startDate,endDate) => {
  const date1=startDate.format('YYYY-MM-DD');
  const date2=endDate.format('YYYY-MM-DD');
  console.log(date1+" "+date2);
  return axios.get(`${NASA_URL}?api_key=${api_key}&start_date=${date1}&end_date=${date2}`);
};

export default {
  getNasaImage,
  getNasaRandomImages,
  getSearchedImages
};
