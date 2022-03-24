import React, { useContext } from "react";
import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";

export default function StepFour() {
  const [state, dispatch] = useContext(LocalContext);
  const { rasadDepartment } = state;

  const {
    isSelectedUnderNationalFoodSecrity,
    reasonNotSelectedUnderNationalFoodSecrity,
    isGettingRegularFood,
    reasonNotGettingRegularFood,
    isGettingTADSahariyaKit,
  } = rasadDepartment;

  const handleFieldChange = (e, index) => {
    const { name, value, type } = e.target;
    const values = { ...rasadDepartment };

    if (type === "radio") {
      values[name] = value === "yes" ? true : false;
    } else {
      values[name] = value;
    }
    dispatch({
      type: "handleStepFour",
      payload: values,
    });
  };

  return (
    <Container>
      <h1>रसद विभाग-</h1>
      <Form className="my-4">
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>1. परिवार राष्ट्रीय खाद्य सुरक्षा में चयनित है या नहीं</h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  type="radio"
                  id="radioYes"
                  label="YES"
                  name="isSelectedUnderNationalFoodSecrity"
                  value="yes"
                  defaultChecked={
                    isSelectedUnderNationalFoodSecrity ? true : false
                  }
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="isSelectedUnderNationalFoodSecrity"
                  value="no"
                  defaultChecked={
                    !isSelectedUnderNationalFoodSecrity ? true : false
                  }
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. यदि चयनित नहीं है तो चयनित नहीं होने का कारण</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="यदि चयनित नहीं है तो चयनित नहीं होने का कारण"
                name="reasonNotSelectedUnderNationalFoodSecrity"
                onChange={handleFieldChange}
                value={reasonNotSelectedUnderNationalFoodSecrity}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                3. क्या परिवार को नियमित खाद्य सामग्री प्राप्तहो रही है या नहीं
              </h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  type="radio"
                  id="radioYes"
                  label="YES"
                  name="isGettingRegularFood"
                  value="yes"
                  defaultChecked={isGettingRegularFood ? true : false}
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="isGettingRegularFood"
                  value="no"
                  defaultChecked={!isGettingRegularFood ? true : false}
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>4. यदि नहीं तो कारण</h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                placeholder="यदि नहीं तो कारण"
                name="reasonNotGettingRegularFood"
                value={reasonNotGettingRegularFood}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                5. टी.ए.डी. द्वारा वितरित किये जा रहे सहरिया किट मिल रहे है या
                नहीं
              </h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  type="radio"
                  id="radioYes"
                  label="YES"
                  name="isGettingTADSahariyaKit"
                  value="yes"
                  defaultChecked={isGettingTADSahariyaKit ? true : false}
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="isGettingTADSahariyaKit"
                  value="no"
                  defaultChecked={!isGettingTADSahariyaKit ? true : false}
                />
              </Stack>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
