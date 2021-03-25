import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

import ImagesService from "../services/images.service";

import "./CSS/images.css";

const ImageDay = () => {
  const [image, setImage] = useState("");
  const [explanation, setExplanation] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    ImagesService.getNasaImage()
      .then((response) => {
        setImage(response.data.url);
        setTitle(response.data.title);
        setExplanation(response.data.explanation);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="mainContainer">
      <Row>
        <h2>Image of the Day</h2>
      </Row>
      <Row>
        <Card className="align-items-center" style={{ heigth: "60%" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body className="bg-light">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{explanation}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default ImageDay;
