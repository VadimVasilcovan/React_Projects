import "./modal.css";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header"></div>
        <span onClick={onClose} className="close-modal-icon">
          &times;
        </span>
        <h2>{header ? header : "Header"}</h2>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is owr Modal Body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
};

export default Modal;
