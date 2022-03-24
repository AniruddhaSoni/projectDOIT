import React, { useContext } from "react";
import { Container, Form, Row, Col, Stack } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";

export default function StepThree() {
  const [state, dispatch] = useContext(LocalContext);
  const { developmentDepartment } = state;

  const {
    manaregaJobsinDays,
    isProfitTakerOfPradhanmantriAavasYojna,
    hasJobCard,
    hasRashanCard,
    isProfitTakerOfotherAgricultureYojna,
  } = developmentDepartment;

  const handleFieldChange = (e) => {
    const { name, value, type } = e.target;
    const values = { ...developmentDepartment };
    if (type === "radio") {
      values[name] = value === "yes" ? true : false;
    } else {
      values[name] = value;
    }
    dispatch({
      type: "handleStepThree",
      payload: values,
    });
  };

  return (
    <Container>
      <h1>ग्रामीण विकास एवं पंचायतीराज विभाग-</h1>
      <Form className="my-4">
        <Stack gap={3}>
          <Row>
            <Col>
              <h4>1. परिवारको मनरेगा से कितने दिन रोजगार मिला</h4>
            </Col>
            <Col>
              <Form.Control
                type="text"
                onChange={handleFieldChange}
                name="manaregaJobsinDays"
                placeholder="परिवारको मनरेगा से कितने दिन रोजगार मिला"
                value={manaregaJobsinDays}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>2. प्रधानमंत्री आवास योजना के तहत लाभान्वित है या नहीं</h4>
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
                  name="isProfitTakerOfPradhanmantriAavasYojna"
                  value="yes"
                  defaultChecked={
                    isProfitTakerOfPradhanmantriAavasYojna ? true : false
                  }
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="isProfitTakerOfPradhanmantriAavasYojna"
                  value="no"
                  defaultChecked={
                    !isProfitTakerOfPradhanmantriAavasYojna ? true : false
                  }
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>3. परिवार के पास जॉबकार्ड है या नहीं</h4>
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
                  name="hasJobCard"
                  value="yes"
                  defaultChecked={hasJobCard ? true : false}
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="hasJobCard"
                  value="no"
                  defaultChecked={!hasJobCard ? true : false}
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>4. राशन कार्ड उपलब्ध है या नहीं</h4>
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
                  name="hasRashanCard"
                  value="yes"
                  defaultChecked={hasRashanCard ? true : false}
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="hasRashanCard"
                  value="no"
                  defaultChecked={!hasRashanCard ? true : false}
                />
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                5. विभाग की किसी अन्य योजना में परिवार लाभान्वित है तो उसका
                विवरण
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
                  name="isProfitTakerOfotherAgricultureYojna"
                  value="yes"
                  defaultChecked={
                    isProfitTakerOfotherAgricultureYojna ? true : false
                  }
                />
                <Form.Check
                  type="radio"
                  id="radioNO"
                  label="NO"
                  name="isProfitTakerOfotherAgricultureYojna"
                  value="no"
                  defaultChecked={
                    !isProfitTakerOfotherAgricultureYojna ? true : false
                  }
                />
              </Stack>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
