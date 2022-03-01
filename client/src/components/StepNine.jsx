import { Container, Form, Row, Col, Stack } from "react-bootstrap";

export default function StepNine() {
  return (
    <Container>
      <h1>9. पशुपालन विभाग -</h1>
      <Form className="my-4">
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>1. परिवार में कुल पशुओं की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="परिवार में कुल पशुओं की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. दूधारू पशुओं की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="दूधारू पशुओं की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>3. गैर दूधारू पशुओं की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="गैर दूधारू पशुओं की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>4. कृत्रिम गर्भाधान योजना में पशुओं की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="कृत्रिम गर्भाधान योजना में पशुओं की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>5. टीकाकरण योजना में पशुओं की संख्या</h4>
            </Col>
            <Col>
              <Form.Control placeholder="टीकाकरण योजना में  पशुओं की संख्या"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>6. विशेषविवरण</h4>
            </Col>
            <Col>
              <Form.Control placeholder="विशेषविवरण"></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
