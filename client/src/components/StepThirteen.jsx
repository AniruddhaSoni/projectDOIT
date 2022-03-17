import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";
import { useContext, useState } from "react";
import SubmitModal from "./Modal";

export default function StepThirteen() {
  const [modalShow, setModalShow] = useState(false);
  const [state, dispatch] = useContext(LocalContext);
  const { skillDevelopment } = state;
  const {
    rscitMembers,
    techMembers,
    jobMembers,
    traineeDetails,
    selfEmployeed,
    businessTrainingInterest,
  } = skillDevelopment;

  const handleFieldChange = (e, index) => {
    const { name, value, type } = e.target;
    const dataAttri = e.target.getAttribute("data-property");
    const values = { ...skillDevelopment };

    if (type === "radio") {
      values[name] = value === "yes" ? true : false;
    } else {
      values[dataAttri][index][name] = value;
    }

    dispatch({
      type: "handleStepThirteen",
      payload: values,
    });
  };

  const handleAdd = (e) => {
    const dataAttri = e.target.getAttribute("data-property");
    const values = { ...skillDevelopment };

    if (dataAttri === "rscitMembers") {
      values[dataAttri].push({ memberName: "" });
    } else {
      values[dataAttri].push({ memberName: "", memberDetails: "" });
    }
    dispatch({
      type: "handleStepThirteen",
      payload: values,
    });
  };

  const handleRemove = (e) => {
    const dataAttri = e.target.getAttribute("data-property");
    const values = { ...skillDevelopment };
    if (values[dataAttri].length > 0) {
      values[dataAttri].pop();
      dispatch({
        type: "handleStepThirteen",
        payload: values,
      });
    } else {
      alert("nothing to remove");
    }
  };
  return (
    <Container>
      <h1>13. स्कील डवलपमेन्ट-</h1>
      <Form>
        <Stack gap={3}>
          <Row>
            <h4>
              1. परिवार के किसी सदस्य ने आरएससीआईटी कॉर्स किया है या नहीं यदि हॉ
              तो विवरण
            </h4>
            {rscitMembers.length > 0 &&
              rscitMembers.map((ele, index) => (
                <Row key={index} className="mt-4 mb-2">
                  <Col>
                    <Form.Control
                      onChange={(e) => handleFieldChange(e, index)}
                      placeholder="सदस्य का नाम"
                      type="text"
                      name="memberName"
                      data-property="rscitMembers"
                      value={ele.memberName}
                    ></Form.Control>
                  </Col>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4} onChange={handleFieldChange}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="rscitMembers"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="rscitMembers"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <h4>2. आईटीआई/तकनीकी षिक्षा प्राप्त सदस्य का विवरण</h4>
            {techMembers.length > 0 &&
              techMembers.map((ele, index) => (
                <Row key={index} className="mt-4 mb-2">
                  <Col>
                    <Form.Control
                      onChange={(e) => handleFieldChange(e, index)}
                      type="text"
                      name="memberName"
                      value={ele.memberName}
                      data-property="techMembers"
                      placeholder="सदस्य का नाम"
                    ></Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      onChange={(e) => handleFieldChange(e, index)}
                      type="text"
                      name="memberDetails"
                      value={ele.memberDetails}
                      data-property="techMembers"
                      placeholder="विवरण"
                    ></Form.Control>
                  </Col>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4} onChange={handleFieldChange}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="techMembers"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="techMembers"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <h4>
              3. परिवार का कोई सदस्य सरकारी नौकरी/ प्राईवेट नौकरी में कार्यरत
              हैया नहीं यदि हॉ तो विवरण
            </h4>
            {jobMembers.length > 0 &&
              jobMembers.map((ele, index) => (
                <Row key={index} className="mt-4 mb-2">
                  <Col>
                    <Form.Control
                      onChange={(e) => handleFieldChange(e, index)}
                      type="text"
                      name="memberName"
                      value={ele.memberName}
                      data-property="jobMembers"
                      placeholder="सदस्य का नाम"
                    ></Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      onChange={(e) => handleFieldChange(e, index)}
                      type="text"
                      name="memberDetails"
                      value={ele.memberDetails}
                      data-property="jobMembers"
                      placeholder="विवरण"
                    ></Form.Control>
                  </Col>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4} onChange={handleFieldChange}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="jobMembers"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="jobMembers"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <h4>4. परिवार का कोई स्वरोजगार है या नहीं</h4>
            <Stack direction="horizontal" gap={4} onChange={handleFieldChange}>
              <Form.Check
                type="radio"
                id="radioYes"
                label="YES"
                name="selfEmployeed"
                value="yes"
                defaultChecked={selfEmployeed ? true : false}
              />
              <Form.Check
                type="radio"
                id="radioNO"
                label="NO"
                name="selfEmployeed"
                defaultChecked={!selfEmployeed ? true : false}
                value="no"
              />
            </Stack>
          </Row>
          <Row>
            <h4>
              5. परिवार का कोई सदस्य व्यवसायिक प्रषिक्षण हेतुइच्छुक है या नहीं
            </h4>
            <Stack direction="horizontal" gap={4} onChange={handleFieldChange}>
              <Form.Check
                type="radio"
                id="radioYes"
                label="YES"
                name="businessTrainingInterest"
                value="yes"
                defaultChecked={businessTrainingInterest ? true : false}
              />
              <Form.Check
                name="businessTrainingInterest"
                defaultChecked={!businessTrainingInterest ? true : false}
                value="no"
                type="radio"
                id="radioNO"
                label="NO"
              />
            </Stack>
          </Row>
          <Row>
            <h4>6. यदि व्यवसायिक प्रषिक्षण के इच्छुक है तो उसका विवरण</h4>
            {traineeDetails.length > 0 &&
              traineeDetails.map((ele, index) => (
                <Row key={index} className="mt-4 mb-2">
                  <Col>
                    <Form.Control
                      onChange={(e) => handleFieldChange(e, index)}
                      type="text"
                      name="memberName"
                      value={ele.memberName}
                      placeholder="सदस्य का नाम"
                      data-property="traineeDetails"
                    ></Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      onChange={(e) => handleFieldChange(e, index)}
                      type="text"
                      name="memberDetails"
                      value={ele.memberDetails}
                      placeholder="विवरण"
                      data-property="traineeDetails"
                    ></Form.Control>
                  </Col>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4} onChange={handleFieldChange}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="traineeDetails"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="traineeDetails"
              >
                Remove
              </Button>
            </Stack>
          </Row>
        </Stack>
        <Button
          size="lg"
          className="w-100 my-4"
          variant="success"
          onClick={() => setModalShow(true)}
        >
          Submit
        </Button>
      </Form>
      <SubmitModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}
