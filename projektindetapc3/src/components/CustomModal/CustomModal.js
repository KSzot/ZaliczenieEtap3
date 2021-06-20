import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const CustomModal = ({
  showModal,
  closeModal,
  neutral,
  className,
  title,
  children,
}) => {
  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      animation={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header className="modal-header">
        <Modal.Title className="modal-title">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="modal-body"
        // dangerouslySetInnerHTML={{ __html:  }}
      >
        {children}
      </Modal.Body>
      <Modal.Footer className="modal-footer mt-4">
        <button className="contained-blue" onClick={closeModal}>
          Done
        </button>
      </Modal.Footer>
    </Modal>
  );
};

CustomModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  neutral: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.any,
};

export default CustomModal;
