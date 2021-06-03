import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ImageService from "../services/images.service";
import Pagination from "./Pagination";

import "./CSS/pagination.css";
import "./CSS/images.css";

const SavedImages = () => {
  const [images, setImages] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [sortField, setSortField] = useState("date");

  useEffect(() => {
    ImageService.getUserImages(keyword, sortField)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.log(error));
  }, [keyword, sortField]);

  return (
    <Container className="mainContainer">
      <Row>
        <h2>Saved Images</h2>
      </Row>
      <Row>
        <Col>
          <label>Search images explanation:</label>
          <input
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            type="text"
          />
        </Col>
        <Col>
          <label>Sort By:</label>
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="title">Title</option>
          </select>
        </Col>
      </Row>
      <Pagination images={images} />
    </Container>
  );
};

export default SavedImages;
