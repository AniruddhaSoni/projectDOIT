import { Container, Form, Row, Stack, Col, Button } from "react-bootstrap";

export default function StepEleven() {
  return (
    <Container>
      <h1>11. राजस्व विभाग - </h1>
      <Form>
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>1. परिवार द्वारा कुल धारित भूमि का विवरण</h4>
            </Col>
            <Col>
              <Form.Control placeholder="परिवार द्वारा कुल धारित भूमि का विवरण"></Form.Control>
            </Col>
          </Row>
          <Row>
            <h4>2. भूमि सिंचित है या असिंचित का विवरण</h4>
            <Stack direction="horizontal" gap={4}>
              <Form.Check type="radio" id="radioYes" label="YES" />
              <Form.Check type="radio" id="radioNO" label="NO" />
            </Stack>
            <Row>
              <Col>
                <Form.Control placeholder="विवरण"></Form.Control>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col>
              <h4>3. सिंचाई के साधन का विवरण</h4>
            </Col>
            <Col>
              <Form.Control placeholder="विवरण"></Form.Control>
            </Col>
          </Row>
          <Row className="mt-4 mb-2">
            <h4>4. यदि कोई नामान्तकरण दर्ज होने से शेष है तो उसका विवरण</h4>
            <Stack direction="horizontal" gap={4}>
              <Form.Check type="radio" id="radioYes" label="YES" />
              <Form.Check type="radio" id="radioNO" label="NO" />
            </Stack>
            <Row>
              <Col>
                <Form.Control placeholder="विवरण"></Form.Control>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col>
              <h4>5. भूमि खातेदारी है या गैरखातेदारी है उसका विवरण</h4>
            </Col>
            <Col>
              <Form.Control placeholder="विवरण"></Form.Control>
            </Col>
          </Row>
          <Row>
            <h4>6.किसी न्यायालय में भूमि संबंधी विवाद का विवरण</h4>
            <Row>
              <Col>
                <Form.Control placeholder="विवरण"></Form.Control>
              </Col>
            </Row>
          </Row>
          <Button size="sm" variant="dark" className="my-2 w-25 py-2 mx-2">
            Add more
          </Button>
          <Row>
            <h4>
              7. मुख्यमंत्री सहायता कोष/ एसडीआरएफ सहायता का प्रकरण पेण्डिंग है
              तो उसका विवरण
            </h4>
            <Row>
              <Col>
                <Form.Control placeholder="विवरण"></Form.Control>
              </Col>
            </Row>
            <Button size="sm" variant="dark" className="my-2 w-25 py-2 mx-2">
              Add more
            </Button>
          </Row>
          <Row>
            <Col>
              <h4>8. विशेष विवरण</h4>
            </Col>
            <Col>
              <Form.Control placeholder="विवरण"></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
