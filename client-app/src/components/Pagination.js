import { useState } from "react";

import "./CSS/pagination.css";

import { Row, Col } from "react-bootstrap";

import Modal from "./Modal";

const Pagination = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [pageNumberLimit, setpageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(images.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const renderData = (images) => {
    const handleClick = (e) => {
      console.log(e.currentTarget.getAttribute("myValue"));
      openModal(e.currentTarget.getAttribute("myValue"));
    };
    const arrRows = [];
    for (let i = 0; i < images.length; i++) {
      if (i % 2 != 0) {
        arrRows.push(
          <Row key={i} className="mt-3">
            <Col>
              <img
                src={images[i - 1].url}
                myvalue={JSON.stringify(images[i - 1])}
                style={{ width: "100%", height: "100%", cursor: "pointer" }}
                onClick={handleClick}
              ></img>
            </Col>
            <Col>
              <img
                src={images[i].url}
                myvalue={JSON.stringify(images[i])}
                style={{ width: "100%", height: "100%", cursor: "pointer" }}
                onClick={handleClick}
              ></img>
            </Col>
          </Row>
        );
      } else if (i % 2 === 0 && ((i + 1) === images.length)) {
        arrRows.push(
        <Row key={i} className="mt-3">
          <Col>
            <img
              src={images[i].url}
              myvalue={JSON.stringify(images[i])}
              style={{ width: "100%", height: "100%", cursor: "pointer" }}
              onClick={handleClick}
            ></img>
          </Col>
          <Col></Col>
        </Row>);
      }
    }
    return arrRows;
  };

  const [latestClickedImage, setLatestClickedImage] = useState([]);
  const openModal = (image) => {
    setIsOpen(true);
    setLatestClickedImage(JSON.parse(image));
  };
  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        image={latestClickedImage}
      ></Modal>

      {renderData(currentImages)}

      <Row className="pageNumbers">
        <ul>
          <li>
            <button
              onClick={handlePrevbtn}
              disabled={currentPage == pages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          {renderPageNumbers}

          <li>
            <button
              onClick={handleNextbtn}
              disabled={currentPage == pages[pages.length - 1] ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </Row>
    </>
  );
};
export default Pagination;
