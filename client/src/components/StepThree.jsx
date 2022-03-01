import React from "react";
import { Container, Form, Row, Col, Stack } from "react-bootstrap";

export default function StepThree() {
  return (
    <Container>
      <h1>ग्रामीण विकास एवं पंचायतीराज विभाग-</h1>
      <Form className="my-4">
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>1. परिवारको मनरेगा से कितने दिन रोजगार मिला</h4>
            </Col>
            <Col>
              <Form.Control placeholder="परिवारको मनरेगा से कितने दिन रोजगार मिला"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. प्रधानमंत्री आवास योजना के तहत लाभान्वित है या नहीं</h4>
            </Col>
            <Col>
              <Form.Control placeholder="प्रधानमंत्री आवास योजना के तहत लाभान्वित है या नहीं"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>3. परिवार के पास जॉबकार्ड है या नहीं</h4>
            </Col>
            <Col>
              <Form.Control placeholder="परिवार के पास जॉबकार्ड है या नहीं"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>4. राशन कार्ड उपलब्ध है या नहीं</h4>
            </Col>
            <Col>
              <Form.Control placeholder="राशन कार्ड उपलब्ध है या नहीं"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                5. विभाग की किसी अन्य योजना में परिवार लाभान्वित है तो उसका
                विवरण
              </h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="विभाग की किसी अन्य योजना में परिवार लाभान्वित है तो उसका विवरण

"
              ></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
