import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import ImagesService from "../services/images.service";
import Pagination from "./Pagination";

import "./CSS/pagination.css";
import "./CSS/images.css";

const RandomImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    ImagesService.getNasaRandomImages()
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="mainContainer">
      <Row>
        <h2>Random Images</h2>
      </Row>
      <Pagination images={images} />
    </Container>
  );
};

export default RandomImages;
