import React from "react";
import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";
import { useContext } from "react";

export default function StepSeven() {
  const [state, dispatch] = useContext(LocalContext);

  const { medicalDepartment } = state;
  const {
    totalInJananiSurkshaScheme,
    totalInFreeMedicine,
    totalinCmChiranjeeviScheme,
    totalOutCmChiranjeeviScheme,
    totalAffectedByTuberculosis,
    totalAffectedByRegularDotus,
    totalDrugAddicts,
    familyPlanning,
    specialDetails,
  } = medicalDepartment;

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    const values = { ...medicalDepartment };
    values[name] = value;

    dispatch({
      type: "handleStepSeven",
      payload: values,
    });
  };

  return (
    <Container>
      <h1>7. चिकित्सा एवं स्वास्थ्य विभाग-</h1>
      <Form className="my-4">
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>1. जननी सुरक्षा योजना में लाभान्वित सदस्यों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                name="totalInJananiSurkshaScheme"
                value={totalInJananiSurkshaScheme}
                onChange={handleFieldChange}
                placeholder="जननी सुरक्षा योजना में लाभान्वित सदस्यों की संख्या

"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. निःशुल्क दवा/ जॉच से लाभान्वित सदस्यों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                name="totalInFreeMedicine"
                value={totalInFreeMedicine}
                onChange={handleFieldChange}
                placeholder="निःशुल्क दवा/ जॉच से लाभान्वित सदस्यों की संख्या

"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                3. मुख्यमंत्री चिरंजीवी योजना में पंजीकृत सदस्यों की संख्या
              </h4>
            </Col>
            <Col>
              <Form.Control
                name="totalinCmChiranjeeviScheme"
                value={totalinCmChiranjeeviScheme}
                onChange={handleFieldChange}
                placeholder="मुख्यमंत्री चिरंजीवी योजना में पंजीकृत सदस्यों की संख्या
 "
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                4. मुख्यमंत्री चिरंजीवी योजना में पंजीकृत से शेष सदस्यों की
                संख्या
              </h4>
            </Col>
            <Col>
              <Form.Control
                name="totalOutCmChiranjeeviScheme"
                value={totalOutCmChiranjeeviScheme}
                onChange={handleFieldChange}
                placeholder="मुख्यमंत्री चिरंजीवी योजना में पंजीकृत से शेष सदस्यों की संख्या
"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>5. परिवार में क्षय रोग से पीडित सदस्यों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                name="totalAffectedByTuberculosis"
                value={totalAffectedByTuberculosis}
                onChange={handleFieldChange}
                placeholder="परिवार में क्षय रोग से पीडित सदस्यों की संख्या
"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>6. नियमित डोटस वाले मरीजों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                name="totalAffectedByRegularDotus"
                value={totalAffectedByRegularDotus}
                onChange={handleFieldChange}
                placeholder="नियमित डोटस वाले मरीजों की संख्या
"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>7. परिवार में नशा करने वाले सदस्यों का विवरण</h4>
            </Col>
            <Col>
              <Form.Control
                name="totalDrugAddicts"
                value={totalDrugAddicts}
                onChange={handleFieldChange}
                placeholder="परिवार में नशा करने वाले सदस्यों का विवरण
"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>8. परिवार नियोजन की स्थिति</h4>
            </Col>
            <Col>
              <Form.Control
                name="familyPlanning"
                value={familyPlanning}
                onChange={handleFieldChange}
                placeholder="परिवार नियोजन की स्थिति 


"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>9. विशेष विवरण</h4>
            </Col>
            <Col>
              <Form.Control
                name="specialDetails"
                value={specialDetails}
                onChange={handleFieldChange}
                placeholder="विशेष विवरण"
              ></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
