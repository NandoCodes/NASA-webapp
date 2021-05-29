import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import NasaService from "../services/nasa-api.service";
import Pagination from "./Pagination";

import "./CSS/pagination.css";
import "./CSS/images.css";

const RandomImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    NasaService.getNasaRandomImages()
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
