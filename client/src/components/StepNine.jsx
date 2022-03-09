import { Container, Form, Row, Col, Stack } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";
import { useContext } from "react";

export default function StepNine() {
  const [state, dispatch] = useContext(LocalContext);
  const { animalHusbandryDepartment } = state;
  const {
    totalAnimals,
    MilchAnimals,
    NonMilchAnimals,
    artificalInseminationAnimals,
    underVaccinationPlanAnimals,
    specialDetails,
  } = animalHusbandryDepartment;

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    const values = { ...animalHusbandryDepartment };
    values[name] = value;

    dispatch({
      type: "handleStepNine",
      payload: values,
    });
  };
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
              <Form.Control
                onChange={handleFieldChange}
                placeholder="परिवार में कुल पशुओं की संख्या"
                type="text"
                name="totalAnimals"
                value={totalAnimals}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. दूधारू पशुओं की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                placeholder="दूधारू पशुओं की संख्या"
                type="text"
                name="MilchAnimals"
                value={MilchAnimals}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>3. गैर दूधारू पशुओं की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                placeholder="गैर दूधारू पशुओं की संख्या"
                type="text"
                value={NonMilchAnimals}
                name="NonMilchAnimals"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>4. कृत्रिम गर्भाधान योजना में पशुओं की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                placeholder="कृत्रिम गर्भाधान योजना में पशुओं की संख्या"
                type="text"
                value={artificalInseminationAnimals}
                name="artificalInseminationAnimals"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>5. टीकाकरण योजना में पशुओं की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                placeholder="टीकाकरण योजना में  पशुओं की संख्या"
                type="text"
                value={underVaccinationPlanAnimals}
                name="underVaccinationPlanAnimals"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>6. विशेषविवरण</h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                placeholder="विशेषविवरण"
                type="text"
                value={specialDetails}
                name="specialDetails"
              ></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
