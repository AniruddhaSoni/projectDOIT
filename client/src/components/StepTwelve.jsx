import { Container, Form, Stack, Row, Col } from "react-bootstrap";

export default function StepTwelve() {
  return (
    <Container>
      <h1>11. बैंकिंग सेवा - </h1>
      <Form>
        <Stack>
          <Row>
            <Col>1. परिवार का बैंक में खाता है या नहीं</Col>
            <Col>
              <Form.Control placeholder="परिवार का बैंक में खाता है या नहीं"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>2. के.सी.सी. का लाभ मिला या नहीं</Col>
            <Col>
              <Form.Control placeholder="के.सी.सी. का लाभ मिला या नहीं"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>3. मुद्रा लोन स्किम में लाभान्वित है या नहीं</Col>
            <Col>
              <Form.Control placeholder="मुद्रा लोन स्किम में लाभान्वित है या नहीं"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>4. प्रधानमंत्री सुरक्षा बीमा योजना में पंजीकृत है या नहीं</Col>
            <Col>
              <Form.Control placeholder="प्रधानमंत्री सुरक्षा बीमा योजना में पंजीकृत है या नहीं"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>5. प्रधानमंत्री जीवन ज्योति योजना मंे पंजीकृत है या नहीं</Col>
            <Col>
              <Form.Control placeholder="प्रधानमंत्री जीवन ज्योति योजना मंे पंजीकृत है या नहीं"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>6. अटल पेंषन योजना में पंजीकृत है या नहीं</Col>
            <Col>
              <Form.Control placeholder="अटल पेंषन योजना में पंजीकृत है या नहीं"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>7. विशेष विवरण</Col>
            <Col>
              <Form.Control placeholder="विशेष विवरण"></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
