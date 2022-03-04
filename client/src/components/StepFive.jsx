import React from "react";
import { Container, Form, Row, Col, Stack } from "react-bootstrap";

export default function StepFive() {
  return (
    <Container>
      <h1>महिला एवं बाल विकास विभाग-</h1>
      <Form className="my-4">
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>1. 0 से 6 वर्ष तक के बच्चों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="0 से 6 वर्ष तक के बच्चों की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. आंगनबाडी मेंपंजीकृत बच्चों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="आंगनबाडी मेंपंजीकृत बच्चों की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>3. परिवार में अतिकुपोषित बच्चों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="परिवार में अतिकुपोषित बच्चों की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>4. अतिकुपोषितबच्चों के नाम</h4>
            </Col>
            <Col>
              <Form.Control placeholder="अतिकुपोषित बच्चों के नाम"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>5. एमटीसी में भर्ती कराये अतिकुपोषित बच्चों का विवरण</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="एमटीसी में भर्ती कराये अतिकुपोषित बच्चों का विवरण

"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                6. अतिकुपोषित बच्चों को एमटीसी में भर्ती नहीं कराया है तो कारण
              </h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="अतिकुपोषित बच्चों को एमटीसी में भर्ती नहीं कराया है तो कारण


"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>7. पोषाहार प्राप्त करने वाले बच्चों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="पोषाहार प्राप्त करने वाले बच्चों की संख्या 


"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>8. किशोरी एवं धात्री व ग्रभवती महिलाओं की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="किशोरी एवं धात्री व ग्रभवती महिलाओं की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                9. इन्द्रागांधी मातृत्व पोषण योजना से लाभान्वित महिलाओं की
                संख्या
              </h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="इन्द्रागांधी मातृत्व पोषण योजना से लाभान्वित महिलाओं की संख्या


"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                10. महिलाओं/ किशोरियों द्वारा सेनेटरी का उपयोग किया जाता है या
                नहीं
              </h4>
            </Col>
            <Col>
              <Stack direction="horizontal" gap={4}>
                <Form.Check type="radio" id="radioYes" label="YES" />
                <Form.Check type="radio" id="radioNO" label="NO" />
              </Stack>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
