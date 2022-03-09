import { Container, Form, Row, Col, Stack, Button } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";
import { useContext } from "react";

export default function StepTen() {
  const [state, dispatch] = useContext(LocalContext);
  const { educationDepartment } = state;
  const {
    inPrimary,
    inHigherPrimary,
    inSecondary,
    inHigherSecondary,
    inPMTOrIIT,
    inGraduation,
    scholar,
    inGovtJob,
    inOtherYojana,
  } = educationDepartment;

  const handleFieldChange = (e, index) => {
    const { name, value } = e.target;
    const dataAttri = e.target.getAttribute("data-property");
    const values = { ...educationDepartment };

    if (dataAttri === "inGovtJob") {
      values[dataAttri][index][name] = value;
    } else {
      values[name] = value;
    }
    dispatch({
      type: "handleStepTen",
      payload: values,
    });
  };

  const Add = () => {};
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
              <Form.Control
                onChange={handleFieldChange}
                type="text"
                value={inPrimary}
                name="inPrimary"
                placeholder="परिवार में प्राथमिक विद्यालयों में अध्ययनरत छात्रों की संख्या"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                2. उच्च प्राथमिक विद्यालयों में अध्ययनरत छात्रों की संख्या
              </h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                type="text"
                placeholder="उच्च प्राथमिक विद्यालयों में अध्ययनरत छात्रों की संख्या"
                name="inHigherPrimary"
                value={inHigherPrimary}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>3. माध्यमिक विद्यालयों में अध्ययनरत छात्रों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                type="text"
                placeholder="माध्यमिक विद्यालयों में अध्ययनरत छात्रों की संख्या"
                name="inSecondary"
                value={inSecondary}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                4. उच्च माध्यमिक विद्यालयों में अध्ययनरत छात्रों की संख्या
              </h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                type="text"
                placeholder="उच्च माध्यमिक विद्यालयों में अध्ययनरत छात्रों की संख्या"
                name="inHigherSecondary"
                value={inHigherSecondary}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>5. पीएमटी/आईआईटी में अध्ययनरत छात्रों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                type="text"
                placeholder="पीएमटी/आईआईटी में अध्ययनरत छात्रों की संख्या"
                name="inPMTOrIIT"
                value={inPMTOrIIT}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>6. स्नातकोŸार में अध्ययनरत छात्रों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                type="text"
                placeholder="स्नातकोŸार में अध्ययनरत छात्रों की संख्या"
                name="inGraduation"
                value={inGraduation}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>7. छात्रवृति प्राप्त करने वाले छात्रों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                type="text"
                placeholder="छात्रवृति प्राप्त करने वाले छात्रों की संख्या"
                name="scholar"
                value={scholar}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <h4>
              8. यदि परिवार का कोई सदस्य राजकीय सेवा में कार्यरत है तो उसका
              विवरण
            </h4>
            <Row>
              <Col>
                <Form.Control
                  onChange={handleFieldChange}
                  type="text"
                  placeholder="सदस्य का नाम"
                  name="memberName"
                  data-property="inGovtJob"
                  value={ele.memberName}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Control
                  onChange={handleFieldChange}
                  type="text"
                  placeholder="सेवा का नाम"
                  name="serviceName"
                  data-property="inGovtJob"
                  value={ele.serviceName}
                ></Form.Control>
              </Col>
            </Row>
            <Stack>
              <Button size="sm" variant="dark" className="my-2 w-25 py-2 mx-2">
                Add
              </Button>
              <Button
                size="sm"
                variant="danger"
                className="my-2 w-25 py-2 mx-2"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <Col>
              <h4>
                9. शिक्षा विभाग की अन्य योजना में लाभान्वित परिवार के सदस्यों की
                संख्या
              </h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                type="text"
                placeholder="शिक्षा विभाग की अन्य योजना में लाभान्वित परिवार के सदस्यों की संख्या"
                name="inOtherYojana"
                value={inOtherYojana}
              ></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
