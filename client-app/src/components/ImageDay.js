import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

import ImagesService from "../services/nasa-api.service";
import Modal from "./Modal";

import "./CSS/images.css";

const ImageDay = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    ImagesService.getNasaImage()
      .then((response) => {
        setImage(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [isOpen,setIsOpen]=useState(false);
  return (
    <Container className="mainContainer">
      <Row>
        <h2>Image of the Day</h2>
      </Row>
      <Row>
        <Card className="align-items-center" style={{ heigth: "60%" }}>
          <Card.Img variant="top" src={image.url} style={{cursor: "pointer"}} onClick={()=> setIsOpen(true)} />
          <Modal open={isOpen} onClose={()=>setIsOpen(false)} image={image}></Modal>
          <Card.Body className="bg-light">
            <Card.Title>{image.title}</Card.Title>
            <Card.Text>{image.explanation}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default ImageDay;
