import { Container, Form, Row, Col, Stack, Button } from "react-bootstrap";

export default function StepTen() {
  return (
    <Container>
      <h1>10. शिक्षा विभाग-</h1>
      <Form className="my-4">
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>
                1. परिवार में प्राथमिक विद्यालयों में अध्ययनरत छात्रों की संख्या
              </h4>
            </Col>
            <Col>
              <Form.Control placeholder="परिवार में प्राथमिक विद्यालयों में अध्ययनरत छात्रों की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                2. उच्च प्राथमिक विद्यालयों में अध्ययनरत छात्रों की संख्या
              </h4>
            </Col>
            <Col>
              <Form.Control placeholder="उच्च प्राथमिक विद्यालयों में अध्ययनरत छात्रों की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>3. माध्यमिक विद्यालयों में अध्ययनरत छात्रों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="माध्यमिक विद्यालयों में अध्ययनरत छात्रों की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                4. उच्च माध्यमिक विद्यालयों में अध्ययनरत छात्रों की संख्या
              </h4>
            </Col>
            <Col>
              <Form.Control placeholder="उच्च माध्यमिक विद्यालयों में अध्ययनरत छात्रों की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>5. पीएमटी/आईआईटी में अध्ययनरत छात्रों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="पीएमटी/आईआईटी में अध्ययनरत छात्रों की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>6. स्नातकोŸार में अध्ययनरत छात्रों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="स्नातकोŸार में अध्ययनरत छात्रों की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>7. छात्रवृति प्राप्त करने वाले छात्रों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="छात्रवृति प्राप्त करने वाले छात्रों की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <h4>
              8. यदि परिवार का कोई सदस्य राजकीय सेवा में कार्यरत है तो उसका
              विवरण
            </h4>
            <Row>
              <Col>
                <Form.Control placeholder="सदस्य का नाम"></Form.Control>
              </Col>
              <Col>
                <Form.Control placeholder="सेवा का नाम"></Form.Control>
              </Col>
            </Row>
            <Button size="sm" variant="dark" className="my-2 w-25 py-2 mx-2">
              Add more
            </Button>
          </Row>
          <Row>
            <Col>
              <h4>
                9. शिक्षा विभाग की अन्य योजना में लाभान्वित परिवार के सदस्यों की
                संख्या
              </h4>
            </Col>
            <Col>
              <Form.Control placeholder="शिक्षा विभाग की अन्य योजना में लाभान्वित परिवार के सदस्यों की संख्या"></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
