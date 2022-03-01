import React from "react";
import { Col, Container, Form, Row, Stack } from "react-bootstrap";

export default function StepSeven() {
  return (
    <Container>
      <h1>चिकित्सा एवं स्वास्थ्य विभाग-</h1>
      <Form className="my-4">
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>1. जननी सुरक्षा योजना में लाभान्वित सदस्यों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
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
                placeholder="  निःशुल्क दवा/ जॉच से लाभान्वित सदस्यों की संख्या

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
                placeholder=" मुख्यमंत्री चिरंजीवी योजना में पंजीकृत से शेष सदस्यों की संख्या
"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>5. रिवार में क्षय रोग से पीडित सदस्यों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="रिवार में क्षय रोग से पीडित सदस्यों की संख्या
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
                placeholder="  नियमित डोटस वाले मरीजों की संख्या
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
                placeholder=" परिवार में नशा करने वाले सदस्यों का विवरण
"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>8. परिवार में नशा करने वाले सदस्यों का विवरण</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="परिवार में नशा करने वाले सदस्यों का विवरण

"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>9. परिवार नियोजन की स्थिति</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="परिवार नियोजन की स्थिति 


"
              ></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
