import axios from "axios";
import authHeader from "./auth-header";

const GATEWAY_URL = "http://localhost:9191/images/";

const checkExistance = (image) => {
  return axios
    .post(
      GATEWAY_URL + "checkExists",
      {
        title:  image.title,
        explanation:image.explanation,
        url:image.url,
        date:image.date,
      },
      { headers: authHeader() }
    )
    .then((response) => {
      if (response.status === 200) {
        return true;
      } else return false;
    })
    .catch((error) => {
      console.error("There was an error checking existance!", error);
    });
};

const saveImage = (image) => {
  return axios
    .post(
      GATEWAY_URL + "saveImage",
      {
        title: image.title,
        explanation: image.explanation,
        date: image.date,
        url: image.url,
      },
      { headers: authHeader() }
    )
    .catch((error) => {
      console.error("There was an error saving image!", error);
    });
};

const deleteImage = (image) => {
  return axios
    .post(
      GATEWAY_URL + "deleteImage",
      {
        title: image.title,
        explanation: image.explanation,
        date: image.date,
        url: image.url
      },
      { headers: authHeader() }
    )
    .catch((error) => {
      console.error("There was an error deleting image!", error);
    });
};

export default {
  checkExistance,
  saveImage,
  deleteImage,
};
