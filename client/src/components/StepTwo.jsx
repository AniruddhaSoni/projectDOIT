import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function StepTwo() {
  return (
    <Container fluid>
      <h1>सामाजिक न्याय एवं अधिकारिता विभाग</h1>
      <Container>
        <Form>
          <h2>विभाग की योजनाओं से लाभान्वित सदस्य का विवरण</h2>
          <Row>
            <Col>
              <h4>पेंशन योजना</h4>
            </Col>
            <Col>
              <Form.Control placeholder="पेंशन योजना"></Form.Control>
            </Col>
          </Row>
          <h2>अन्य योजना</h2>
          <Row>
            <Row>
              <Col>
                <h4>सहयोग योजना</h4>
              </Col>
              <Col>
                <Form.Control placeholder="सहयोग योजना"></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>उत्तरमेट्रिक छात्रवृति</h4>
              </Col>
              <Col>
                <Form.Control placeholder="उत्तरमेट्रिक छात्रवृति"></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>मुख्यमंत्री स्वरोजगार योजना</h4>
              </Col>
              <Col>
                <Form.Control placeholder="मुख्यमंत्री स्वरोजगार योजना"></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>विधवा पुनर्विवाह योजना</h4>
              </Col>
              <Col>
                <Form.Control placeholder="विधवा पुनर्विवाह योजना"></Form.Control>
              </Col>
            </Row>
          </Row>
          <h2>परिवार में लाभ हेतु पात्र होने के बावजूद वंचितसदस्य का विवरण</h2>
          <Row>
            <Row>
              <Col>
                <Form.Control placeholder="सदस्य का नाम"></Form.Control>
              </Col>
              <Col>
                <Form.Control placeholder="योजना का नाम"></Form.Control>
              </Col>
            </Row>
          </Row>
          <Button variant="dark" className="my-2">
            Add more
          </Button>
        </Form>
      </Container>
    </Container>
  );
}
