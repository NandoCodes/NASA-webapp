import ReactDom from "react-dom";

const POPUP_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "40%",
  height: "70%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "lightblue",
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
  ZIndex: 1001,
};
const IMAGE_STYLES = {
  width: "100%",
  height: "94%",
};

const FOOTER_STYLES = {
  display: "flex",
  flexDirection: 'row',
  justifyContent: 'space-between',
  maxWidth: '7em',
  height: "5%",
};

function Modal({ open, image, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <div style={OVERLAY_STYLES}>
      <div style={POPUP_STYLES}>
        <button style={CLOSE_STYLES} onClick={onClose}>
          X
        </button>
        <img src={image} style={IMAGE_STYLES}></img>
        <div style={FOOTER_STYLES}>
          <div>
            <button>Text</button>
          </div>
          <div>
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
