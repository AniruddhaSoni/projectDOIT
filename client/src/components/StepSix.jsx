import React, { useContext } from "react";
import { Container, Form, Row, Col, Stack, Button } from "react-bootstrap";
import { LocalContext } from "../Contexts/provider";

export default function StepSix() {
  const [state, dispatch] = useContext(LocalContext);
  const { tribalDevelopementDepartment } = state;

  const {
    childrenLiveInHostels,
    studentsGettingScholarShips,
    economicalHelpForBSTC,
    studentsHavingBenifitOfFreeScooty,
    childrenAdmittedInDayCare,
    economicalHelpInAccidentDiseaseDeath,
    coachingBenifitsToGettingAdmissionInIITPMTs,
    noOfStudentsGettingAdmissionInCompetitiveExams,
  } = tribalDevelopementDepartment;

  const handleFieldChange = (e, index) => {
    const { name, value, type } = e.target;
    const dataAttri = e.target.getAttribute("data-property");
    const values = { ...tribalDevelopementDepartment };

    if (type === "radio") {
      values[name] = value === "yes" ? true : false;
    } else if (
      name === "childrenAdmittedInDayCare" ||
      name === "noOfStudentsGettingAdmissionInCompetitiveExams"
    ) {
      values[name] = value;
    } else {
      values[dataAttri][index][name] = value;
    }
    dispatch({
      type: "handleStepSix",
      payload: values,
    });
  };

  const handleAdd = (e) => {
    const dataAttri = e.target.getAttribute("data-property");
    const values = { ...tribalDevelopementDepartment };

    if (
      dataAttri === "childrenLiveInHostels" ||
      dataAttri === "studentsGettingScholarShips" ||
      dataAttri === "studentsHavingBenifitOfFreeScooty"
    ) {
      values[dataAttri].push({ memberName: "" });
    } else {
      values[dataAttri].push({ details: "" });
    }
    dispatch({
      type: "handleStepSix",
      payload: values,
    });
  };

  const handleRemove = (e) => {
    const dataAttri = e.target.getAttribute("data-property");
    const values = { ...tribalDevelopementDepartment };
    if (values[dataAttri].length > 0) {
      values[dataAttri].pop();
      dispatch({
        type: "handleStepThirteen",
        payload: values,
      });
    } else {
      alert("nothing to remove");
    }
  };
  return (
    <Container>
      <h1>जनजाति क्षेत्रीय विकास विभाग-</h1>
      <Form className="my-4">
        <Stack gap={3}>
          <Row>
            <h4>1. छात्रावास में रहने वाले बच्चों का विवरण</h4>
            {childrenLiveInHostels.length > 0 &&
              childrenLiveInHostels.map((ele, index) => (
                <Row key={index}>
                  <Form.Control
                    className="my-2 mx-2"
                    placeholder="छात्र विवरण"
                    name="memberName"
                    value={ele.memberName}
                    data-property="childrenLiveInHostels"
                    onChange={(e) => handleFieldChange(e, index)}
                  ></Form.Control>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="childrenLiveInHostels"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="childrenLiveInHostels"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <h4>2. छात्रवृति प्राप्त करने वाले छात्रों का विवरण</h4>
            {studentsGettingScholarShips.length > 0 &&
              studentsGettingScholarShips.map((ele, index) => (
                <Row key={index}>
                  <Form.Control
                    className="my-2 mx-2"
                    placeholder="छात्र विवरण"
                    name="memberName"
                    value={ele.memberName}
                    data-property="studentsGettingScholarShips"
                    onChange={(e) => handleFieldChange(e, index)}
                  ></Form.Control>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="studentsGettingScholarShips"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="studentsGettingScholarShips"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <h4>3. बी.एस. टी.सी. प्रशिक्षण हेतु आर्थिक सहायता का विवरण </h4>
            {economicalHelpForBSTC.length > 0 &&
              economicalHelpForBSTC.map((ele, index) => (
                <Row>
                  <Form.Control
                    className="my-2 mx-2"
                    placeholder="विवरण"
                    name="details"
                    value={ele.details}
                    data-property="economicalHelpForBSTC"
                    onChange={(e) => handleFieldChange(e, index)}
                  ></Form.Control>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="economicalHelpForBSTC"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="economicalHelpForBSTC"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <h4>4. निःशुल्क स्कूटी से लाभान्वित होने वाले छात्राओं का विवरण</h4>
            {studentsHavingBenifitOfFreeScooty.length > 0 &&
              studentsHavingBenifitOfFreeScooty.map((ele, index) => (
                <Row key={index}>
                  <Form.Control
                    className="my-2 mx-2"
                    placeholder="छात्र विवरण"
                    name="memberName"
                    value={ele.memberName}
                    data-property="studentsHavingBenifitOfFreeScooty"
                    onChange={(e) => handleFieldChange(e, index)}
                  ></Form.Control>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="studentsHavingBenifitOfFreeScooty"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="studentsHavingBenifitOfFreeScooty"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <Col>
              <h4>5. मा-बाडी/ डे-केयर सेन्टर पर भर्ती बच्चों की संख्या</h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="मा-बाडी/ डे-केयर सेन्टर पर भर्ती बच्चों की संख्या"
                name="childrenAdmittedInDayCare"
                value={childrenAdmittedInDayCare}
                onChange={(e) => handleFieldChange(e)}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <h4>6. दुर्घटना/ बीमारी/ मृत्यु पर प्राप्त आर्थिक सहायता</h4>
            {economicalHelpInAccidentDiseaseDeath.length > 0 &&
              economicalHelpInAccidentDiseaseDeath.map((ele, index) => (
                <Row>
                  <Form.Control
                    className="my-2 mx-2"
                    placeholder="विवरण"
                    name="details"
                    value={ele.details}
                    data-property="economicalHelpInAccidentDiseaseDeath"
                    onChange={(e) => handleFieldChange(e, index)}
                  ></Form.Control>
                </Row>
              ))}
            <Stack direction="horizontal" gap={4}>
              <Button
                onClick={handleAdd}
                size="sm"
                variant="dark"
                className="my-4 w-25 py-2"
                data-property="economicalHelpInAccidentDiseaseDeath"
              >
                Add
              </Button>
              <Button
                onClick={handleRemove}
                size="sm"
                variant="danger"
                className="my-4 w-25 py-2"
                data-property="economicalHelpInAccidentDiseaseDeath"
              >
                Remove
              </Button>
            </Stack>
          </Row>
          <Row>
            <Col>
              <h4>
                7. पी.एम.टी/पी.ई.टी/ आई.आई.टी. में प्रवेश हेतु कॉचिंग की सुविधा
              </h4>
            </Col>
            <Col>
              <Stack
                direction="horizontal"
                gap={4}
                onChange={handleFieldChange}
              >
                <Form.Check
                  name="coachingBenifitsToGettingAdmissionInIITPMTs"
                  value="yes"
                  type="radio"
                  id="radioYes"
                  label="YES"
                  defaultChecked={
                    coachingBenifitsToGettingAdmissionInIITPMTs ? true : false
                  }
                />
                <Form.Check
                  name="coachingBenifitsToGettingAdmissionInIITPMTs"
                  defaultChecked={
                    !coachingBenifitsToGettingAdmissionInIITPMTs ? true : false
                  }
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
              <h4>
                8. विभिन्न प्रतियोगी परीक्षाओं में भर्ती होने वाले छात्राओ की
                संख्या
              </h4>
            </Col>
            <Col>
              <Form.Control
                placeholder="विभिन्न प्रतियोगी परीक्षाओं में भर्ती होने वाले छात्राओ की संख्या"
                name="noOfStudentsGettingAdmissionInCompetitiveExams"
                value={noOfStudentsGettingAdmissionInCompetitiveExams}
                onChange={(e) => handleFieldChange(e)}
              ></Form.Control>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  );
}
