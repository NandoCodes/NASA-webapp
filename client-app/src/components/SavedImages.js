import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import ImageService from "../services/images.service";
import Pagination from "./Pagination";

import "./CSS/pagination.css";
import "./CSS/images.css";

const SavedImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    ImageService.getUserImages()
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="mainContainer">
      <Row>
        <h2>Saved Images</h2>
      </Row>
      <Pagination images={images} />
    </Container>
  );
};

export default SavedImages;
