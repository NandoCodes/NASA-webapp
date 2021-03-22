import { useState, useEffect } from "react";

import "../App.css";
import ImagesService from "../services/images.service";
import { Container,Row,Col } from "react-bootstrap";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { isInclusivelyBeforeDay,isInclusivelyAfterDay } from 'react-dates';








const SearchImages = () => {
  const [images, setImages] = useState([]);

 
 
  const [dateRange, setdateRange] = useState({
    startDate: null,
    endDate: null
  });
  const [focus, setFocus] = useState(null);

    const isOutsideRange = day =>
    day.isAfter(new Date()) || day.isBefore(new Date('1996-06-16'));

  return (
    <Container className="mainContainer">
      <Row>
      <DateRangePicker
  startDate={dateRange.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={dateRange.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) =>setdateRange({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput =>setFocus( focusedInput )} // PropTypes.func.isRequired,
 isOutsideRange = {isOutsideRange}
/>

   
      </Row>
    </Container>
  );
};

export default SearchImages;
