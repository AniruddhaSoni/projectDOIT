import { Container, Form, Stack, Row, Col } from "react-bootstrap";

export default function StepTwelve() {
  return (
    <Container>
      <h1>12. बैंकिंग सेवा - </h1>
      <Form>
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>1. परिवार का बैंक में खाता है या नहीं</h4>
            </Col>
            <Col>
              <Stack direction="horizontal" gap={4}>
                <Form.Check type="radio" id="radioYes" label="YES" />
                <Form.Check type="radio" id="radioNO" label="NO" />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. के.सी.सी. का लाभ मिला या नहीं</h4>
            </Col>
            <Col>
              <Stack direction="horizontal" gap={4}>
                <Form.Check type="radio" id="radioYes" label="YES" />
                <Form.Check type="radio" id="radioNO" label="NO" />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>3. मुद्रा लोन स्किम में लाभान्वित है या नहीं</h4>
            </Col>
            <Col>
              <Stack direction="horizontal" gap={4}>
                <Form.Check type="radio" id="radioYes" label="YES" />
                <Form.Check type="radio" id="radioNO" label="NO" />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>4. प्रधानमंत्री सुरक्षा बीमा योजना में पंजीकृत है या नहीं</h4>
            </Col>
            <Col>
              <Stack direction="horizontal" gap={4}>
                <Form.Check type="radio" id="radioYes" label="YES" />
                <Form.Check type="radio" id="radioNO" label="NO" />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>5. प्रधानमंत्री जीवन ज्योति योजना मंे पंजीकृत है या नहीं</h4>
            </Col>
            <Col>
              <Stack direction="horizontal" gap={4}>
                <Form.Check type="radio" id="radioYes" label="YES" />
                <Form.Check type="radio" id="radioNO" label="NO" />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>6. अटल पेंषन योजना में पंजीकृत है या नहीं</h4>
            </Col>
            <Col>
              <Stack direction="horizontal" gap={4}>
                <Form.Check type="radio" id="radioYes" label="YES" />
                <Form.Check type="radio" id="radioNO" label="NO" />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>7. विशेष विवरण</h4>
            </Col>
            <Col>
              <Form.Control placeholder="विशेष विवरण"></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
