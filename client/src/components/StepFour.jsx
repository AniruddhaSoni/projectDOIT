import React from "react";
import { Col, Container, Form, Row, Stack } from "react-bootstrap";

export default function StepFour() {
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
              <Form.Control
                placeholder="परिवार राष्ट्रीय खाद्य सुरक्षा में चयनित है या नहीं
"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. यदि चयनित नहीं है तो चयनित नहीं होने का कारण</h4>
            </Col>
            <Col>
              <Form.Control placeholder="यदि चयनित नहीं है तो चयनित नहीं होने का कारण"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                3. क्या परिवार को नियमित खाद्य सामग्रीप्राप्तहो रही है या नहीं
              </h4>
            </Col>
            <Col>
              <Form.Control placeholder="क्या परिवार को नियमित खाद्य सामग्रीप्राप्तहो रही है या नहीं"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>4. यदि नहीं तो कारण</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="यदि नहीं तो कारण
"
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
              <Form.Control
                placeholder="टी.ए.डी. द्वारा वितरित किये जा रहे सहरिया किट मिल रहे है या नहीं
"
              ></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
