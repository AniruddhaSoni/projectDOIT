import React, { useContext } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";

export default function StepTwo() {
  const [state, dispatch] = useContext(LocalContext);
  const { socialJusticeDepartment } = state;
  const {
    pensionScheme,
    sahayogScheme,
    postMetricScheme,
    cmSwarojgarScheme,
    vidhvaPunrvivhaScheme,
    deprivedMembers,
    specialDetails,
  } = socialJusticeDepartment;

  const handleFieldChange = (e, index) => {
    const { name, value } = e.target;
    const dataAttri = e.target.getAttribute("data-property");
    const values = { ...socialJusticeDepartment };

    if (name !== "specialDetails") {
      values[dataAttri][index][name] = value;
    } else {
      values[name] = value;
    }
    dispatch({
      type: "handleStepTwo",
      payload: values,
    });
  };

  const handleAdd = (e) => {
    const dataAttri = e.target.getAttribute("data-property");
    const values = { ...socialJusticeDepartment };

    if (dataAttri === "deprivedMembers") {
      values[dataAttri].push({ memberName: "", schemeName: "" });
    } else {
      values[dataAttri].push({ memberName: "" });
    }
    dispatch({
      type: "handleStepTwo",
      payload: values,
    });
  };

  const handleRemove = (e) => {
    const dataAttri = e.target.getAttribute("data-property");
    const values = { ...socialJusticeDepartment };
    if (values[dataAttri].length > 0) {
      values[dataAttri].pop();
      dispatch({
        type: "handleStepTwo",
        payload: values,
      });
    } else {
      alert("nothing to remove");
    }
  };

  return (
    <Container fluid>
      <h1 className="py-4">2. सामाजिक न्याय एवं अधिकारिता विभाग</h1>
      <Container>
        <Form>
          <h2>विभाग की योजनाओं से लाभान्वित सदस्य का विवरण</h2>
          <Stack gap={4}>
            <Row>
              <h4>1. पेंशन योजना</h4>
              {pensionScheme.length > 0 &&
                pensionScheme.map((ele, index) => (
                  <Row key={index} className="my-2">
                    <Form.Control
                      className="mx-2"
                      onChange={(e) => handleFieldChange(e, index)}
                      value={ele.memberName}
                      type="text"
                      name="memberName"
                      data-property="pensionScheme"
                      placeholder="सदस्य का नाम"
                    ></Form.Control>
                  </Row>
                ))}
              <Stack direction="horizontal" gap={4}>
                <Button
                  size="sm"
                  onClick={handleAdd}
                  variant="dark"
                  className="my-4 w-25 py-2"
                  data-property="pensionScheme"
                >
                  Add
                </Button>
                <Button
                  size="sm"
                  onClick={handleRemove}
                  variant="danger"
                  className="my-4 w-25 py-2"
                  data-property="pensionScheme"
                >
                  Remove
                </Button>
              </Stack>
            </Row>
            <Row>
              <h2>अन्य योजना</h2>
              <Row>
                <h4>2. सहयोग योजना</h4>
                {sahayogScheme.length > 0 &&
                  sahayogScheme.map((ele, index) => (
                    <Row key={index} className="my-2">
                      <Form.Control
                        className="mx-2"
                        onChange={(e) => handleFieldChange(e, index)}
                        value={ele.memberName}
                        type="text"
                        name="memberName"
                        data-property="sahayogScheme"
                        placeholder="सदस्य का नाम"
                      ></Form.Control>
                    </Row>
                  ))}
                <Stack direction="horizontal" gap={4}>
                  <Button
                    size="sm"
                    onClick={handleAdd}
                    variant="dark"
                    className="my-4 w-25 py-2"
                    data-property="sahayogScheme"
                  >
                    Add
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleRemove}
                    variant="danger"
                    className="my-4 w-25 py-2"
                    data-property="sahayogScheme"
                  >
                    Remove
                  </Button>
                </Stack>
              </Row>
            </Row>

            <Row>
              <h4>3. उत्तरमेट्रिक छात्रवृति</h4>
              {postMetricScheme.length > 0 &&
                postMetricScheme.map((ele, index) => (
                  <Row key={index} className="my-2">
                    <Form.Control
                      className="mx-2"
                      onChange={(e) => handleFieldChange(e, index)}
                      value={ele.memberName}
                      type="text"
                      name="memberName"
                      data-property="postMetricScheme"
                      placeholder="सदस्य का नाम"
                    ></Form.Control>
                  </Row>
                ))}
              <Stack direction="horizontal" gap={4}>
                <Button
                  size="sm"
                  onClick={handleAdd}
                  variant="dark"
                  className="my-4 w-25 py-2"
                  data-property="postMetricScheme"
                >
                  Add
                </Button>
                <Button
                  size="sm"
                  onClick={handleRemove}
                  variant="danger"
                  className="my-4 w-25 py-2"
                  data-property="postMetricScheme"
                >
                  Remove
                </Button>
              </Stack>
            </Row>
            <Row>
              <h4>4. मुख्यमंत्री स्वरोजगार योजना</h4>
              {cmSwarojgarScheme.length > 0 &&
                cmSwarojgarScheme.map((ele, index) => (
                  <Row key={index} className="my-2">
                    <Form.Control
                      className="mx-2"
                      onChange={(e) => handleFieldChange(e, index)}
                      value={ele.memberName}
                      type="text"
                      name="memberName"
                      data-property="cmSwarojgarScheme"
                      placeholder="सदस्य का नाम"
                    ></Form.Control>
                  </Row>
                ))}
              <Stack direction="horizontal" gap={4}>
                <Button
                  size="sm"
                  onClick={handleAdd}
                  variant="dark"
                  className="my-4 w-25 py-2"
                  data-property="cmSwarojgarScheme"
                >
                  Add
                </Button>
                <Button
                  size="sm"
                  onClick={handleRemove}
                  variant="danger"
                  className="my-4 w-25 py-2"
                  data-property="cmSwarojgarScheme"
                >
                  Remove
                </Button>
              </Stack>
            </Row>
            <Row>
              <h4>5. विधवा पुनर्विवाह योजना</h4>
              {vidhvaPunrvivhaScheme.length > 0 &&
                vidhvaPunrvivhaScheme.map((ele, index) => (
                  <Row key={index} className="my-2">
                    <Form.Control
                      className="mx-2"
                      onChange={(e) => handleFieldChange(e, index)}
                      value={ele.memberName}
                      type="text"
                      name="memberName"
                      data-property="vidhvaPunrvivhaScheme"
                      placeholder="सदस्य का नाम"
                    ></Form.Control>
                  </Row>
                ))}
              <Stack direction="horizontal" gap={4}>
                <Button
                  size="sm"
                  onClick={handleAdd}
                  variant="dark"
                  className="my-4 w-25 py-2"
                  data-property="vidhvaPunrvivhaScheme"
                >
                  Add
                </Button>
                <Button
                  size="sm"
                  onClick={handleRemove}
                  variant="danger"
                  className="my-4 w-25 py-2"
                  data-property="vidhvaPunrvivhaScheme"
                >
                  Remove
                </Button>
              </Stack>
            </Row>
            <Row>
              <h2>
                6. परिवार में लाभ हेतु पात्र होने के बावजूद वंचितसदस्य का विवरण
              </h2>
              {deprivedMembers.length > 0 &&
                deprivedMembers.map((ele, index) => (
                  <Row key={index} className="my-2">
                    <Col>
                      <Form.Control
                        onChange={(e) => handleFieldChange(e, index)}
                        value={ele.memberName}
                        type="text"
                        name="memberName"
                        data-property="deprivedMembers"
                        placeholder="सदस्य का नाम"
                      ></Form.Control>
                    </Col>
                    <Col>
                      <Form.Control
                        onChange={(e) => handleFieldChange(e, index)}
                        value={ele.schemeName}
                        type="text"
                        name="schemeName"
                        data-property="deprivedMembers"
                        placeholder="योजना का नाम"
                      ></Form.Control>
                    </Col>
                  </Row>
                ))}
              <Stack direction="horizontal" gap={4}>
                <Button
                  size="sm"
                  onClick={handleAdd}
                  variant="dark"
                  className="my-4 w-25 py-2"
                  data-property="deprivedMembers"
                >
                  Add
                </Button>
                <Button
                  size="sm"
                  onClick={handleRemove}
                  variant="danger"
                  className="my-4 w-25 py-2"
                  data-property="deprivedMembers"
                >
                  Remove
                </Button>
              </Stack>
            </Row>
            <Row>
              <Col>
                <h4>7. विशेष विवरण</h4>
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
    </Container>
  );
}
