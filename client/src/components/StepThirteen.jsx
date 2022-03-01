import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

export default function StepThirteen() {
  return (
    <Container>
      <h1>12. स्कील डवलपमेन्ट-</h1>
      <Form>
        <Stack>
          <Row>
            <h4>
              परिवार के किसी सदस्य ने आरएससीआईटी कॉर्स किया है या नहीं यदि हॉ तो
              विवरण
            </h4>
            <Row>
              <Col>
                <Form.Control placeholder="सदस्य का नाम"></Form.Control>
              </Col>
            </Row>
            <Button size="sm" variant="dark" className="my-2">
              Add more
            </Button>
          </Row>
          <Row>
            <h4>आईटीआई/तकनीकी षिक्षा प्राप्त सदस्य का विवरण</h4>
            <Row>
              <Col>
                <Form.Control placeholder="सदस्य का नाम"></Form.Control>
              </Col>
              <Col>
                <Form.Control placeholder="विवरण"></Form.Control>
              </Col>
            </Row>
            <Button size="sm" variant="dark" className="my-2">
              Add more
            </Button>
          </Row>
          <Row>
            <h4>
              परिवार का कोई सदस्य सरकारी नौकरी/ प्राईवेट नौकरी में कार्यरत हैया
              नहीं यदि हॉ तो विवरण
            </h4>
            <Row></Row>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
