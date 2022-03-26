import { Modal, Button } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";
import { useContext } from "react";
import { Buffer } from "buffer";

export default function SubmitModal(props) {
  const [state] = useContext(LocalContext);

  const handleFormSubmission = async () => {
    //scroll to top
    window.scrollTo(0, 0);
    const buff = new Buffer(JSON.stringify(state));
    const base64Data = buff.toString("base64");

    const response = await fetch("http://localhost:5000/storeInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: base64Data }),
    });
    const jsonResponse = await response.json();

    const { status, message } = jsonResponse;
    if (status === "ok") {
      alert(message);

      // Clear local stoarge
      localStorage.clear();
      // refresh the page
      window.location.reload();

      return;
    }
    alert(message);
  };

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
        <Button onClick={handleFormSubmission} variant="success">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
