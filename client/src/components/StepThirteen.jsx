import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

export default function StepThirteen() {
  return (
    <Container>
      <h1>13. स्कील डवलपमेन्ट-</h1>
      <Form>
        <Stack gap={3}>
          <Row>
            <h4>
              1. परिवार के किसी सदस्य ने आरएससीआईटी कॉर्स किया है या नहीं यदि हॉ
              तो विवरण
            </h4>
            <Stack direction="horizontal" gap={4}>
              <Form.Check type="radio" id="radioYes" label="YES" />
              <Form.Check type="radio" id="radioNO" label="NO" />
            </Stack>
            <Row className="mt-4 mb-2">
              <Col>
                <Form.Control placeholder="सदस्य का नाम"></Form.Control>
              </Col>
            </Row>
            <Button size="sm" variant="dark" className="my-2 w-25 py-2 mx-2">
              Add more
            </Button>
          </Row>
          <Row>
            <h4>2. आईटीआई/तकनीकी षिक्षा प्राप्त सदस्य का विवरण</h4>
            <Stack direction="horizontal" gap={4}>
              <Form.Check type="radio" id="radioYes" label="YES" />
              <Form.Check type="radio" id="radioNO" label="NO" />
            </Stack>
            <Row className="mt-4 mb-2">
              <Col>
                <Form.Control placeholder="सदस्य का नाम"></Form.Control>
              </Col>
              <Col>
                <Form.Control placeholder="विवरण"></Form.Control>
              </Col>
            </Row>
            <Button size="sm" variant="dark" className="my-2 w-25 py-2 mx-2">
              Add more
            </Button>
          </Row>
          <Row>
            <h4>
              3. परिवार का कोई सदस्य सरकारी नौकरी/ प्राईवेट नौकरी में कार्यरत
              हैया नहीं यदि हॉ तो विवरण
            </h4>
            <Stack direction="horizontal" gap={4}>
              <Form.Check type="radio" id="radioYes" label="YES" />
              <Form.Check type="radio" id="radioNO" label="NO" />
            </Stack>
            <Row className="mt-4 mb-2">
              <Col>
                <Form.Control placeholder="सदस्य का नाम"></Form.Control>
              </Col>
              <Col>
                <Form.Control placeholder="विवरण"></Form.Control>
              </Col>
            </Row>
            <Button size="sm" variant="dark" className="my-2 w-25 py-2 mx-2">
              Add more
            </Button>
          </Row>
          <Row>
            <h4>4. परिवार का कोई स्वरोजगार है या नहीं</h4>
            <Stack direction="horizontal" gap={4}>
              <Form.Check type="radio" id="radioYes" label="YES" />
              <Form.Check type="radio" id="radioNO" label="NO" />
            </Stack>
          </Row>
          <Row>
            <h4>
              5. परिवार का कोई सदस्य व्यवसायिक प्रषिक्षण हेतुइच्छुक है या नहीं
            </h4>
            <Stack direction="horizontal" gap={4}>
              <Form.Check type="radio" id="radioYes" label="YES" />
              <Form.Check type="radio" id="radioNO" label="NO" />
            </Stack>
          </Row>
          <Row>
            <h4>6. यदि व्यवसायिक प्रषिक्षण के इच्छुक है तो उसका विवरण</h4>
            <Stack direction="horizontal" gap={4}>
              <Form.Check type="radio" id="radioYes" label="YES" />
              <Form.Check type="radio" id="radioNO" label="NO" />
            </Stack>
            <Row className="mt-4 mb-2">
              <Col>
                <Form.Control placeholder="सदस्य का नाम"></Form.Control>
              </Col>
              <Col>
                <Form.Control placeholder="विवरण"></Form.Control>
              </Col>
            </Row>
            <Button size="sm" variant="dark" className="my-2 w-25 py-2 mx-2">
              Add more
            </Button>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
