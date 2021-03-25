import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import ImagesService from "../services/images.service";
import Pagination from "./Pagination";
import "./CSS/images.css";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";

const SearchImages = () => {
  const [images, setImages] = useState([]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [focus, setFocus] = useState(null);

  const isOutsideRange = (day) =>
    day.isAfter(new Date()) || day.isBefore(new Date("1996-06-16"));

  useEffect(() => {
    if (startDate != null && endDate != null) {
      ImagesService.getSearchedImages(startDate, endDate)
        .then((response) => {
          setImages(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [startDate, endDate]);

  const onDatePicked = (startDateInput, endDateInput) => {
    setStartDate(startDateInput);
    setEndDate(endDateInput);
  };

  return (
    <Container className="mainContainer">
      <Row>
        <h2>Search Images</h2>
      </Row>
      <Row className="mt-3" style={{ justifyContent: "center" }}>
        <h4 style={{ color: "black", marginRight: "1em" }}>
          Search by Date Range:
        </h4>
        <DateRangePicker
          startDate={startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>onDatePicked(startDate, endDate)} 
          focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => setFocus(focusedInput)} // PropTypes.func.isRequired,
          isOutsideRange={isOutsideRange}
        />
      </Row>
      <Pagination images={images}></Pagination>
    </Container>
  );
};

export default SearchImages;
