import ReactDom from "react-dom";

import { Container, Row, Col } from "react-bootstrap";

const POPUP_STYLES = {
  position: "fixed",
  top: "40%",
  left: "50%",
  width: "60%",
  height: "75%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "black",
  Zindex: 1000,
};
const OVERLAY_STYLES = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};
const CLOSE_STYLES = {
  position: "fixed",
  right: "0",
  backgroundColor: "black",
  border: "none",
  color: "white",
  opacity: "0.5",
  fontSize: "1.5em",
  ZIndex: 1001,
};
const IMAGE_STYLES = {
  width: '100%',
  height: '100%'
};

const FOOTER_STYLES = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  maxWidth: "7em",
  height: "5%",
};

function Modal({ open, image, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <div style={OVERLAY_STYLES}>
      <Container style={POPUP_STYLES}>
        <Row style={{height: '100%',width:'100%'}}>
        <Col style={{height: '100%',width:'100%'}}>
        <img src={image.url} style={IMAGE_STYLES}></img>
        </Col>
<Col style={{backgroundColor: 'whitesmoke'}}>
<button style={CLOSE_STYLES} onClick={onClose}>
          X
        </button>
        <div style={{color:'steelblue'}}>
        <h2 >
          {image.title}
        </h2>
        <p>
          {image.explanation}
        </p>
        </div>
</Col>
        </Row>
      </Container>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
