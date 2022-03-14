import { Container, Form, Stack, Row, Col } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";
import { useContext } from "react";

export default function StepTwelve() {
  const [state, dispatch] = useContext(LocalContext);
  const { bankingService } = state;
  const {
    familyAccount,
    kccScheme,
    mudraLoanScheme,
    pmSurakshaInsuranceScheme,
    pmJeevanJyotiInsuranceScheme,
    atalPensionScheme,
    specialDetails,
  } = bankingService;

  const handleFieldChange = (e) => {
    const { name, value, type } = e.target;
    const values = { ...bankingService };

    if (type === "radio") {
      values[name] = value === "yes" ? true : false;
    } else {
      values[name] = value;
    }
    dispatch({
      type: "handleStepTwelve",
      payload: values,
    });
  };

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
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  name="familyAccount"
                  value="yes"
                  type="radio"
                  id="radioYes"
                  label="YES"
                  defaultChecked={familyAccount ? true : false}
                />
                <Form.Check
                  name="familyAccount"
                  defaultChecked={!familyAccount ? true : false}
                  value="no"
                  type="radio"
                  id="radioNO"
                  label="NO"
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. के.सी.सी. का लाभ मिला या नहीं</h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  name="kccScheme"
                  value="yes"
                  type="radio"
                  id="radioYes"
                  label="YES"
                  defaultChecked={kccScheme ? true : false}
                />
                <Form.Check
                  name="kccScheme"
                  value="no"
                  type="radio"
                  id="radioNO"
                  label="NO"
                  defaultChecked={!kccScheme ? true : false}
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>3. मुद्रा लोन स्किम में लाभान्वित है या नहीं</h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  name="mudraLoanScheme"
                  value="yes"
                  type="radio"
                  id="radioYes"
                  label="YES"
                  defaultChecked={mudraLoanScheme ? true : false}
                />
                <Form.Check
                  name="mudraLoanScheme"
                  defaultChecked={!mudraLoanScheme ? true : false}
                  value="no"
                  type="radio"
                  id="radioNO"
                  label="NO"
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>4. प्रधानमंत्री सुरक्षा बीमा योजना में पंजीकृत है या नहीं</h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  name="pmSurakshaInsuranceScheme"
                  value="yes"
                  type="radio"
                  id="radioYes"
                  label="YES"
                  defaultChecked={pmSurakshaInsuranceScheme ? true : false}
                />
                <Form.Check
                  name="pmSurakshaInsuranceScheme"
                  defaultChecked={!pmSurakshaInsuranceScheme ? true : false}
                  value="no"
                  type="radio"
                  id="radioNO"
                  label="NO"
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>5. प्रधानमंत्री जीवन ज्योति योजना मंे पंजीकृत है या नहीं</h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  name="pmJeevanJyotiInsuranceScheme"
                  value="yes"
                  type="radio"
                  id="radioYes"
                  label="YES"
                  defaultChecked={pmJeevanJyotiInsuranceScheme ? true : false}
                />
                <Form.Check
                  name="pmJeevanJyotiInsuranceScheme"
                  defaultChecked={!pmJeevanJyotiInsuranceScheme ? true : false}
                  value="no"
                  type="radio"
                  id="radioNO"
                  label="NO"
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>6. अटल पेंषन योजना में पंजीकृत है या नहीं</h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  name="atalPensionScheme"
                  value="yes"
                  type="radio"
                  id="radioYes"
                  label="YES"
                  defaultChecked={atalPensionScheme ? true : false}
                />
                <Form.Check
                  name="atalPensionScheme"
                  defaultChecked={!atalPensionScheme ? true : false}
                  value="no"
                  type="radio"
                  id="radioNO"
                  label="NO"
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>7. विशेष विवरण</h4>
            </Col>
            <Col>
              <Form.Control
                onChange={handleFieldChange}
                placeholder="विशेष विवरण"
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
