import { Modal, Button } from "react-bootstrap";

export default function SubmitModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are You Sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-dark">
          <span className="text-danger">Note: -</span> Once the form is
          submitted, you can't perform any changes.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="success">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}
