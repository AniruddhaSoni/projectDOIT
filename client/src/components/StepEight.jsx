import { Container, Form, Row, Col, Stack } from "react-bootstrap";
import { useContext } from "react";
import { LocalContext } from "../Contexts/provider";

export default function StepEight() {
  const [state, dispatch] = useContext(LocalContext);
  const { agricultureDepartment } = state;

  const {
    totalMinikits,
    fasalInsuranceAdvantage,
    dripEquipmentGrant,
    krishakSathiYojana,
    subsidyOnAgricultureMachinery,
    plantProtectionGrant,
    krishiVigyanScholarship,
    pmSammanNidhiYojana,
    specialDetails,
  } = agricultureDepartment;

  const handleFieldChange = (e) => {
    const { name, value, type } = e.target;
    const values = { ...agricultureDepartment };

    if (type === "radio") {
      values[name] = value === "yes" ? true : false;
    } else {
      values[name] = value;
    }
    dispatch({
      type: "handleStepEight",
      payload: values,
    });
  };
  return (
    <Container>
      <h1>8. कृषि विभाग - </h1>
      <Form className="my-4">
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>1. परिवार को प्राप्त मिनीकिट्स की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="परिवार को प्राप्त मिनीकिट्स की संख्या"
                type="text"
                value={totalMinikits}
                name="totalMinikits"
                onChange={handleFieldChange}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. फसल बीमा योजना का लाभ हॉ या ना</h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  type="radio"
                  id="radioYes"
                  label="YES"
                  name="fasalInsuranceAdvantage"
                  value="yes"
                  defaultChecked={fasalInsuranceAdvantage ? true : false}
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="fasalInsuranceAdvantage"
                  value="no"
                  defaultChecked={!fasalInsuranceAdvantage ? true : false}
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>3.ड्रिप/ स्प्रिंकलर/ पाईपलाईन पर अनुदान हॉ या ना </h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  type="radio"
                  id="radioYes"
                  label="YES"
                  name="dripEquipmentGrant"
                  value="yes"
                  defaultChecked={dripEquipmentGrant ? true : false}
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="dripEquipmentGrant"
                  value="no"
                  defaultChecked={!dripEquipmentGrant ? true : false}
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>4. कृषक साथी योजना में यदि कभी लाभ मिला है तो विवरण</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="विवरण"
                type="text"
                name="krishakSathiYojana"
                value={krishakSathiYojana}
                onChange={handleFieldChange}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>5. कृषि यंत्रों पर अनुदान हॉ या ना</h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  type="radio"
                  id="radioYes"
                  label="YES"
                  name="subsidyOnAgricultureMachinery"
                  value="yes"
                  defaultChecked={subsidyOnAgricultureMachinery ? true : false}
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="subsidyOnAgricultureMachinery"
                  value="no"
                  defaultChecked={!subsidyOnAgricultureMachinery ? true : false}
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>6. पौध संरक्षण उपकरण अनुदान हॉ या ना</h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  type="radio"
                  id="radioYes"
                  label="YES"
                  name="plantProtectionGrant"
                  value="yes"
                  defaultChecked={plantProtectionGrant ? true : false}
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="plantProtectionGrant"
                  value="no"
                  defaultChecked={!plantProtectionGrant ? true : false}
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                7. कृषि विज्ञान में अध्ययनरत छात्राओं को छात्रवृति मिली है या
                नहीं
              </h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  type="radio"
                  id="radioYes"
                  label="YES"
                  name="krishiVigyanScholarship"
                  value="yes"
                  defaultChecked={krishiVigyanScholarship ? true : false}
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="krishiVigyanScholarship"
                  value="no"
                  defaultChecked={!krishiVigyanScholarship ? true : false}
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>8. प्रधानमंत्री सम्मान निधि योजन का लाभा मिला या नहीं</h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  type="radio"
                  id="radioYes"
                  label="YES"
                  name="pmSammanNidhiYojana"
                  value="yes"
                  defaultChecked={pmSammanNidhiYojana ? true : false}
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="pmSammanNidhiYojana"
                  value="no"
                  defaultChecked={!pmSammanNidhiYojana ? true : false}
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>9. विशेष विवरण</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="विशेष विवरण"
                type="text"
                value={specialDetails}
                name="specialDetails"
                onChange={handleFieldChange}
              ></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
